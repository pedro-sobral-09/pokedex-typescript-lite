import { getPokemon } from "./service/pokemonAPIService.js";
import { Catalog } from "./model/catalog.js";

async function main(){
    console.log(`Hello World`);
    
    const catalog = new Catalog;
    catalog.init();
    
    const pikachu = await getPokemon(25);
    
    if(pikachu !== null){
        catalog.addPokemon(pikachu);
    }

    const pikachuAgain = await getPokemon(25);
    
    if(pikachuAgain !== null){
        catalog.addPokemon(pikachuAgain);
    }

    const charizard = await getPokemon(`charizard`);
    
    if(charizard !== null){
        catalog.addPokemon(charizard);
    }

    const picomon = await getPokemon(`picomon`);

    if(picomon !== null){
        catalog.addPokemon(picomon);
    }

    catalog.listPokemons();

    catalog.removePokemon(25);

    catalog.listPokemons();
}

main();