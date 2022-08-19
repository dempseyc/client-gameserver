/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLDREQUE0RCxxQ0FBcUM7QUFDakc7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHR0LWhpdC1wb3ctY2xpZW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgY29ubmVjdGlvbjtcbmxldCBjbGllbnRJZCA9ICdhbm9uJztcbmxldCBjbGllbnRMaXN0X2NhY2hlID0gW107XG5cbi8vIG5lZWQgZXhjZXB0aW9uIGhhbmRsZWRcbmZ1bmN0aW9uIGNvbm5lY3QgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT4ge1xuICAgICAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly90dHQtaGl0LXBvdy5oZXJva3VhcHAuY29tXCIpO1xuICAgICAgICBzb2NrZXQub25vcGVuID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShzb2NrZXQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbm5lY3QoKS50aGVuKCBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgICBoYW5kbGVNZXNzYWdlcyhKU09OLnBhcnNlKGV2ZW50LmRhdGEpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgc29ja2V0Lm9uY2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaGFuZGxlTWVzc2FnZXMoZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBzb2NrZXQub25lcnJvciA9IGV2ZW50ID0+IGNvbnNvbGUubG9nKCd3cyBlcnJvcicsIGV2ZW50KTtcbiAgICBjb25uZWN0aW9uID0gc29ja2V0O1xufSlcblxuXG5cbi8vIGNhY2hlIERPTVxubGV0IFJvb21MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb20tbGlzdCcpO1xubGV0IFJvb21TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS1zdGF0dXMnKTtcbmxldCBNZXNzYWdlc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS1jaGF0LW1lc3NhZ2VzJyk7XG5sZXQgUm9vbUNoYXRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncm9vbS1jaGF0LW1lc3NhZ2UnKVswXTtcbmxldCBDaGF0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLWNoYXQtZm9ybScpO1xuQ2hhdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2VuZFB1Yk1lc3NhZ2UpO1xuXG5sZXQgTmV3TWVzc2FnZUZsYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3LW1lc3NhZ2UtZmxhc2gnKVswXTtcbmxldCBSb29tQ2hhdFRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jvb20tY2hhdC10b2dnbGUnKVswXTtcblxubGlzdGVuU3F1YXJlcygpO1xuXG4vLyBoYW5kbGUgd3MgZXZlbnRzXG5cbmZ1bmN0aW9uIG5ld01lc3NhZ2VGbGFzaChtZXNzYWdlKSB7XG4gICAgTmV3TWVzc2FnZUZsYXNoLmlubmVySFRNTCA9IGA8c3Bhbj4ke21lc3NhZ2Uuc2VuZGVyfTogJHttZXNzYWdlLnRleHR9PC9zcGFuPmA7XG4gICAgTmV3TWVzc2FnZUZsYXNoLmNsYXNzTGlzdC5hZGQoJ25ldy1tZXNzYWdlJyk7XG4gICAgUm9vbUNoYXRUb2dnbGUuY2xhc3NMaXN0LmFkZCgnbmV3LW1lc3NhZ2UnKTtcbiAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgTmV3TWVzc2FnZUZsYXNoLmNsYXNzTGlzdC5yZW1vdmUoJ25ldy1tZXNzYWdlJyk7XG4gICAgICAgIFJvb21DaGF0VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ25ldy1tZXNzYWdlJyk7XG4gICAgfSwgMzUwMCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VzIChkYXRhKSB7XG4gICAgbGV0IG1lc3NhZ2UgPSBkYXRhO1xuXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBtZXNzYWdlLnRhZyA9ICdnb29kYnllJztcbiAgICAgICAgbWVzc2FnZS50ZXh0ID0gJ2dvb2RieWUnO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICBpZiAobWVzc2FnZS5zZW5kZXIgJiYgbWVzc2FnZS50ZXh0KSB7XG4gICAgICAgIG5ld01lc3NhZ2VGbGFzaChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKG1lc3NhZ2UudGFnKSB7XG4gICAgICAgIGNhc2UgJ2hlbGxvJzpcbiAgICAgICAgICAgIFJvb21TdGF0dXMuaW5uZXJIVE1MID0gYElOIFJPT006YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnb29kYnllJzpcbiAgICAgICAgICAgIGhhbmRsZUdhbWVNZXNzYWdlcyhtZXNzYWdlKTtcbiAgICAgICAgICAgIFJvb21TdGF0dXMuaW5uZXJIVE1MID0gYFJFTE9BRCBCUk9XU0VSYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjbGllbnRzJzpcbiAgICAgICAgICAgIHVwZGF0ZUNsaWVudExpc3QobWVzc2FnZSk7XG4gICAgICAgICAgICAvLyB3aGVuIHRoaXMgaGFwcGVucyBhbmQgdGhlcmUgaXMgMSBwbGF5ZXIgaW4gcGxheWVycyxcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHRyZWF0IGxpa2UgYSBqb2luMi5cbiAgICAgICAgICAgIC8vIGRvIGluIHVwZGF0ZUNsaWVudExpc3RcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgICAgICBjbGllbnRJZCA9IG1lc3NhZ2UudGV4dDtcbiAgICAgICAgICAgIHVwZGF0ZUNsaWVudExpc3QoY2xpZW50TGlzdF9jYWNoZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHVibGljJzpcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2VzTGlzdChtZXNzYWdlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXJlY3QnOlxuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZXNMaXN0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc2VuZGVyID09PSAnZ2FtZScpIHsgaGFuZGxlR2FtZU1lc3NhZ2VzKG1lc3NhZ2UpOyB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2FtZSc6XG4gICAgICAgICAgICBoYW5kbGVHYW1lTWVzc2FnZXMobWVzc2FnZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxuXG59O1xuXG5mdW5jdGlvbiB1cGRhdGVNZXNzYWdlc0xpc3QobWVzc2FnZSkge1xuICAgIGxldCBuZXdfbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3X21lc3NhZ2UuaW5uZXJIVE1MID0gYDxzcGFuPiR7bWVzc2FnZS5zZW5kZXJ9OiAke21lc3NhZ2UudGV4dH08L3NwYW4+YDtcbiAgICBNZXNzYWdlc0xpc3QucHJlcGVuZChuZXdfbWVzc2FnZSk7XG4gICAgLy8gc2Nyb2xsIHRvIGJvdHRvbSBhZnRlciB0aW1lciBnb2VzIG9mZlxufVxuXG5jb25zdCBjbGllbnRIYW5kbGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBsZXQgcHJpbnRIYW5kbGUgPSAoaWQgIT09IGNsaWVudElkKSA/IGA8bGk+JHtpZH08L2xpPmAgOiBgPGxpPiR7aWR9ICh5b3UpPC9saT5gO1xuICAgIHJldHVybiBwcmludEhhbmRsZTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUNsaWVudExpc3QobWVzc2FnZSkge1xuICAgIGlmIChjbGllbnRJZCA9PT0gJ2Fub24nKSB7XG4gICAgICAgIGNsaWVudExpc3RfY2FjaGUgPSBtZXNzYWdlO1xuICAgIH1cbiAgICBsZXQgbmV3X2xpc3QgPSBtZXNzYWdlLmxpc3QubWFwKCBpZCA9PiBjbGllbnRIYW5kbGUoaWQpICkuam9pbignJyk7XG4gICAgUm9vbUxpc3QuaW5uZXJIVE1MID0gbmV3X2xpc3Q7XG4gICAgaWYgKG1lc3NhZ2UucGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGFuZCBpIGFtIG5vdCBpbiBpdFxuICAgICAgICBpZiAoIW1lc3NhZ2UucGxheWVycy5pbmNsdWRlcyhjbGllbnRJZCkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dCA9ICdqb2lucyc7XG4gICAgICAgICAgICBoYW5kbGVHYW1lTWVzc2FnZXMobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNlbmRQdWJNZXNzYWdlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRleHQgPSBldmVudC50YXJnZXQuZWxlbWVudHNbMF0udmFsdWU7XG4gICAgbGV0IHRhZyA9ICdwdWJsaWMnO1xuICAgIGxldCBtID0ge1xuICAgICAgICBcInRhZ1wiOiB0YWcsXG4gICAgICAgIFwic2VuZGVyXCI6IGNsaWVudElkLFxuICAgICAgICBcInRleHRcIjogdGV4dFxuICAgICAgICB9OyBcbiAgICBjb25uZWN0aW9uLnNlbmQoSlNPTi5zdHJpbmdpZnkobSkpO1xuICAgIGV2ZW50LnRhcmdldC5lbGVtZW50c1swXS52YWx1ZSA9ICcnO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGdhbWUgc3R1ZmZcbmxldCBnYW1lT24gPSBmYWxzZTtcbmxldCBteVR1cm4gPSBmYWxzZTtcblxubGV0IHBsYXllckxpc3QgPSBbXTtcbmxldCBteU51bSA9IG51bGw7XG5cbi8vIGxldCBjYXJkcyA9IFtdO1xubGV0IGNob3NlbkMgPSBudWxsO1xubGV0IGNvbG9ycyA9IFsnY29sb3IxJywnY29sb3IyJ107XG5sZXQgaGV4Q29sb3JzID0gWycjYzAwMDAwJywnIzMwMzBkMCddO1xubGV0IHNoYXBlcyA9IFsnWCcsJ08nXTtcblxubGV0IGNhcmRDb2xvciA9ICgpPT5jb2xvcnNbbXlOdW0tMV07XG5sZXQgYm9tYlBsYWNlZCA9IGZhbHNlO1xubGV0IGJvbWJSZWFkeSA9IGZhbHNlO1xuXG4vL2NhY2hlIGRvbVxubGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XG5sZXQgb3BwQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHBvbmVudCcpO1xubGV0IGF2dEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyJyk7XG5sZXQgY2FyZENvbnRhaW5lciA9IGZhbHNlO1xuXG5hdnRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghZ2FtZU9uKSB7XG4gICAgICAgIHJlZ2lzdGVyUGxheWVyKCk7XG4gICAgfVxuIH0pO1xuXG5mdW5jdGlvbiByZWdpc3RlclBsYXllcigpIHtcbiAgICBsZXQgbSA9IHtcbiAgICAgICAgXCJ0YWdcIjogXCJnYW1lXCIsXG4gICAgICAgIFwic2VuZGVyXCI6IGNsaWVudElkLFxuICAgICAgICBcInJlY2VpdmVyXCI6IFwiZ2FtZVwiLFxuICAgICAgICBcInRleHRcIjogXCJqb2luXCJcbiAgICAgICAgfTtcbiAgICBjb25uZWN0aW9uLnNlbmQoSlNPTi5zdHJpbmdpZnkobSkpO1xuICAgIGdhbWVPbiA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUdhbWVNZXNzYWdlcyhtZXNzYWdlKSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnRleHQpIHtcbiAgICAgICAgY2FzZSAnam9pbjEnOlxuICAgICAgICAgICAgcGxheWVyTGlzdC5wdXNoKG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLnNlbmRlciA9PSBjbGllbnRJZCkge1xuICAgICAgICAgICAgICAgIG15TnVtID0gMTtcbiAgICAgICAgICAgICAgICB1cGRhdGVBdnRBcmVhKCdqb2luJyx7cGxheWVyOiBtZXNzYWdlLnNlbmRlcixwbGF5ZXJOdW06IG15TnVtfSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQXZ0QXJlYSgnbXlfdHVybicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVPcHBBcmVhKCdqb2luJyxtZXNzYWdlLnNlbmRlciwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdqb2luMic6XG4gICAgICAgICAgICBwbGF5ZXJMaXN0LnB1c2gobWVzc2FnZS5zZW5kZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyTGlzdCk7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5zZW5kZXIgPT0gY2xpZW50SWQpIHtcbiAgICAgICAgICAgICAgICBteU51bSA9IDI7XG4gICAgICAgICAgICAgICAgdXBkYXRlQXZ0QXJlYSgnam9pbicse3BsYXllcjogbWVzc2FnZS5zZW5kZXIscGxheWVyTnVtOiBteU51bX0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVPcHBBcmVhKCdqb2luJyxtZXNzYWdlLnNlbmRlciwyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGF5ZXJMaXN0WzBdID09PSBjbGllbnRJZCkge1xuICAgICAgICAgICAgICAgIGxldCBtID0ge1xuICAgICAgICAgICAgICAgICAgICBcInRhZ1wiOiBcImdhbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzZW5kZXJcIjogY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgICAgIFwicmVjZWl2ZXJcIjogXCJnYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwicmVhZHlcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5zZW5kKEpTT04uc3RyaW5naWZ5KG0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdqb2lucyc6XG4gICAgICAgICAgICBwbGF5ZXJMaXN0ID0gbWVzc2FnZS5wbGF5ZXJzO1xuICAgICAgICAgICAgaWYgKHBsYXllckxpc3QubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsaXN0MicpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUF2dEFyZWEoJ3JlamVjdCcse3BsYXllcjogcGxheWVyTGlzdFswXSxwbGF5ZXJOdW06IDF9KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVPcHBBcmVhKCdvdGhlcicscGxheWVyTGlzdFsxXSwyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGF5ZXJMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGlzdDEnKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVPcHBBcmVhKCdqb2luJyxwbGF5ZXJMaXN0WzBdLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgIHVwZGF0ZUJvYXJkKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9hcmQnOlxuICAgICAgICAgICAgdXBkYXRlQm9hcmQobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgIHVwZGF0ZUF2dEFyZWEoJ215X3R1cm4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXNhYmxlJzpcbiAgICAgICAgICAgIGJvbWJQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJvbWJSZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIHVwZGF0ZUJvYXJkKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgICB1cGRhdGVBdnRBcmVhKCdteV90dXJuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FyZHMnOlxuICAgICAgICAgICAgdXBkYXRlQXZ0QXJlYSgnY2FyZHMnLCBtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dpbic6XG4gICAgICAgICAgICBtZXNzYWdlLnRleHQgPSBtZXNzYWdlLmRhdGFcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2VzTGlzdChtZXNzYWdlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnb29kYnllJzpcbiAgICAgICAgICAgIG15TnVtID0gbnVsbDtcbiAgICAgICAgICAgIGdhbWVPbiA9IGZhbHNlO1xuICAgICAgICAgICAgdXBkYXRlQXZ0QXJlYSgncmVzZXQnKTtcbiAgICAgICAgICAgIHVwZGF0ZU9wcEFyZWEoJ3Jlc2V0Jyk7XG4gICAgICAgICAgICBwbGF5ZXJMaXN0ID0gW107XG4gICAgICAgIGNhc2UgJ3Jlc2V0JzpcbiAgICAgICAgICAgIG15TnVtID0gbnVsbDtcbiAgICAgICAgICAgIGdhbWVPbiA9IGZhbHNlO1xuICAgICAgICAgICAgdXBkYXRlQm9hcmQobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgIHVwZGF0ZUF2dEFyZWEoJ3Jlc2V0Jyk7XG4gICAgICAgICAgICB1cGRhdGVPcHBBcmVhKCdyZXNldCcpO1xuICAgICAgICAgICAgcGxheWVyTGlzdCA9IFtdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF2dEFyZWEodVR5cGUsZGF0YSkge1xuICAgIHN3aXRjaCAodVR5cGUpIHtcbiAgICAgICAgY2FzZSAnam9pbic6XG4gICAgICAgICAgICBhdnRBcmVhLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImNvbG9yOiAke2hleENvbG9yc1tkYXRhLnBsYXllck51bS0xXX1cIj4ke2RhdGEucGxheWVyfSBhcyAke3NoYXBlc1tkYXRhLnBsYXllck51bS0xXX08L3NwYW4+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWplY3QnOlxuICAgICAgICAgICAgYXZ0QXJlYS5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjogJHtoZXhDb2xvcnNbZGF0YS5wbGF5ZXJOdW0tMV19XCI+JHtkYXRhLnBsYXllcn0gYXMgJHtzaGFwZXNbZGF0YS5wbGF5ZXJOdW0tMV19PC9zcGFuPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgICAgY2FyZENvbnRhaW5lciA9IGZhbHNlO1xuICAgICAgICAgICAgY2hvc2VuQyA9IG51bGw7XG4gICAgICAgICAgICBteVR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIGF2dEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnbXktdHVybicpO1xuICAgICAgICAgICAgYXZ0QXJlYS5pbm5lckhUTUwgPSBgPHNwYW4+Y2xpY2sgdG8gcGxheTwvc3Bhbj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NhcmRzJzpcbiAgICAgICAgICAgIHVwZGF0ZUNhcmRDb250YWluZXIoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbXlfdHVybic6XG4gICAgICAgICAgICBteVR1cm4gPSBteVR1cm4gPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICBteVR1cm4gPyBhdnRBcmVhLmNsYXNzTGlzdC5hZGQoJ215LXR1cm4nKSA6IGF2dEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnbXktdHVybicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndW5rbm93bicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPcHBBcmVhKHVUeXBlLHBsYXllcixwbGF5ZXJOdW0pIHtcbiAgICBzd2l0Y2ggKHVUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2pvaW4nOlxuICAgICAgICAgICAgb3BwQXJlYS5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjogJHtoZXhDb2xvcnNbcGxheWVyTnVtLTFdfVwiPiR7cGxheWVyfSBhcyAke3NoYXBlc1twbGF5ZXJOdW0tMV19PC9zcGFuPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb3RoZXInOlxuICAgICAgICAgICAgb3BwQXJlYS5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjogJHtoZXhDb2xvcnNbcGxheWVyTnVtLTFdfVwiPiR7cGxheWVyfSBhcyAke3NoYXBlc1twbGF5ZXJOdW0tMV19PC9zcGFuPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgICAgb3BwQXJlYS5pbm5lckhUTUwgPSBgPHNwYW4+d2FpdGluZyBmb3Igb3Bwb25lbnQuLi48L3NwYW4+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Vua25vd24nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQoYm9hcmRBcnIpIHtcbiAgICBib2FyZEFyci5mb3JFYWNoKChyLGkpPT4gci5mb3JFYWNoKChzLGopPT57XG4gICAgICAgIGxldCBpZHggPSAncy0nK1N0cmluZyhpKStTdHJpbmcoaik7XG4gICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZHh9YCk7XG4gICAgICAgIGlmIChzICE9PSAnMCcpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcsIGBjb2xvciR7c31gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgfVxuICAgIH0pKTtcbiAgICBpZiAoYm9tYlJlYWR5KSB7XG4gICAgICAgIGF1dG9Cb21iRXhwbG9kZSgpXG4gICAgfVxuICAgIGlmIChib21iUGxhY2VkKSB7XG4gICAgICAgIGJvbWJSZWFkeSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdib21iUmVhZHknKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2FyZENvbnRhaW5lcihjYXJkcykge1xuICAgIGlmICghY2FyZENvbnRhaW5lcikge1xuICAgICAgICBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgYXZ0QXJlYS5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NhcmRDb250YWluZXIgY3JlYXRlZCcpO1xuICAgIH1cbiAgICBpZiAoY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY2FyZDtcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY1ZhbCxpKSA9PiB7XG4gICAgICAgICAgICBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLGBjLSR7Y1ZhbH1gLGAke2NhcmRDb2xvcigpfWApO1xuICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgICAgIC8vIGNhcmQuaW5uZXJIVE1MID0gYCR7Y1ZhbH1gO1xuICAgICAgICAgICAgbGlzdGVuQ2FyZChjYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF1dG9DaG9vc2VDYXJkKGNhcmQpO1xuICAgIH0gZWxzZSB7IGF1dG9DaG9vc2VDYXJkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKVswXSkgfVxufVxuXG5mdW5jdGlvbiBsaXN0ZW5TcXVhcmVzKCkge1xuICAgIGxldCBzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NxdWFyZScpO1xuICAgIFtdLmZvckVhY2guY2FsbChzcywgKHMpID0+IHtcbiAgICAgICAgcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZVNxdWFyZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RlbkNhcmQoY2FyZCkge1xuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VDYXJkKTsgXG59XG5cbmZ1bmN0aW9uIGNob29zZUNhcmQoZXZlbnQpIHtcbiAgICBsZXQgY2FyZERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkJyk7XG4gICAgW10uZm9yRWFjaC5jYWxsKGNhcmREaXNwbGF5LCAoY2FyZCkgPT4ge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3NlbicpO1xuICAgIH0pO1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaG9zZW4nKTtcbiAgICBjaG9zZW5DID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsxXTtcbn1cblxuZnVuY3Rpb24gYXV0b0Nob29zZUNhcmQoY2FyZCkge1xuICAgIGxldCBjYXJkRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoY2FyZERpc3BsYXksIChjYXJkKSA9PiB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuJyk7XG4gICAgfSk7XG4gICAgY2hvc2VuQyA9IGNhcmQuY2xhc3NMaXN0WzFdO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2hvc2VuJyk7XG59XG5cbmZ1bmN0aW9uIGNob29zZVNxdWFyZShldmVudCkge1xuICAgIGxldCBzcXVhcmUgPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IHNxdWFyZUlkID0gc3F1YXJlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBpZiAobXlUdXJuKSB7XG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtjaG9zZW5DfWApWzBdO1xuICAgICAgICBsZXQgY2FyZFZhbCA9IGNhcmQuY2xhc3NMaXN0WzFdLnNwbGl0KCctJylbMV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXJkdmFsPScsY2FyZFZhbCk7XG4gICAgICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0WzFdICE9PSAnb2NjdXBpZWQnICYmIGNhcmRWYWwgPT09ICczJykge1xuICAgICAgICAgICAgc2VuZE1vdmUoY2FyZFZhbCwgc3F1YXJlSWQpO1xuICAgICAgICAgICAgY2FyZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNhcmQpO1xuICAgICAgICAgICAgYm9tYlBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib21iUGxhY2VkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoc3F1YXJlLmNsYXNzTGlzdFsxXSAhPT0gJ29jY3VwaWVkJyAmJiBjYXJkVmFsID09PSAnMScpIHx8IGNhcmRWYWwgPT09ICcyJyApIHtcbiAgICAgICAgICAgIHNlbmRNb3ZlKGNhcmRWYWwsIHNxdWFyZUlkKTtcbiAgICAgICAgICAgIGNhcmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYXV0b0JvbWJFeHBsb2RlKCkge1xuICAgIHNlbmRNb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHNlbmRNb3ZlKGNhcmRWYWwsIHNxdWFyZSkge1xuICAgIGxldCBtID0ge31cbiAgICBpZiAoIWJvbWJSZWFkeSkge1xuICAgICAgICBsZXQgcyA9IHNxdWFyZS5zcGxpdCgnLScpWzFdO1xuICAgICAgICBtID0ge1xuICAgICAgICAgICAgXCJ0YWdcIjogXCJnYW1lXCIsXG4gICAgICAgICAgICBcInNlbmRlclwiOiBgJHtjbGllbnRJZH1gLFxuICAgICAgICAgICAgXCJyZWNlaXZlclwiOiBcImdhbWVcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIm1vdmVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbbXlOdW0sY2FyZFZhbCxzXVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbSA9IHtcbiAgICAgICAgICAgIFwidGFnXCI6IFwiZ2FtZVwiLFxuICAgICAgICAgICAgXCJzZW5kZXJcIjogYCR7Y2xpZW50SWR9YCxcbiAgICAgICAgICAgIFwicmVjZWl2ZXJcIjogXCJnYW1lXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogW215TnVtLCcnLCcnLCdib21iJ11cbiAgICAgICAgfVxuICAgICAgICBib21iUGxhY2VkID0gZmFsc2U7XG4gICAgICAgIGJvbWJSZWFkeSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhtKTtcbiAgICBjb25uZWN0aW9uLnNlbmQoSlNPTi5zdHJpbmdpZnkobSkpO1xufVxuXG4vLy8vIGRyYXdlciBjb250cm9sXG4vLyBjYWNoZSBkb21cbmxldCBXcmFwcGVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dyYXBwZXItMicpWzBdO1xuLy8gaGF2ZSBSb29tQ2hhdFRvZ2dsZVxuZnVuY3Rpb24gdG9nZ2xlRHJhd2VyICgpIHtcbiAgICBSb29tQ2hhdFRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLW1vZGUnKTtcbiAgICBSb29tQ2hhdFRvZ2dsZS5pbm5lckhUTUwgPSAnYmFjayc7XG5cbiAgICBsZXQgbmV3U3RhdGUgPSBXcmFwcGVyMi5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYXdlci1vcGVuJykgPyAnZHJhd2VyLWNsb3NlZCcgOiAnZHJhd2VyLW9wZW4nIDtcbiAgICBsZXQgb2xkU3RhdGUgPSBXcmFwcGVyMi5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYXdlci1vcGVuJykgPyAnZHJhd2VyLW9wZW4nIDogJ2RyYXdlci1jbG9zZWQnIDtcblxuICAgIGlmIChuZXdTdGF0ZSA9PT0gJ2RyYXdlci1jbG9zZWQnKSB7XG4gICAgICAgIFdyYXBwZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBSb29tQ2hhdFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdnYW1lLW1vZGUnKTtcbiAgICAgICAgICAgIFJvb21DaGF0VG9nZ2xlLmlubmVySFRNTCA9ICdjaGF0JztcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBSb29tQ2hhdE1lc3NhZ2UuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyMi5jbGFzc0xpc3QucmVtb3ZlKG9sZFN0YXRlKTtcbiAgICBXcmFwcGVyMi5jbGFzc0xpc3QuYWRkKG5ld1N0YXRlKTtcbiAgICByZXR1cm47XG59O1xuXG5Sb29tQ2hhdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlRHJhd2VyKTtcblxuXG4vLy8vIGluZm8gcGFuZWwgY29udHJvbFxuLy8gY2FjaGUgZG9tXG5cbmxldCBJbmZvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5mby1idXR0b24nKVswXTtcbmxldCBJbmZvUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvJylbMF07XG5cblxuZnVuY3Rpb24gdG9nZ2xlSW5mbyAoKSB7XG4gICAgSW5mb1BhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hlaWdodC0wJyk7XG5cbiAgICBsZXQgbmV3U3RhdGUgPSBJbmZvUGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgPyAnaGlkZScgOiAnc2hvdyc7XG4gICAgbGV0IG9sZFN0YXRlID0gSW5mb1BhbmVsLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgIFxuICAgIGlmIChuZXdTdGF0ZSA9PT0gJ2hpZGUnKSB7XG4gICAgICAgIEluZm9QYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4geyBJbmZvUGFuZWwuY2xhc3NMaXN0LmFkZCgnaGVpZ2h0LTAnKSB9LCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIEluZm9QYW5lbC5jbGFzc0xpc3QucmVtb3ZlKG9sZFN0YXRlKTtcbiAgICBJbmZvUGFuZWwuY2xhc3NMaXN0LmFkZChuZXdTdGF0ZSk7XG5cbiAgICByZXR1cm47XG59XG5cbkluZm9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVJbmZvKTtcbkluZm9QYW5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUluZm8pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=