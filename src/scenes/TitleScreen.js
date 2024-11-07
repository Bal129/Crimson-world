
// You can write more code here

/* START OF COMPILED CODE */

class TitleScreen extends Phaser.Scene {

	constructor() {
		super("TitleScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky
		const sky = this.add.image(150, 100, "Sky");
		sky.scaleX = 0.5;

		// clouds
		const clouds = this.add.tileSprite(176, 120, 1200, 208, "Clouds");
		clouds.scaleX = 0.7;
		clouds.scaleY = 0.7;

		// castle
		this.add.image(250, 100, "castle");

		// trees
		const trees = this.add.tileSprite(176, 160, 1200, 80, "Trees");

		// instructions
		const instructions = this.add.text(60, 75, "", {});
		instructions.visible = false;
		instructions.text = "Controls:\nLeft, Right - Move\nSpace - Jump\nEnter - Interact";
		instructions.setStyle({ "align": "center" });

		// title_screen
		const title_screen = this.add.image(144, 70, "title");
		title_screen.scaleX = 2;
		title_screen.scaleY = 2;

		// press_enter_text
		const press_enter_text = this.add.text(90, 140, "", {});
		press_enter_text.text = "Press Enter";

		this.clouds = clouds;
		this.trees = trees;
		this.instructions = instructions;
		this.title_screen = title_screen;
		this.press_enter_text = press_enter_text;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	clouds;
	/** @type {Phaser.GameObjects.TileSprite} */
	trees;
	/** @type {Phaser.GameObjects.Text} */
	instructions;
	/** @type {Phaser.GameObjects.Image} */
	title_screen;
	/** @type {Phaser.GameObjects.Text} */
	press_enter_text;

	/* START-USER-CODE */

	create() {

		this.editorCreate();

		this.input.keyboard.on("keydown-ENTER", this.enterPressed, this);
		this.input.on("pointerdown", this.enterPressed, this);

		this.blinkText();
	}

	enterPressed() {

		if (this.title_screen.visible) {

			this.title_screen.visible = false;
			this.instructions.visible = true;

		} else
		{
			this.game.global.score = 0;
			this.game.global.health = 3;
			this.scene.start("Map_Tutorial");
		}
	}

	blinkText() {

		this.time.addEvent({
			repeat: -1,
			delay: 1000,
			callback: () => {
				this.press_enter_text.visible = !this.press_enter_text.visible;
			}
		});
	}

	update() {

		this.clouds.tilePositionX += 0.3;
		//this.trees.tilePositionX += 0.6;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
