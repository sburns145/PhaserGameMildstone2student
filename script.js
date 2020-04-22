let config = {
	type: Phaser.AUTO,
    width: 800,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
    	preload: preload,
        create: create,
        update: update
    }
};
const game = new Phaser.Game(config);
function preload(){
  this.load.atlas("player", "resources/spritesheet.png","resources/sprites.json");
  this.load.image("platform", "resources/platform.png");
  this.load.image("spike", "resources/spike.png");
  this.load.image("coin","resources/coin.png");
}

function create(){
  this.spawnPlayer = ()=>{
    this.player = this.physics.add.sprite(250,250,"player", "sprite_1");
  }
  this.spawnPlayer();
}

function update(){

}