
var demo = {};
var centerX = 1500/2;
var centerY = 1000/2;
var adam;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function (){
        game.load.image('adam', 'assets/sprites/adam.png')
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state0');
        addChangeStateEventListener();
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        adam = game.add.sprite(centerX, centerY , 'adam');
        adam.anchor.setTo(0.5, 0.5);
    },
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x += 4;
        }
    }
};


function changeState (i, stateNum) {
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, arg){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, arg);
}

function addChangeStateEventListener(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);

}