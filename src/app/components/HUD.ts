import GameObject from "../core/GameObject";
import V2 from "../core/V2";
import HopliteHead from "./entities/HopliteHead";
import { WIDTH } from "../constants";

type InitialData = {
  hp : string; 
};

declare const window: any;


var initialData = (window as any).__INITIAL_DATA__ as InitialData; 

//console.log(hp);

class HUD extends GameObject {
  public _player: any;
  public _headIcon: HopliteHead;

  constructor(player) {
    super();

    this._player = player;

    this._headIcon = new HopliteHead(
      new V2(WIDTH - 18, 34),
      new V2(12, 14),
      0
    );
  }

  _strokeText(ctx, text, x, y) {
    ctx.miterLimit = 2;
    ctx.font = "20px monospace";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 4;
    ctx.strokeText(text, x, y);
    ctx._fillStyle("#fff");
    ctx.fillText(text, x, y);
  }

  _draw(ctx) {
    // bar backgrounds
    ctx._fillStyle("#fff");
    ctx._fillRect(9, 9, 202, 22);
    ctx._fillRect(9, 34, 202, 12);

    // health bar
    ctx._fillStyle("#d11141");
    ctx._fillRect(10, 10, (this._player._hp / this._player._maxHp) * 200, 20);

    // var Player_Health = 
    // {
    //   hp: this._player._hp
    // };

    // declare global {
    //   var Player_Health : this._player._hp;
    // }
    
    // var P_Health = window.Player_Health;
    
    // console.log(window.Player_Health);

    // initialData.hp = this._player._hp;
    
    window.player_health = 
    {
      "hp" : this._player._hp
    };
    //console.log(window.player_health.hp);

    document.getElementById('Bethel_added').textContent = this._player._hp;



    //export{ Player_Health };
    //console.log(this._player._hp);

    // stamina
    ctx._fillStyle("#00aedb");
    ctx._fillRect(10, 35, (this._player._stamina / 100) * 200, 10);

    ctx.textAlign = "right";
    this._strokeText(ctx, (this._age / 1000).toFixed(2), WIDTH - 6, 20);
    this._strokeText(ctx, this._player._kills, WIDTH - 6, 40);

    this._headIcon._draw(
      ctx,
      { _position: new V2(`${this._player._kills}`.length * -12, 0), r: 0 },
      0
    );
  }
}

export default HUD;

