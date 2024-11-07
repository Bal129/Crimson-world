
// You can write more code here

/* START OF COMPILED CODE */

class Map_Tutorial extends Phaser.Scene {

	constructor() {
		super("Map_Tutorial");

		/* START-USER-CTR-CODE */
		// enter codes
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// map1_Underground
		const map1_Underground = this.add.tilemap("Map1_Underground");
		map1_Underground.addTilesetImage("Map1_Underground", "assets_Tutorial");

		// sky
		const sky = this.add.image(528, 48, "Sky");
		sky.scaleX = 1.25;

		// clouds
		const clouds = this.add.tileSprite(528, 160, 1200, 208, "Clouds");

		// castle
		this.add.image(528, 112, "castle");

		// caveBG
		this.add.image(544, 564, "CaveBG");

		// waterfall
		this.add.image(640, 496, "Waterfall");

		// trees
		const trees = this.add.tileSprite(528, 176, 1200, 80, "Trees");

		// thornMole
		const thornMole = new Enemy(this, 592, 192);
		this.add.existing(thornMole);

		// thornMole_1
		const thornMole_1 = new Enemy(this, 976, 368);
		this.add.existing(thornMole_1);

		// thornMole_2
		const thornMole_2 = new Enemy(this, 704, 384);
		this.add.existing(thornMole_2);

		// thornMole_3
		const thornMole_3 = new Enemy(this, 928, 320);
		this.add.existing(thornMole_3);

		// thornMole_4
		const thornMole_4 = new Enemy(this, 704, 640);
		this.add.existing(thornMole_4);

		// thornMole_5
		const thornMole_5 = new Enemy(this, 192, 624);
		this.add.existing(thornMole_5);

		// thornMole_6
		const thornMole_6 = new Enemy(this, 208, 368);
		this.add.existing(thornMole_6);

		// thornMole_7
		const thornMole_7 = new Enemy(this, 400, 400);
		this.add.existing(thornMole_7);

		// thornMole_8
		const thornMole_8 = new Enemy(this, 688, 32);
		this.add.existing(thornMole_8);

		// waterHazard_4
		const waterHazard_4 = new WaterHazard(this, 377, 268);
		this.add.existing(waterHazard_4);

		// waterHazard_5
		const waterHazard_5 = new WaterHazard(this, 425, 268);
		this.add.existing(waterHazard_5);

		// waterHazard_6
		const waterHazard_6 = new WaterHazard(this, 425, 253);
		this.add.existing(waterHazard_6);

		// waterHazard_7
		const waterHazard_7 = new WaterHazard(this, 377, 253);
		this.add.existing(waterHazard_7);

		// waterHazard_2
		const waterHazard_2 = new WaterHazard(this, 393, 236);
		this.add.existing(waterHazard_2);

		// waterHazard_3
		const waterHazard_3 = new WaterHazard(this, 441, 236);
		this.add.existing(waterHazard_3);

		// waterHazard
		const waterHazard = new WaterHazard(this, 441, 220);
		this.add.existing(waterHazard);

		// waterHazard_1
		const waterHazard_1 = new WaterHazard(this, 393, 220);
		this.add.existing(waterHazard_1);

		// waterHazard_8
		const waterHazard_8 = new WaterHazard(this, 537, 508);
		this.add.existing(waterHazard_8);

		// waterHazard_9
		const waterHazard_9 = new WaterHazard(this, 569, 508);
		this.add.existing(waterHazard_9);

		// waterHazard_10
		const waterHazard_10 = new WaterHazard(this, 665, 524);
		this.add.existing(waterHazard_10);

		// waterHazard_11
		const waterHazard_11 = new WaterHazard(this, 169, 652);
		this.add.existing(waterHazard_11);

		// waterHazard_12
		const waterHazard_12 = new WaterHazard(this, 233, 652);
		this.add.existing(waterHazard_12);

		// waterHazard_13
		const waterHazard_13 = new WaterHazard(this, 297, 636);
		this.add.existing(waterHazard_13);

		// waterHazard_14
		const waterHazard_14 = new WaterHazard(this, 345, 636);
		this.add.existing(waterHazard_14);

		// waterHazard_15
		const waterHazard_15 = new WaterHazard(this, 393, 636);
		this.add.existing(waterHazard_15);

		// waterHazard_16
		const waterHazard_16 = new WaterHazard(this, 473, 636);
		this.add.existing(waterHazard_16);

		// waterHazard_17
		const waterHazard_17 = new WaterHazard(this, 457, 636);
		this.add.existing(waterHazard_17);

		// waterHazard_18
		const waterHazard_18 = new WaterHazard(this, 537, 652);
		this.add.existing(waterHazard_18);

		// waterHazard_19
		const waterHazard_19 = new WaterHazard(this, 713, 668);
		this.add.existing(waterHazard_19);

		// waterHazard_20
		const waterHazard_20 = new WaterHazard(this, 682, 668);
		this.add.existing(waterHazard_20);

		// waterHazard_21
		const waterHazard_21 = new WaterHazard(this, 649, 668);
		this.add.existing(waterHazard_21);

		// waterHazard_22
		const waterHazard_22 = new WaterHazard(this, 1049, 636);
		this.add.existing(waterHazard_22);

		// waterHazard_23
		const waterHazard_23 = new WaterHazard(this, 969, 636);
		this.add.existing(waterHazard_23);

		// waterHazard_24
		const waterHazard_24 = new WaterHazard(this, 1009, 636);
		this.add.existing(waterHazard_24);

		// waterHazard_25
		const waterHazard_25 = new WaterHazard(this, 777, 652);
		this.add.existing(waterHazard_25);

		// waterHazard_26
		const waterHazard_26 = new WaterHazard(this, 889, 652);
		this.add.existing(waterHazard_26);

		// waterHazard_27
		const waterHazard_27 = new WaterHazard(this, 841, 652);
		this.add.existing(waterHazard_27);

		// waterHazard_28
		const waterHazard_28 = new WaterHazard(this, 825, 652);
		this.add.existing(waterHazard_28);

		// waterHazard_29
		const waterHazard_29 = new WaterHazard(this, 825, 428);
		this.add.existing(waterHazard_29);

		// ground
		const ground = map1_Underground.createLayer("Tile Layer 1", ["Map1_Underground"], -63, -52);

		// infestedTree
		this.add.image(281, 124, "InfestedTree");

		// key
		const key = new Key(this, 923, 580);
		this.add.existing(key);
		key.scaleX = 0.5;
		key.scaleY = 0.5;

		// key_1
		const key_1 = new Key(this, 144, 370);
		this.add.existing(key_1);
		key_1.scaleX = 0.5;
		key_1.scaleY = 0.5;

		// gate
		const gate = new Gate(this, 825, 172);
		this.add.existing(gate);

		// gateCollider
		const gateCollider = new GateCollider(this, 800, 200);
		this.add.existing(gateCollider);
		gateCollider.scaleX = 0.21413957274092615;
		gateCollider.scaleY = 0.04;
		gateCollider.visible = false;

		// checkPoint
		const checkPoint = new CheckPoint(this, 496, 192);
		this.add.existing(checkPoint);

		// checkPoint_1
		const checkPoint_1 = new CheckPoint(this, 952, 448);
		this.add.existing(checkPoint_1);

		// checkPoint_2
		const checkPoint_2 = new CheckPoint(this, 144, 480);
		this.add.existing(checkPoint_2);

		// NPC
		const nPC = new NPC(this, 976, 180);
		this.add.existing(nPC);

		// key_2
		const key_2 = new Key(this, 651, 31);
		this.add.existing(key_2);
		key_2.scaleX = 0.5;
		key_2.scaleY = 0.5;

		// key_3
		const key_3 = new Key(this, 676, 31);
		this.add.existing(key_3);
		key_3.scaleX = 0.5;
		key_3.scaleY = 0.5;

		// player
		const player = new Player(this, 59, 164);
		this.add.existing(player);

		// NPCText
		const nPCText = this.add.text(899, 134, "", {});
		nPCText.text = "Hello little guy.";

		// checkpoint
		const checkpoint = this.add.container(0, 0);

		// keyText
		const keyText = this.add.text(118, 32, "", {});
		keyText.text = "Keys:";
		keyText.setStyle({ "fontSize": "12px" });
		checkpoint.add(keyText);

		// healthText
		const healthText = this.add.text(111, 12, "", {});
		healthText.text = "Health:";
		healthText.setStyle({ "fontSize": "12px" });
		checkpoint.add(healthText);

		// checkpointText
		const checkpointText = this.add.text(195, 179, "", {});
		checkpointText.visible = false;
		checkpointText.text = "Checkpoint set!";
		checkpointText.setStyle({ "fontSize": "10px" });
		checkpoint.add(checkpointText);

		// returnToCheckpointText
		const returnToCheckpointText = this.add.text(13, 95, "", {});
		returnToCheckpointText.visible = false;
		returnToCheckpointText.text = "Return to the last Checkpoint";
		returnToCheckpointText.setStyle({ "fontSize": "15px" });
		checkpoint.add(returnToCheckpointText);

		// gateText
		const gateText = this.add.text(730, 166, "", {});
		gateText.text = "Must have at \nleast 2 keys.\n";
		gateText.setStyle({ "fontSize": "11px" });

		// lists
		const enemies = [thornMole, thornMole_8, thornMole_7, thornMole_6, thornMole_5, thornMole_4, thornMole_3, thornMole_2, thornMole_1, waterHazard_29, waterHazard_28, waterHazard_27, waterHazard_26, waterHazard_25, waterHazard_24, waterHazard_23, waterHazard_22, waterHazard_21, waterHazard_20, waterHazard_19, waterHazard_18, waterHazard_17, waterHazard_16, waterHazard_15, waterHazard_14, waterHazard_13, waterHazard_12, waterHazard_11, waterHazard_10, waterHazard_9, waterHazard_8, waterHazard_1, waterHazard, waterHazard_3, waterHazard_2, waterHazard_7, waterHazard_6, waterHazard_5, waterHazard_4];
		const keys = [key, key_1, key_2, key_3];
		const checkPoints = [checkPoint, checkPoint_1, checkPoint_2];

		// checkpoint (components)
		new FixedToCamera(checkpoint);

		this.clouds = clouds;
		this.trees = trees;
		this.ground = ground;
		this.gate = gate;
		this.gateCollider = gateCollider;
		this.nPC = nPC;
		this.player = player;
		this.nPCText = nPCText;
		this.keyText = keyText;
		this.healthText = healthText;
		this.checkpointText = checkpointText;
		this.returnToCheckpointText = returnToCheckpointText;
		this.gateText = gateText;
		this.map1_Underground = map1_Underground;
		this.enemies = enemies;
		this.keys = keys;
		this.checkPoints = checkPoints;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	clouds;
	/** @type {Phaser.GameObjects.TileSprite} */
	trees;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	ground;
	/** @type {Gate} */
	gate;
	/** @type {GateCollider} */
	gateCollider;
	/** @type {NPC} */
	nPC;
	/** @type {Player} */
	player;
	/** @type {Phaser.GameObjects.Text} */
	nPCText;
	/** @type {Phaser.GameObjects.Text} */
	keyText;
	/** @type {Phaser.GameObjects.Text} */
	healthText;
	/** @type {Phaser.GameObjects.Text} */
	checkpointText;
	/** @type {Phaser.GameObjects.Text} */
	returnToCheckpointText;
	/** @type {Phaser.GameObjects.Text} */
	gateText;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map1_Underground;
	/** @type {Array<Enemy|WaterHazard>} */
	enemies;
	/** @type {Key[]} */
	keys;
	/** @type {CheckPoint[]} */
	checkPoints;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.platformer = new Platformer(this);
		this.game.global.health = 3;
		this.game.global.keys = 0;
		console.log("enter create");
		this.game.global.restart = false;
		this.editorCreate();
		this.initColliders();
		this.wasd = this.platformer.bindKeys(this.input);
		this.platformer.initCamera(this.cameras, this.ground);
		this.platformer.initPosition(this.player, this);
		this.initUI();
	}

