
// You can write more code here

/* START OF COMPILED CODE */

class Gate extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 105, y ?? 58);

		// gate
		const gate = scene.add.image(0, 0, "gate");
		this.add(gate);

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this, true);
		this.body.setSize(16, 64); // set collision box size
		this.body.setOffset(24, 0);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	update(map) {
		/*
		if (map.game.global.openGate1) {
			this.body.setOffset(70,70);
			this.y = 88;
		}
		*/
		if (map.game.global.openGate1) {
			this.destroy();
			map.game.global.openGate1 = false;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
