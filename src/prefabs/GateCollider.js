
// You can write more code here

/* START OF COMPILED CODE */

class GateCollider extends Phaser.GameObjects.Rectangle {

	constructor(scene, x, y, width, height) {
		super(scene, x ?? 65, y ?? 65, width ?? 128, height ?? 128);

		this.alpha = 0.2;
		this.isFilled = true;

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this, true);
		this.body.setSize(20, 60, true);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */


	interact(map)
	{
		if (map.game.global.keys >= 2)
		{
			map.game.global.openGate1 = true;
		} else {
			map.game.global.openGateText = 3000;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
