var game = new Phaser.Game(640,960, Phaser.AUTO,'gamediv');
var spacefield;
var player;
var cursor;
var mainState = {
    preload:function(){
        game.load.spritesheet('player','./assets/img/monster-idle.png',103,132,13);        
        game.load.image('starfield','./assets/img/background.png');
    },
    create:function(){
      
        spacefield = game.add.tileSprite(0,0,640,960,'starfield');
        player = game.add.sprite(game.world.centerX,game.world.centerY + 150,'player');
     
        game.physics.enable(player,Phaser.Physics.ARCADE); 
        player.animations.add('walk');
        cursor = game.input.keyboard.createCursorKeys();                       
    },
    update:function(){
            var stopanim = true;
            console.log(player.x+"///"+player.y);
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
        if(cursor.left.isDown){
            player.body.velocity.x = -250;
            spacefield.tilePosition.x += 2;
            player.animations.play('walk',25,true);
            stopanim = false;
        }
        if(cursor.right.isDown){
            player.body.velocity.x = 250;
            spacefield.tilePosition.x += -2;
            player.animations.play('walk',25,true);
            stopanim = false;
        }
        if(cursor.up.isDown ){
            player.body.velocity.y = -250;
            
            player.animations.play('walk',25,true);
            stopanim = false;
        }
        if(cursor.down.isDown){
            player.body.velocity.y = 250;
            
            player.animations.play('walk',25,true);
            stopanim = false;
        }
         if (stopanim) { 
            player.animations.stop(); 
            player.frame = 0;        
        }
        
    },
}

game.state.add('mainState',mainState);
game.state.start('mainState');
