export interface PokemonAPIResponse {
    id: number,
    name: string,
    weight: number,
    height: number,
    types: {
        type: {
            name: string,
        }
    }[],
    stats: {
        base_stat: number,
        stat: {
            name: string,
        }
    }[],
}