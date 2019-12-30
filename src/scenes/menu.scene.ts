import Scene from './scene';
import HudSystem from '../systems/hud.system';

class MenuScene extends Scene {
  readonly sceneKey = 'menu';

  public clickCallback = () => {
    this.game.switchScene('game');
  };

  public start() {
    this.game.canvas.addEventListener('click', this.clickCallback);
  }

  public end() {
    this.game.canvas.removeEventListener('click', this.clickCallback);
  }
}

MenuScene.systems = [HudSystem];

export default MenuScene;