	initUI() {
		this.gateText.visible = false;
		this.nPCText.visible = false;
		this.returnToCheckpointText.visible = false;
		this.checkpointText.visible = false;
		this.healthText.visible = true;
		this.keyText.visible = true;
		this.healthText.text = "Health: " + this.game.global.health + "/3";
		this.keyText.text = "Keys: " + this.game.global.keys + "/2";

		this.input.keyboard.on("keydown-ENTER", this.enterPressed, this);
	}

	initColliders()	{
		this.ground.setCollision(
			[1,2,3,5,6,7,9,10,12,13,14,15,
			51,52,53,55,56,57,59,60,,62,63,
			101,102,103,105,106,107,109,110,112,
			201,202,203,204,
			251,252,253,254,
			408,409,410,411,
			458,459,460,461,
			508,509,510,511,
			559,560,561]
		);
		//this.map1_Underground.setTopCollisionTiles([5], this.map, this.ground);

		this.platformer.initColliders(this.ground, this.player, this.enemies, this.keys, this.gate, this.gateCollider, this.checkPoints, this.nPC);
	}

	update(time, delta) {
		this.checkpointText.visible = false;
		this.returnToCheckpointText.visible = false;
		this.gateText.visible = false;
		if (this.game.global.openReturnToCheckpointText >= 0) {
			this.returnToCheckpointText.visible = true;
			this.game.global.openReturnToCheckpointText -= parseInt(delta);
		}
		if (this.game.global.openCheckpointText >= 0) {
			this.checkpointText.visible = true;
			this.game.global.openCheckpointText -= parseInt(delta);
		}
		if (this.game.global.openGateText >= 0) {
			this.gateText.visible = true;
			this.game.global.openGateText -= parseInt(delta);
		}
		this.platformer.movePlayer(this.player, this.wasd, this.jump_button, this.left_button, this.right_button);
		this.clouds.tilePositionX += 0.6;
		this.gate.update(this);
		this.platformer.moveCamera(this.cameras, this.player);
	}

	returnToCheckPoint() {
		this.game.global.openReturnToCheckpointText = 1000;
		this.player.setX(this.game.global.currentCheckPointX);
		this.player.setY(this.game.global.currentCheckPointY);
		this.game.global.health = 3;
		this.healthText.text = "Health: " + this.game.global.health + "/3";
		this.player.resetPlayer();
		console.log("Game Over");
	}

	winGame() {
		this.nPCText.visible = true;
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;
	}

	enterPressed() {
		if (this.nPCText.visible) {
			this.scene.restart();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
