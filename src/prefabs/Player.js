
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 78, y ?? 37, texture || "atlas", frame ?? "player/idle/player-idle-2");

		scene.physics.add.existing(this, false);
		this.body.setOffset(12, 16);
		this.body.setSize(8, 16, false);

		// this (components)
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "player/idle/player-idle";

		/* START-USER-CTR-CODE */

		this.hurtFlag = false;

		this.scene.time.addEvent({
			loop: true,
			delay: 500,
			callback: () => {

				this.hurtFlag = false;
			}
		});

		this.scene.events.on("update", () => this.updatePlayer());

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/**
	 * @return {Phaser.Physics.Arcade.Body} 
	 */
	getBody() {
		return this.body;
	}

	updatePlayer() {

		if (this.hurtFlag) {

			this.play("player/hurt/player-hurt", true);
		}
	}
	
	resetPlayer() {
		this.hurtFlag = false;
	}

	hurtPlayer() {

		if (this.hurtFlag) {

			return false;
		}

		this.hurtFlag = true;

		//this.hurtTimer.start();

		const body = this.getBody();

		body.velocity.y = -130;

		body.velocity.x = this.flipX ? 100 : -100;
		
		return true;
	}

	// setInitialPosition(map) {
	// 	if (map.game.global.currentCheckPoint != undefined) {
	// 		this.setPosition = map.game.global.currentCheckPoint;	
	// 	}
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
