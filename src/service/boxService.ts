import { writeFile, readFile } from "node:fs/promises";
import type { PokemonResume } from "../model/pokemonResume.js";

const FILE = `./pokemons.json`;

async function getPokemonsJSON():Promise<PokemonResume[]>{
    try {
        const pokemonsJSON = await readFile(FILE, "utf-8");
        const pokemons = JSON.parse(pokemonsJSON) as PokemonResume[];

        console.log(`Get JSON sucessfully`);
        return pokemons;
    } catch(error: any){
        if (error.code === "ENOENT"){
            await writeFile(FILE, "[]");
            
            const pokemons: PokemonResume[] = [];
            return pokemons;
        }

        throw error;
    }
}

async function updatePokemonsJSON(pokemons: PokemonResume[]): Promise<void | PokemonResume[]>{
    try {
        await writeFile(FILE, JSON.stringify(pokemons));
        console.log(`Write JSON sucessfully`);
    } catch(error: any){
        if (error.code === "ENOENT"){
            await writeFile(FILE, "[]");
            
            const pokemons: PokemonResume[] = [];
            return pokemons;
        }
        console.log(error);
    }
}

export default {
    getPokemonsJSON,
    updatePokemonsJSON
}