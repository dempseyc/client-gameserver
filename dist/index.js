// import css from './style.css';

let connection;
let clientId = 'anon';
let clientList_cache = [];

// need exception handled
function connect () {
    return new Promise((resolve,reject)=> {
        const socket = new WebSocket("ws://ttt-hit-pow.herokuapp.com");
        socket.onopen = (event) => {
            console.log(event);
            return resolve(socket);
        }
    });
}

connect().then( function (socket) {
    socket.onmessage = (event) => {
        handleMessages(JSON.parse(event.data));
        return;
    };
    socket.onclose = (event) => {
        handleMessages(event);
        return;
    };
    socket.onerror = event => console.log('ws error', event);
    connection = socket;
})



// cache DOM
let RoomList = document.getElementById('room-list');
let RoomStatus = document.getElementById('room-status');
let MessagesList = document.getElementById('room-chat-messages');
let RoomChatMessage = document.getElementsByClassName('room-chat-message')[0];
let ChatForm = document.getElementById('room-chat-form');
ChatForm.addEventListener('submit', sendPubMessage);

let NewMessageFlash = document.getElementsByClassName('new-message-flash')[0];
let RoomChatToggle = document.getElementsByClassName('room-chat-toggle')[0];

listenSquares();

// handle ws events

function newMessageFlash(message) {
    NewMessageFlash.innerHTML = `<span>${message.sender}: ${message.text}</span>`;
    NewMessageFlash.classList.add('new-message');
    RoomChatToggle.classList.add('new-message');
    let timer = setTimeout(() => {
        NewMessageFlash.classList.remove('new-message');
        RoomChatToggle.classList.remove('new-message');
    }, 3500);
}

