import './app/main';
import './styles/main.css';
import HUD from './app/components/HUD';
import './app/components/entities/Leonidus';
import './app/components/entities/Hoplite';

//src\app\components\entities\Hoplite.ts
//src\app\components\entities\Leonidus.ts
//console.log(window.player_health);
//var leo = new Leonidus;

//console.log(Leonidus);

const width = document.body.offsetWidth;
const height = document.body.offsetHeight;

document.body.addEventListener('mousemove', function(e) {
    const relativeWidth = e.clientX / width * 100;
    const relativeHeight = e.clientY / height * 100;
    document.body.style.setProperty('--mouse-x', relativeWidth);
    document.body.style.setProperty('--mouse-y', relativeHeight);
  
    number.dataset.number = parseInt(relativeWidth) + '%';

    //widthPass = relativeWidth;
          //console.log("relativeWidth");
          //console.log(relativeWidth.toFixed());
});



//<script src="src\app\components\HUD.ts">
          
        //   console.log("HI!!!");
        //   console.log(Player_Health.hp);
          
        //</script> 

        //console.log(initialData.hp);

        //console.log(P_Health);
//console.log(this._player._hp);

//console.log(document.getElementById("kr"));
//console.log(document.getElementById("sr"));

//var colorOverride = this._hitResponseCounter > 0 ? "#fff" : undefined;
//console.log(window.Player_Health); //player


//console.log("damage");
//console.log(document.getElementsByClassName(HUD));
//var Player_Health = parseInt(document.getElementById("Bethel_added").textContent);
//console.log(Player_Health);

//console.log("player");
//console.log(hud._player);



//console.log(this._player._hp);

//console.log((document.getElementById("c")).getContext("2d"));