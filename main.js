
//SELECTORES PRIMER TARJETA//
let btn0 = document.getElementById('btn0');
let name0 = document.getElementById('name0');
let hp0 = document.getElementById('hp0');
let exp0 = document.getElementById('exp0');
let atk0 = document.getElementById('atk0');
let def0 = document.getElementById('def0');
let spc0 = document.getElementById('spc0');
let spd0 = document.getElementById('spd0');
let type00 = document.getElementById('type00');
let type01 = document.getElementById('type01');
//SELECTORES SEGUNDA TARJETA//
let btn1 = document.getElementById('btn1');
let name = document.getElementById('name1');
let hp1 = document.getElementById('hp1');
let exp1 = document.getElementById('exp1');
let atk1 = document.getElementById('atk1');
let def1 = document.getElementById('def1');
let spc1 = document.getElementById('spc1');
let spd1 = document.getElementById('spd1');
let type10 = document.getElementById('type10');
let type11 = document.getElementById('type11');

//SELECTORES TERCERA TARJETA//
let btn2 = document.getElementById('btn2');
let name2 = document.getElementById('name2');
let hp2 = document.getElementById('hp2');
let exp2 = document.getElementById('exp2');
let atk2 = document.getElementById('atk2');
let def2 = document.getElementById('def2');
let spc2 = document.getElementById('spc2');
let spd2 = document.getElementById('spd2');
let type20 = document.getElementById('type20');
let type21 = document.getElementById('type21');


``
// ICONOS DE TYPO DE POKEMON //
let normal = `<span class="material-symbols-outlined">radio_button_checked</span>`
let flying = `<span class="material-symbols-outlined">air</span>`
let fighting = `<span class="material-symbols-outlined">front_hand</span>`
let poison = `<span class="material-symbols-outlined">science</span>`
let ground = `<span class="material-symbols-outlined">forest</span>`
let rock = `<span class="material-symbols-outlined">landscape</span>`
let bug = `<span class="material-symbols-outlined">pest_control</span>`
let ghost = `<span class="material-symbols-outlined">skull</span>`
let steel = `<span class="material-symbols-outlined">memory</span>`
let fire= `<span class="material-symbols-outlined">local_fire_department</span>`
let water = `<span class="material-symbols-outlined">waves</span>`
let grass = `<span class="material-symbols-outlined">grass</span>`
let electric = `<span class="material-symbols-outlined">bolt</span>`
let psychic = `<span class="material-symbols-outlined">sports_mma</span>`
let ice= `<span class="material-symbols-outlined">ac_unit</span>`
let dragon = `<span class="material-symbols-outlined">castle</span>`
let dark = `<span class="material-symbols-outlined">dark_mode</span>`
let fairy = `<span class="material-symbols-outlined">star</span>`
let unknown = `<span class="material-symbols-outlined">question_mark</span>`
let shadow= `<span class="material-symbols-outlined">ev_shadow</span>`



function crearPokemon(name, hp, exp, atk, def, spc, spd, type, type1, img){
    let numberPokemon = Math.ceil(Math.random()*500);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${numberPokemon}/`)
.then(response => response.json() )
.then(data => {
               name.innerHTML = data.name;
               hp.innerHTML = data.stats[0].base_stat;
               exp.innerHTML = data.stats[1].base_stat;
               atk.innerHTML = data.stats[2].base_stat;
               def.innerHTML = data.stats[3].base_stat;
               spc.innerHTML = data.stats[4].base_stat;
               spd.innerHTML = data.stats[5].base_stat;
               img.src = `${data.sprites.other.dream_world.front_default}`;
             

//Esto es para armar un juego
let vida = data.stats[0].base_stat;
let expe = data.stats[1].base_stat;
let atake = data.stats[2].base_stat;
let defe = data.stats[3].base_stat;
let spe = data.stats[4].base_stat;
let sped = data.stats[5].base_stat;

  poder = vida + expe + atake + defe + spe + sped;
  poder = poder ;
 console.log(poder);


//FIN//////////////////////////DE ARRIBA///////////////////////////////
 

///EL SWITCH SELECCIONA EL TIPO DE POKEMON QUE ES Y INSERTA EL SIMBOLO///////////////////////// 

               switch(data.types[0].type.name){
    case "normal":
    type.innerHTML = normal;
    break;
  case "fighting":
    type.innerHTML = fighting;
    break;
  case "flying":
    type.innerHTML = flying;
    break;
  case "poison":
    type.innerHTML = poison ;
    break;
  case "ground":
    type.innerHTML = ground;
    break;
    case "rock":
        type.innerHTML = rock;
    break;
  case "bug":
    type.innerHTML = bug;
    break;
    case "ghost":
        type.innerHTML = ghost;
    break;
  case "steel":
    type.innerHTML = steel;
    break;
  case "fire":
    type.innerHTML = fire ;
    break;
  case "water":
    type.innerHTML = water ;
    break;
    case "grass":
        type.innerHTML = grass;
    break;
  case "electric":
    type.innerHTML = electric;
    break;
  case "psychic":
    type.innerHTML = psychic;
    break;
  case "ice":
    type.innerHTML = ice;
    break;
  case "dragon":
    type.innerHTML = dragon;
    break;
    case "dark":
        type.innerHTML = dark;
    break;
  case "fairy":
    type.innerHTML = fairy;
    break;
  case "unknown":
    type.innerHTML = unknown;
    break;
  case "shadow":
    type.innerHTML = shadow;
    break;
  default:
    console.log("No tengo mascota");
    break;
}

switch(data.types[1].type.name){
    case "normal":
    type1.innerHTML = normal;
    break;
  case "fighting":
    type1.innerHTML = fighting;
    break;
  case "flying":
    type1.innerHTML = flying;
    break;
  case "poison":
    type1.innerHTML = poison ;
    break;
  case "ground":
    type1.innerHTML = ground;
    break;
    case "rock":
        type1.innerHTML = rock;
    break;
  case "bug":
    type1.innerHTML = bug;
    break;
    case "ghost":
        type1.innerHTML = ghost;
    break;
  case "steel":
    type1.innerHTML = steel;
    break;
  case "fire":
    type1.innerHTML = fire ;
    break;
  case "water":
    type1.innerHTML = water ;
    break;
    case "grass":
        type1.innerHTML = grass;
    break;
  case "electric":
    type1.innerHTML = electric;
    break;
  case "psychic":
    type1.innerHTML = psychic;
    break;
  case "ice":
    type1.innerHTML = ice;
    break;
  case "dragon":
    type1.innerHTML = dragon;
    break;
    case "dark":
        type1.innerHTML = dark;
    break;
  case "fairy":
    type1.innerHTML = fairy;
    break;
  case "unknown":
    type1.innerHTML = unknown;
    break;
  case "shadow":
    type1.innerHTML = shadow;
    break;
  default:
    console.log("No tengo mascota");
    break;



  
}
               
               
               console.log(data);

}).catch((error) => console.log(error))

 } 


 ////////////////ASIGNACION DE LAS FUNCIONES A LOS BOTONES////////////////////////////
btn0.addEventListener("click", function(){
	crearPokemon(name0, hp0, exp0, atk0, def0, spc0,spd0, type00, type01, img0)
})

btn1.addEventListener("click", function(){
	crearPokemon(name1, hp1, exp1, atk1, def1, spc1,spd1, type10, type11, img1)
})

btn2.addEventListener("click", function(){
	crearPokemon(name2, hp2, exp2, atk2, def2, spc2,spd2, type20, type21, img2)
})






