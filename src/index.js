import css from './style.css';

let connection;
let clientId = 'anon';

// need exception handled
function connect () {
    return new Promise((resolve,reject)=> {
        const socket = new WebSocket("ws://ttt-hit-pow.herokuapp.com");
        socket.onopen = () => resolve(socket);
    });
}
connect().then((socket)=>{
    socket.onmessage = (event) => {
        handleMessages(event)
    }
    connection = socket;
});

// cache DOM
let room_list = document.getElementById('room-list');
let messages_list = document.getElementById('room-chat-messages');
let chat_form = document.getElementById('room-chat-form');
chat_form.addEventListener('submit', sendPubMessage);

// handle ws events
function handleMessages (e) {
    let message = JSON.parse(e.data);
    console.log(message);
    switch (message.tag) {
        case 'clients':
            updateClientList(message);
            break;
        case 'register':
            clientId = message.text;
            break;
        case 'public':
            updateMessagesList(message);
            break;
        case 'direct':
            updateMessagesList(message);
            if (message.sender === 'game') { handleGameMessages(message); }
            break;
        case 'game':
            handleGameMessages(message);
            break;
        default:
            break
    }

};

function updateMessagesList(message) {
    let new_message = document.createElement('li');
    new_message.innerHTML = `<span>${message.sender}: ${message.text}</span>`;
    messages_list.prepend(new_message);
    // scroll to bottom after timer goes off
}

function updateClientList(message) {
    console.log(message);
    let new_list = message.list.map((clientHandle) => `<li>${clientHandle}</li>`).join('');
    room_list.innerHTML = new_list;
    if (message.players.length > 0) {
        message.text = 'late join';
        handleGameMessages(message);
    }
}

function sendPubMessage (event) {
    event.preventDefault();
    let text = event.target.elements[0].value;
    let tag = 'public';
    let m = {
        "tag": tag,
        "sender": clientId,
        "text": text
        }; 
    connection.send(JSON.stringify(m));
    event.target.elements[0].value = '';
}

///////////////////////// game stuff
let gameOn = false;
let myTurn = false;

let playerList = [];
let myNum = null;

//cache dom
let board = document.getElementById('board');
let oppArea = document.getElementById('opponent');
let avtArea = document.getElementById('avatar');
let cardContainer = document.getElementsByClassName('card-container')[0];
let cards = [];
let chosenC = null;
let colors = ['color1','color2'];
let cardColor = ()=>colors[myNum-1];
let bombPlaced = false;
let bombReady = false;

avtArea.addEventListener('click', () => {
    if (!gameOn) {
        registerPlayer();
    }
    // updateAvtArea();
 });

function registerPlayer() {
    let m = {
        "tag": "game",
        "sender": clientId,
        "receiver": "game",
        "text": "join"
        };
    connection.send(JSON.stringify(m));
    gameOn = true;
}

function handleGameMessages(message) {
    switch (message.text) {
        case 'join1':
            playerList.push(message.sender);
            if (message.sender == clientId) {
                myNum = 1;
                updateAvtArea('join',message.sender,myNum);
                updateAvtArea('my_turn');
            } else {
                updateOppArea('join',message.sender,1);
            }
            break;
        case 'join2':
            playerList.push(message.sender);
            console.log(playerList);
            if (message.sender == clientId) {
                myNum = 2;
                updateAvtArea('join',message.sender,myNum);
            } else {
                updateOppArea('join',message.sender,2);
            }
            if (playerList[0] === clientId) {
                let m = {
                    "tag": "game",
                    "sender": clientId,
                    "receiver": "game",
                    "text":"ready"
                };
                connection.send(JSON.stringify(m));
            }
            break;
        case 'late join':
            playerList = message.players;
            if (playerList.length === 2) {
                console.log('plist2');
                updateAvtArea('reject',playerList[0],1);
                updateOppArea('reject',playerList[1],2);
                gameOn = true;
            }
            if (playerList.length === 1) {
                console.log('plist1');
                updateOppArea('join',playerList[0],1);
            }
            break;
        case 'try later.':
            updateAvtArea('reject',playerList[0],1);
            updateOppArea('reject',playerList[1],2);
            break;
        case 'start':
            updateBoard();
            break;
        case 'board':
            updateBoard(message.data);
            updateAvtArea('my_turn');
            break;
        case 'disable':
            bombPlaced = false;
            bombReady = false;
            console.log('disabled')
            updateBoard(message.data);
            updateAvtArea('my_turn');
            break;
        case 'cards':
            cards = message.data;
            updateAvtArea('cards');
            break;
        case 'win':
            message.text = message.data
            updateMessagesList(message);
        case 'reset':
            updateBoard();
            updateAvtArea('reset');
            updateOppArea('reset');
            playerList = [];
            gameOn = false;
            break;
        default:
            break;
    }
}

