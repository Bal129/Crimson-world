class Platformer
{
    map;
	interactingObject;
	currentItemCount;
	currentEnemyCount;

    constructor(map)
    {
        this.map = map;
		this.interactingObject = null;
		
		this.map.game.global.currentJumpHeight = this.map.game.global.defaultJumpHeight;
		this.map.game.global.frogPowerupCoolown = 0;
    }

    initCamera(cameras, layer)
    {
		const cam = cameras.main;
		cam.setBounds(0, -20, layer.width, layer.height);
		cam.setRoundPixels(true);
	}

	initPosition(player, map) 
	{
		// if (map.game.global.currentCheckPoint != undefined) {
		// 	player.body.position = map.game.global.currentCheckPoint;
		// }
		// }
	}

    moveCamera(cameras, player)
    {
        const cam = cameras.main;

		cam.startFollow(player);

		// const col = Math.floor(player.x / cam.width);
		// const row = Math.floor(player.y / cam.height);

		// cam.scrollX = col * cam.width;
		// cam.scrollY = row * cam.height;
    }

    bindKeys(input) {

		const wasd = {
			jump: input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE, true),
			left: input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT, true),
			right: input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, true),
			crouch: input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN, true),
			useItem: input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z, true)
		};
        return wasd;
	}

    movePlayer(player, keys, jumpButton, leftButton, rightButton)
    {

		if (player.hurtFlag)
			return;
		if (this.map.game.global.health <= 0)
			return;
		// if (this.map.gameWinPrompt.visible)
		// {
		// 	player.body.velocity.x = 0;
		// 	return;
		// }
		
		const body = player.getBody();

		const jumpDown = keys.jump.isDown;// || ControllerButton.getComponent(jumpButton).isDown;
		const leftDown = keys.left.isDown;//|| ControllerButton.getComponent(leftButton).isDown;
		const rightDown = keys.right.isDown;// || ControllerButton.getComponent(rightButton).isDown;
		const useItemDown = keys.useItem.isDown;

		if (jumpDown && body.onFloor()) {
			player.body.velocity.y = -this.map.game.global.currentJumpHeight;
		}

		if (useItemDown) {
			
		}

		var vel = 150;

		if (leftDown) {
			player.body.velocity.x = -vel;
			player.play("player/run/player-run", true);
			player.flipX = true;

		} else if (rightDown) {

			player.body.velocity.x = vel;
			player.play("player/run/player-run", true);
			player.flipX = false;

		} else {

			player.body.velocity.x = 0;

			if (keys.crouch.isDown) {

				player.play("player/crouch/player-crouch", true);

			} else {

				player.play("player/idle/player-idle", true);
			}
		}

		// jump animation

		if (player.body.velocity.y < 0) {

			player.play("player/jump/player-jump-1", true);

		} else if (player.body.velocity.y > 0) {

			player.play("player/jump/player-jump-2", true);
		}
	}

    initColliders(layer1, player, enemies, keys, gate, gateCollider, checkPoints, npc)
    {
		this.map.physics.add.collider(player, layer1);
		this.map.physics.add.collider(player, gate);

		// colliderEnemiesVsLayer
		this.map.physics.add.collider(enemies, layer1);

		// overlapPlayerVsItems
		//this.map.physics.add.overlap(player, items, this.pickItem, undefined, this);

		// overlapPlayerVsEnemies
		this.map.physics.add.overlap(player, enemies, undefined, this.checkAgainstEnemies, this);

		// overlapPlayerVsKeys
		this.map.physics.add.overlap(player, keys, this.obtainKeys, undefined, this);

		// overlapPlayerVsGate
		this.map.physics.add.overlap(player, gateCollider, this.openGate, undefined, this);

		// overlapPlayerVsCheckPoint
		this.map.physics.add.overlap(player, checkPoints, undefined, this.setCheckPoint, this);
		
		// overlapPlayerVsNpc
		this.map.physics.add.overlap(player, npc, undefined, this.openWinPrompt, this);

		// overlapEnemiesVsWater
		//this.map.physics.add.overlap(player, layer2, this.checkAgainstHazard, undefined , this);
		//this.map.physics.add.overlap(player, layer2, undefined, this.checkAgainstHazard, this);

		// overlapPlayerVsInteractables
		//this.map.physics.add.overlap(player, interactables, this.interactObject, undefined, this);
		
		// get coint amount exclude powerup
		this.currentItemCount = 0;
		// items.forEach(item => {
      	// 	if (!item.IsPowerup())
		// 		this.currentItemCount++;
    	// });
		
		// get enemy amount exclude trap
		this.currentEnemyCount = 0;
		// enemies.forEach(enemy => {
      	// 	if (enemy.IsKillable())
		// 		this.currentEnemyCount++;
    	// });
    }

    setTopCollisionTiles(tiles, tileMap, layer)
    {
		const tileSet = new Set(tiles);
		for (let x = 0; x < tileMap.width; x++)
		{
			for (let y = 0; y < tileMap.height; y++)
			{
				const tile = layer.getTileAt(x, y);
				if (tile && tileSet.has(tile.index))
				{
					tile.setCollision(false, false, true, false);
				}
			}
		}
	}

    checkAgainstEnemies(player, enemy)
    {
		var killed = false;
		if ( enemy.IsKillable() )
		{
			if ((player.y + player.body.height * 0.5 < enemy.y) && player.body.velocity.y > 0)
			{
				this.map.add.existing(new EnemyDeath(this.map, enemy.x, enemy.y));
				enemy.destroy();
				player.body.velocity.y = -200;
				killed = true;
				this.currentEnemyCount--;
			}
		}
		if ( !killed && this.map.game.global.health > 0 )
		{
			if ( player.hurtPlayer() )
			{
				this.map.game.global.health--;
				this.map.healthText.text = "Health: " + this.map.game.global.health + "/3";
				//this.map.updateHealth();
				if ( this.map.game.global.health <= 0 ) {
					this.map.returnToCheckPoint();
				}
					
			}
		}
	}

	checkAgainstHazard(player, layer)
	{
		if ( player.hurtPlayer() )
		{
			this.map.game.global.health--;
			this.map.healthText.text = "Health: " + this.map.game.global.health + "/3";
			//this.map.updateHealth();
			if ( this.map.game.global.health <= 0 )
			this.map.showGameOverPrompt();
		}
	}

	obtainKeys(player, key) 
	{
		if (this.map.game.global.health <= 0)
		{
			return;
		}

		//this.map.add.existing(new FeedbackItem(this.map, key.x, key.y));
		key.interact(this.map);
		this.map.keyText.text = "Keys: " + this.map.game.global.keys + "/2";
		key.destroy();
	}

	openGate(player, gateCollider) 
	{
		if (this.map.game.global.health <= 0)
		{
			return;
		}

		gateCollider.interact(this.map);
	}

	/*
	GainHealth(healValue)
	{
		if (this.map.game.global.health < this.map.game.global.maxHealth)
		{
			this.map.game.global.health += healValue;
			if (this.map.game.global.health > this.map.game.global.maxHealth)
				this.map.game.global.health = this.map.game.global.maxHealth;
			this.map.updateHealth();
			return true;
		}
		return false;
	}
	*/
	/*
    pickItem(player, item)
    {
		if (this.map.game.global.health <= 0)
		{
			return;
		}
		
		this.map.add.existing(new FeedbackItem(this.map, item.x, item.y));
		item.interact(this.map);
		item.destroy();		
		this.currentItemCount--;

		this.map.onCollectItem();
	}
	*/
	/*
	interactObject(player, object)
    {
		console.log("entered interactObject");
		if (this.map.game.global.health <= 0)
		{
			return;
		}
		
		if (this.interactingObject != null)
		{
			return;
		}
		console.log("entered interactObject 2");
		this.interactingObject = object;
		
		Interactable.getComponent(object).interact(this);
	}
	*/

	setCheckPoint(checkPoint) {
		if (this.map.game.global.health <= 0)
		{
			return;
		}

		this.map.game.global.currentCheckPointX = checkPoint.x;
		this.map.game.global.currentCheckPointY = checkPoint.y;
		this.map.game.global.openCheckpointText = 1000;
	}

	popCheckPointWindow(player, checkPoint) {
		console.log("Enter checkpoint");
	}
	
	openWinPrompt()
	{
		this.map.winGame();
	}
}