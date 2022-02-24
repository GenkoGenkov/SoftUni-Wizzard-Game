let state = initstate();
let game = initGameObjects();

const avalableKeys = [

    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
];

document.addEventListener('keydown', (e) => {

    if (avalableKeys.includes(e.code)) {
        
        state.keys[e.code] = true;
    };
});

document.addEventListener('keyup', (e) => {

    if (avalableKeys.includes(e.code)) {
        
        state.keys[e.code] = false;
    };
});

game.startScreen.addEventListener('click', (e) => {

    game.startScreen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    //Start game
    start(state, game);
});

