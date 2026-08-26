export interface PokemonResume {
    id: number,
    name: string,
    weight: number,
    height: number,
    types: string[],
    stats: {
        base_stat: number,
        name: string,
    }[]
}