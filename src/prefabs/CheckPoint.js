
// You can write more code here

/* START OF COMPILED CODE */

class CheckPoint extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 142, y ?? 93);

		// checkpoint
		const checkpoint = scene.add.image(-1, -9, "checkpoint");
		this.add(checkpoint);

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this, true);
		this.body.setSize(30, 40); // set collision box size
		this.body.setOffset(15,5);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
