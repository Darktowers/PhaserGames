var GameState = {
    preload: function(){
        var me = this;
        me.load.image('bg','assets/img/back.png');
        me.load.image('piso','assets/img/piso.png');
        me.load.spritesheet('static','assets/img/zeroStatic.png',96,90);
    },
    create: function(){
        var me = this;
        me.game.add.image(0,0,'bg');
        me.game.add.sprite(0,0,'piso');
        me.zero = me.game.add.sprite(500,195,'static');
        me.zero.animations.add('static',[0,1,2,3,4,5,6],8,true);
        me.zero.animations.play('static');
        
    },
    update: function(){
        
    }
}
85,93