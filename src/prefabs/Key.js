
// You can write more code here

/* START OF COMPILED CODE */

class Key extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 119, y ?? 62);

		// key
		const key = scene.add.image(13, -5, "key");
		this.add(key);

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this, true);
		this.body.setSize(20, 20); // set collision box size
		this.body.setOffset(28,19);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	interact(map)
	{
		map.game.global.keys += 1;
		console.log("Keys: " + map.game.global.keys);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
