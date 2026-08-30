import type { PokemonAPIResponse } from "../model/pokemonAPI.js";
import type { PokemonResume } from "../model/pokemonResume.js";

export async function getPokemon(nameOrId: string | number): Promise<PokemonResume | null>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        
        if (!response.ok){
            console.log(`[ERROR] Pokémon not found: ${nameOrId}`);
            return null;
        }

        const data = await response.json() as PokemonAPIResponse;

        const pokemonResume: PokemonResume = {
            id: data.id,
            name: data.name,
            weight: data.weight,
            height: data.height,
            types: data.types.map((item) => item.type.name),
            stats: data.stats.map((item) => {
                return {
                    base_stat: item.base_stat,
                    name: item.stat.name
                }
            })
        }
        
        return pokemonResume;
    } catch (error){
        console.log(`[ERROR] Could not fetch the Pokémon: ${nameOrId}`);
        return null;
    }
}