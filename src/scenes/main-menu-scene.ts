import { SceneEnum } from './../enums/SceneEnum';
import { MenuButton } from '../ui/menu-button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: SceneEnum.MAINMENU,
};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create(): void {
    this.add
      .text(100, 50, 'CALL OF AGILE: DEV OPS', {
        color: '#FFFFFF',
      })
      .setFontSize(24);

    const startGameButton = new MenuButton(this, 100, 150, 'Start Game');

    startGameButton.on('pointerup', () => this.scene.start(SceneEnum.GAME));
  }
}
