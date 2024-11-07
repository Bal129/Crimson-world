
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Interactable extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Interactable"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Interactable} */
	static getComponent(gameObject) {
		return gameObject["__Interactable"];
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	gameObject;
	/** @type {string} */
	interactableType = "";

	/* START-USER-CODE */
	
	isInteracting = false;
	platformer = null;
	
	update()
	{
		if (this.isInteracting)
		{
			if (this.platformer.map.player.body.touching.none)
			{
				this.isInteracting = false;
				this.platformer.interactingObject = null;
				this.platformer.map.hideGameShopPrompt();
			}
		}
	}
	
	interact(platformer)
	{
		if (this.isInteracting)
			return;
		
		this.platformer = platformer;
		this.isInteracting = true;
		
		if (this.interactableType == "checkPoint")
		{
			console.log("entered interactableType checkPoint");
			this.platformer.setCheckPoint(this);
		}
		else if (this.interactableType == "Shop")
		{
			this.platformer.map.showGameShopPrompt();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
