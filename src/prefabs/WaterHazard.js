
// You can write more code here

/* START OF COMPILED CODE */

class WaterHazard extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 137, y ?? 52, texture || "Water1", frame);

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.pushable = false;
		this.body.moves = false;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	IsKillable()
	{
		return false;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
