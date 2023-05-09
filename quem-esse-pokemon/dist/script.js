const Pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetchd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

var indexNumber = 0;
var sequenciamax = 0;
var sequencia = 0;

newCharacter();

function newCharacter() {
  var pokeImage = document.getElementById("imagem");
  indexNumber = (Math.floor(Math.random() * 151) + 1);
  
    if(indexNumber-1 == 28){
     indexName = 'nidoran-f';
    }else
    if(indexNumber-1 == 31){
     indexName = 'nidoran-m';
    }
  else{indexName = Pokemon[indexNumber-1].toLowerCase();}
    
    pokeImage.srcset = `https://img.pokemondb.net/sprites/home/normal/2x/avif/${indexName}.avif`
  document.getElementById('btnDescobre').disabled = false
  var divResposta = document.getElementById("resposta")
  var html = "Vc tem " + sequencia + " acertos em sequência"

    
if(sequencia == 1){
  html = "Vc tem " + sequencia + " acerto"
}else
  if(sequencia == 0){
  html = "Vc não tem acertos em sequência"
}
  else{
  html = "Vc tem " + sequencia + " acertos em sequência"
  }
    divResposta.innerHTML = html
}

function discover() {
  var inputName = document.getElementById("inputname").value;
  var divResposta = document.getElementById("resposta")
  var html = ""
  var divSeqmax = document.getElementById("seqmax");

  if (inputName.length) {
    if (inputName.toLowerCase() == Pokemon[indexNumber-1].toLowerCase()) {
    html = "Vc acertou";
      sequencia ++;
      if(sequencia>sequenciamax){
        sequenciamax = sequencia;
        divSeqmax.innerHTML = "Sequencia máx de acertos é de: " + sequenciamax
      }
    } else {
 html = "Você errou, a resposta era: " + Pokemon[indexNumber-1];
    sequencia = 0;
}
    document.getElementById('btnDescobre').disabled = true
    divResposta.innerHTML = html
  }
}
/*
var pokemonTr = document.querySelector("#trPokemon")

montaLista()

function montaLista(){
//  console.log(Pokemon)
    for(i=0; i < Pokemon.length; i++){
      var pokemonTd = document.createElement("td");
      pokemonTd.textContent = Pokemon[i]
      pokemonTd.classList.add("listagem")
      pokemonTr.appendChild(pokemonTd)
   }
}


var nomeInserido = document.querySelector("#inputname");
nomeInserido.addEventListener("input", function(){

    var pokemons = document.querySelectorAll("td");

    if(this.value.length > 0){
    for (var i = 0; i < pokemons.length ; i++) {
         var poke = pokemons[i];

    var tdNome = poke.querySelector(".listagem")
    var nome = tdNome.textContent

         var expressao = new RegExp(this.value, "i")

         if(!expressao.test(nome)){
             poke.classList.add("esconde")
         } else {
             poke.classList.remove("esconde")
         }
    }
} else {
    for (var i = 0; i < pokemons.length ; i++) {
         var poke = pokemons[i];
         poke.classList.remove("esconde")
        }
    }
})

*/