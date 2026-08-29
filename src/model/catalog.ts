import type { PokemonResume } from "./pokemonResume.js";
import boxService from "../service/boxService.js";

export class Catalog {
    private pokemons: PokemonResume[] = [];

    async init(){
        this.pokemons = await boxService.getPokemonsJSON();
    }

    async addPokemon(pokemon: PokemonResume){

        const isExisting:boolean = this.pokemons.every((p) => p.id !== pokemon.id);
        
        if(!isExisting){
            console.log(`Error: ${pokemon.name} is already in the catalog.`);
            return null;
        }

        this.pokemons.push(pokemon);

        await boxService.updatePokemonsJSON(this.pokemons);

        console.log(`Done: ${pokemon.name} has been added to the catalog.`);
    }

    async listPokemons(){
        if (this.pokemons.length == 0 ){
            console.log(`NOTICE Empty catalog.`);
            return null;
        }

        console.log(``);
        console.log(`Catalog:`)
        console.log(``);
        this.pokemons.forEach((pokemon) => {
            console.log(`-------------------------`);
            console.log(`| #${pokemon.id} Name: ${pokemon.name} |`);
            console.log(`-------------------------`);
            console.log(``);
            console.log(`Stats:`);
            console.log(``);
            pokemon.stats.forEach((stat) => {
                console.log(`Name: ${stat.name}`);
                console.log(`Base Stat: ${stat.base_stat}`);
                console.log(``);
            });
            console.log(`Types:`);
            console.log(``);
            pokemon.types.forEach((t) => {
                console.log(t);
            });
            console.log(``);
        });
    }

    async removePokemon(id: number){
        if (this.pokemons.length == 0 ){
            console.log(`NOTICE Empty catalog.`);
            return null;
        }

        const newCatalog: PokemonResume[] = this.pokemons.filter((pokemon) => pokemon.id !== id);
        this.pokemons = newCatalog;

        await boxService.updatePokemonsJSON(this.pokemons);

        console.log(`Removed pokemon with id ${id}`);
    }
}