function handleMessages (data) {
    let message = data;

    if (message.type === 'close') {
        message.tag = 'goodbye';
        message.text = 'goodbye';
    }
    console.log(message);
    if (message.sender && message.text) {
        newMessageFlash(message);
    }

    switch (message.tag) {
        case 'hello':
            RoomStatus.innerHTML = `IN ROOM:`;
            break;
        case 'goodbye':
            handleGameMessages(message);
            RoomStatus.innerHTML = `RELOAD BROWSER`;
            break;
        case 'clients':
            updateClientList(message);
            // when this happens and there is 1 player in players,
            // needs to treat like a join2.
            // do in updateClientList
            break;
        case 'register':
            clientId = message.text;
            updateClientList(clientList_cache);
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
    MessagesList.prepend(new_message);
    // scroll to bottom after timer goes off
}

const clientHandle = function (id) {
    let printHandle = (id !== clientId) ? `<li>${id}</li>` : `<li>${id} (you)</li>`;
    return printHandle;
};

function updateClientList(message) {
    if (clientId === 'anon') {
        clientList_cache = message;
    }
    let new_list = message.list.map( id => clientHandle(id) ).join('');
    RoomList.innerHTML = new_list;
    if (message.players.length > 0) {
        // and i am not in it
        if (!message.players.includes(clientId)) {
            message.text = 'joins';
            handleGameMessages(message);
        }
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

// let cards = [];
let chosenC = null;
let colors = ['color1','color2'];
let hexColors = ['#c00000','#3030d0'];
let shapes = ['X','O'];

let cardColor = ()=>colors[myNum-1];
let bombPlaced = false;
let bombReady = false;

//cache dom
let board = document.getElementById('board');
let oppArea = document.getElementById('opponent');
let avtArea = document.getElementById('avatar');
let cardContainer = false;

avtArea.addEventListener('click', () => {
    if (!gameOn) {
        registerPlayer();
    }
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
                updateAvtArea('join',{player: message.sender,playerNum: myNum});
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
                updateAvtArea('join',{player: message.sender,playerNum: myNum});
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
        case 'joins':
            playerList = message.players;
            if (playerList.length === 2) {
                console.log('plist2');
                updateAvtArea('reject',{player: playerList[0],playerNum: 1});
                updateOppArea('other',playerList[1],2);
            }
            if (playerList.length === 1) {
                console.log('plist1');
                updateOppArea('join',playerList[0],1);
            }
            break;
        case 'start':
            updateBoard(message.data);
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
            updateAvtArea('cards', message.data);
            break;
        case 'win':
            message.text = message.data
            updateMessagesList(message);
            break;
        case 'goodbye':
            myNum = null;
            gameOn = false;
            updateAvtArea('reset');
            updateOppArea('reset');
            playerList = [];
        case 'reset':
            myNum = null;
            gameOn = false;
            updateBoard(message.data);
            updateAvtArea('reset');
            updateOppArea('reset');
            playerList = [];
            break;
        default:
            break;
    }
}

function updateAvtArea(uType,data) {
    switch (uType) {
        case 'join':
            avtArea.innerHTML = `<span style="color: ${hexColors[data.playerNum-1]}">${data.player} as ${shapes[data.playerNum-1]}</span>`;
            break;
        case 'reject':
            avtArea.innerHTML = `<span style="color: ${hexColors[data.playerNum-1]}">${data.player} as ${shapes[data.playerNum-1]}</span>`;
            break;
        case 'reset':
            cardContainer = false;
            chosenC = null;
            myTurn = false;
            avtArea.classList.remove('my-turn');
            avtArea.innerHTML = `<span>click to play</span>`;
            break;
        case 'cards':
            updateCardContainer(data);
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
            oppArea.innerHTML = `<span style="color: ${hexColors[playerNum-1]}">${player} as ${shapes[playerNum-1]}</span>`;
            break;
        case 'other':
            oppArea.innerHTML = `<span style="color: ${hexColors[playerNum-1]}">${player} as ${shapes[playerNum-1]}</span>`;
            break;
        case 'reset':
            oppArea.innerHTML = `<span>waiting for opponent...</span>`;
            break;
        default:
            console.log('unknown');
            break;
    }
}

function updateBoard(boardArr) {
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
        console.log('bombReady')
    }
}

function updateCardContainer(cards) {
    if (!cardContainer) {
        cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        avtArea.appendChild(cardContainer);
        console.log('cardContainer created');
    }
    if (cards.length > 0) {
        let card;
        cards.forEach((cVal,i) => {
            card = document.createElement('div');
            card.classList.add('card',`c-${cVal}`,`${cardColor()}`);
            cardContainer.appendChild(card);
            // card.innerHTML = `${cVal}`;
            listenCard(card);
        });
        autoChooseCard(card);
    } else { autoChooseCard(document.getElementsByClassName('card')[0]) }
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
    let cardDisplay = document.getElementsByClassName('card');
    [].forEach.call(cardDisplay, (card) => {
        card.classList.remove('chosen');
    });
    event.target.classList.add('chosen');
    chosenC = event.target.classList[1];
}

function autoChooseCard(card) {
    let cardDisplay = document.getElementsByClassName('card');
    [].forEach.call(cardDisplay, (card) => {
        card.classList.remove('chosen');
    });
    chosenC = card.classList[1];
    card.classList.add('chosen');
}

function chooseSquare(event) {
    let square = event.target;
    let squareId = square.getAttribute('id');
    if (myTurn) {
        let card = document.getElementsByClassName(`${chosenC}`)[0];
        let cardVal = card.classList[1].split('-')[1];
        // console.log('cardval=',cardVal);
        if (square.classList[1] !== 'occupied' && cardVal === '3') {
            sendMove(cardVal, squareId);
            card.parentNode.removeChild(card);
            bombPlaced = true;
            console.log(bombPlaced);
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
    console.log(m);
    connection.send(JSON.stringify(m));
}

//// drawer control
// cache dom
let Wrapper2 = document.getElementsByClassName('wrapper-2')[0];
// have RoomChatToggle
function toggleDrawer () {
    RoomChatToggle.classList.remove('game-mode');
    RoomChatToggle.innerHTML = 'back';

    let newState = Wrapper2.classList.contains('drawer-open') ? 'drawer-closed' : 'drawer-open' ;
    let oldState = Wrapper2.classList.contains('drawer-open') ? 'drawer-open' : 'drawer-closed' ;

    if (newState === 'drawer-closed') {
        Wrapper2.addEventListener('transitionend', function () {
            RoomChatToggle.classList.add('game-mode');
            RoomChatToggle.innerHTML = 'chat';
        }, {
            capture: false,
            once: true,
            passive: false
          });
    } else {
        RoomChatMessage.focus();
    }

    Wrapper2.classList.remove(oldState);
    Wrapper2.classList.add(newState);
    return;
};

RoomChatToggle.addEventListener('click',toggleDrawer);


//// info panel control
// cache dom

let InfoButton = document.getElementsByClassName('info-button')[0];
let InfoPanel = document.getElementsByClassName('info')[0];


function toggleInfo () {
    InfoPanel.classList.remove('height-0');

    let newState = InfoPanel.classList.contains('show') ? 'hide' : 'show';
    let oldState = InfoPanel.classList.contains('show') ? 'show' : 'hide';
    
    if (newState === 'hide') {
        InfoPanel.addEventListener('transitionend', () => { InfoPanel.classList.add('height-0') }, {
            capture: false,
            once: true,
            passive: false
          });
    }

    InfoPanel.classList.remove(oldState);
    InfoPanel.classList.add(newState);

    return;
}

InfoButton.addEventListener('click', toggleInfo);
InfoPanel.addEventListener('click', toggleInfo);

