
window.addEventListener("load", function () {

	var config  = {
		width: 288,
		height: 192,
		type: Phaser.AUTO,
		backgroundColor: "#242424",
		resolution: window.devicePixelRatio,
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: false,
				gravity: {
					y: 500
				}
			}
		},
		render: {
			pixelArt: true
		},
		input: {
			activePointers: 3
		}
	}
	var game = new Phaser.Game(config);

	game.scene.add("Boot", Boot, true);
	game.scene.add("Preloader", Preloader);
	game.scene.add("TitleScreen", TitleScreen);
	game.scene.add("Map_Tutorial", Map_Tutorial);
});

class Boot extends Phaser.Scene {

	preload() {
		this.game.global = {
			keys: 0,
			score: 0,
			health: 3,
			maxHealth: 3,
			defaultJumpHeight: 190,
			currentJumpHeight: 190,
			frogPowerupCoolown: 0,
			keyItem: 1,
			openGate1: false,
			currentCheckPointX: 56,
			currentCheckPointY: 167,
			restart: false,
			openCheckpointText: 0,
			openReturnToCheckpointText: 0,
			openGateText: 0,
			endGameTime: 0
		}
		this.load.pack("pack", "assets/preload-pack.json");
	}

	create() {

		this.scene.start("Preloader");
	}
}