import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import type { PokemonResume } from "../model/pokemonResume.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../..", "pokemons.json");

async function getPokemonsJSON():Promise<PokemonResume[]>{
    try {
        const pokemonsJSON = await readFile(FILE, "utf-8");
        const pokemons = JSON.parse(pokemonsJSON) as PokemonResume[];

        console.log(`Get JSON sucessfully`);
        return pokemons;
    } catch(error: any){
        if (error.code === "ENOENT"){
            await writeFile(FILE, "[]");
            console.log(`Write JSON sucessfully`);
            
            const pokemons: PokemonResume[] = [];
            return pokemons;
        }

        throw error;
    }
}

async function updatePokemonsJSON(pokemons: PokemonResume[]): Promise<void | PokemonResume[]>{
    await writeFile(FILE, JSON.stringify(pokemons));
    console.log(`Write JSON sucessfully`);
}

export default {
    getPokemonsJSON,
    updatePokemonsJSON
}