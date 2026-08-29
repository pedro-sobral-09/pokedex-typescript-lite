import { Catalog } from "../model/catalog.js";
import boxService from "../service/boxService.js";
import { getPokemon } from "../service/pokemonAPIService.js";

export default class TerminalController {
    constructor(private catalog: Catalog) {}

    async run(args: string[]): Promise<void>{
        const command = args[0];

        switch(command){
            case "--add": {
                const nameOrId = args[1];

                if (!nameOrId){
                    console.log(``);
                    return;
                }

                const pokemon = await getPokemon(nameOrId);
                if (pokemon) await this.catalog.addPokemon(pokemon);
                break;
            }

            case "--list": {
                await this.catalog.listPokemons();
                break;
            }

            case "--remove": {
                const id = Number(args[1]);

                if (!id){
                    console.log(``);
                    return;
                }

                await this.catalog.removePokemon(id);
                break;
            }

            default: {
                console.log(`Command not found`);
                break;
            }
        }
    }
}