function updateAvtArea(uType,player,playerNum) {
    switch (uType) {
        case 'join':
            avtArea.innerHTML = `<span>${player} as Player${playerNum}</span>`;
            updateCardContainer();
            break;
        case 'reject':
            avtArea.innerHTML = `<span>${player} as Player${playerNum}</span>`;
            break;
        case 'reset':
            avtArea.innerHTML = `<span>click to play</span>`;
            break;
        case 'cards':
            updateCardContainer('cards');
            break;
        case 'my_turn':
            myTurn = myTurn ? false : true;
            myTurn ? avtArea.classList.add('my-turn') : avtArea.classList.remove('my-turn');
            break;
        default:
            console.log('unknown');
            break;
    }
}

function updateOppArea(uType,player,playerNum) {
    switch (uType) {
        case 'join':
            oppArea.innerHTML = `<span>${player} as Player${playerNum}</span>`;
            break;
        case 'reject':
            oppArea.innerHTML = `<span>${player} as Player${playerNum}</span>`;
            break;
        case 'reset':
            oppArea.innerHTML = `<span>waiting for opponent...</span>`;
            break;
        default:
            console.log('unknown');
            break;
    }
}

function updateBoard(boardArr = 'blank') {
    if (boardArr === 'blank') {
        buildBoard();
    }
    else {
        boardArr.forEach((r,i)=> r.forEach((s,j)=>{
            let idx = 's-'+String(i)+String(j);
            let square = document.getElementById(`${idx}`);
            if (s !== '0') {
                square.className = 'square';
                square.classList.add('occupied', `color${s}`);
            } else {
                square.className = 'square';
            }
        }));
        if (bombReady) {
            autoBombExplode()
        }
        if (bombPlaced) {
            bombReady = true;
        }
    }
}

// forget why this was here
// function returnCard(card) {
//     let cardFromBoard = document.getElementById(card);
//     cardFromBoard.classList.remove('nodisplay');
// }

function buildBoard() {
    listenSquares();
    console.log("board ready");
}

function updateCardContainer(change, idx) {
    if (!cardContainer) {
        cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        avtArea.appendChild(cardContainer);
        // console.log(cardContainer);
    } else {
        switch(change) {
            case 'cards':
                cards.forEach((cVal,i) => {
                    let card = document.createElement('div');
                    card.classList.add('card',`c-${cVal}`,`${cardColor()}`);
                    card.innerHTML = `${cVal}`;
                    cardContainer.appendChild(card);
                    listenCard(card);
                });
                break;
            default:
                break
        }
    }
}

function listenSquares() {
    let ss = document.getElementsByClassName('square');
    [].forEach.call(ss, (s) => {
        s.addEventListener('click', chooseSquare);
    });
}

function listenCard(card) {
    card.addEventListener('click', chooseCard); 
}

function chooseCard(event) {
    let cards = document.getElementsByClassName('card');
    [].forEach.call(cards, (card) => {
        card.classList.remove('chosen');
    });
    event.target.classList.add('chosen');
    chosenC = event.target.classList[1];
}

function chooseSquare(event) {
    let square = event.target;
    let squareId = square.getAttribute('id');
    if (myTurn) {
        let card = document.getElementsByClassName(`${chosenC}`)[0];
        let cardVal = card.classList[1].split('-')[1];
        console.log('cardval=',cardVal);
        if (square.classList[1] !== 'occupied' && cardVal === '3') {
            sendMove(cardVal, squareId);
            card.parentNode.removeChild(card);
            bombPlaced = true;
        }
        else if ((square.classList[1] !== 'occupied' && cardVal === '1') || cardVal === '2' ) {
            sendMove(cardVal, squareId);
            card.parentNode.removeChild(card);
        }
    }
}

function autoBombExplode() {
    sendMove();
}

function sendMove(cardVal, square) {
    let m = {}
    if (!bombReady) {
        let s = square.split('-')[1];
        m = {
            "tag": "game",
            "sender": `${clientId}`,
            "receiver": "game",
            "text": "move",
            "data": [myNum,cardVal,s]
        }
    } else {
        m = {
            "tag": "game",
            "sender": `${clientId}`,
            "receiver": "game",
            "text": "move",
            "data": [myNum,'','','bomb']
        }
        bombPlaced = false;
        bombReady = false;
    }
    connection.send(JSON.stringify(m));
}