
var Mygame = new Phaser.Game(1102,466, Phaser.AUTO,'gameContainer');

Mygame.state.add('game',GameState);
Mygame.state.start('game');

