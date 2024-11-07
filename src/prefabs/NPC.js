
// You can write more code here

/* START OF COMPILED CODE */

class NPC extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 140, y ?? 112, texture || "NPC", frame);

		this.flipX = true;

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this, true);
		this.body.setSize(100, 60, true);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
