# Pokédex TypeScript Lite

## About the project

Pokédex TypeScript Lite is a simple Node.js application built with TypeScript that fetches Pokémon data from the PokeAPI, maps it into a simplified object, and organizes it into a local catalog. It can be run as a one-shot demo script or as a command-line tool with `--add`, `--list` and `--remove` commands.

## Objective

Practice the concepts from Module 1 of the SCTEC course:

- Node.js;
- JavaScript on the back-end;
- TypeScript;
- Interfaces;
- Typed functions;
- Arrays;
- Objects;
- JSON;
- Array methods;
- Classes;
- Async/await;
- Fetch;
- Error handling;
- GitHub;
- GitFlow;
- Kanban.

## Technologies used

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Prerequisites

Before running the project, you need to have the following installed:
- Node.js
- npm
- Git

## How to install

Clone the repository:

```bash
git clone https://github.com/pedro-sobral-09/pokedex-typescript-lite.git
```

Access the project folder:

```bash
cd pokedex-typescript-lite
```

Install the dependencies:

```bash
npm install
```

## How to run

The project offers two ways to interact with it.

### 1. Demo flow (`main.ts`)

Runs a scripted flow that adds Pikachu, tries to add it again (duplicate), adds Charizard, tries to fetch a non-existent Pokémon, lists the catalog, removes Pikachu, and lists it again.

```bash
npm run dev
```

or, using the compiled build:

```bash
npm start
```

### 2. Interactive CLI (`terminal.ts`)

Run individual commands directly from the terminal:

```bash
npx tsx src/terminal.ts --add pikachu
npx tsx src/terminal.ts --list
npx tsx src/terminal.ts --remove 25
```

You can also install it as a global command:

```bash
npm run link
pokedex --add pikachu
pokedex --list
pokedex --remove 25
```

## Project structure

```
pokedex-typescript-lite/
├── src/
│   ├── main.ts                      # Demo entry point (RF13 flow)
│   ├── terminal.ts                  # CLI entry point
│   ├── controller/
│   │   └── terminalController.ts    # Parses terminal arguments and calls the catalog
│   ├── model/
│   │   ├── catalog.ts               # Catalog class: add, list, remove, duplicate check
│   │   ├── pokemonAPI.ts            # Interface for the raw PokeAPI response
│   │   └── pokemonResume.ts         # Interface for the simplified Pokémon object
│   └── service/
│       ├── boxService.ts            # Reads/writes pc_box.json (persistence)
│       └── pokemonAPIService.ts     # Fetches and maps Pokémon data from the PokeAPI
├── pc_box.json                      # Local catalog database (starts as an empty array)
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- Search a Pokémon by name or ID on the PokeAPI;
- Handle non-existent Pokémon without crashing;
- Map the API response into a simplified object (id, name, weight, height, types, stats);
- Store the catalog in `pc_box.json`, so it persists between runs;
- Add a Pokémon to the catalog, blocking duplicates by id;
- List every Pokémon currently in the catalog;
- Remove a Pokémon from the catalog by id;
- Clear, standardized terminal feedback for every action (`[OK]` / `[WARNING]` / `[ERROR]`).

## Example usage

### Valid search

```
$ pokedex --add pikachu
[OK] pikachu added to the catalog.
```

### Invalid search

```
$ pokedex --add pokemon-inexistente
[ERROR] Pokémon not found: pokemon-inexistente
```

### Duplicate

```
$ pokedex --add pikachu
[WARNING] pikachu is already in the catalog.
```

### Listing the catalog

```
$ pokedex --list

Current catalog:

-------------------------
| #25 Name: pikachu |
-------------------------

Stats:

Name: hp
Base Stat: 35

Name: attack
Base Stat: 55

Types:

electric
```

### Removal

```
$ pokedex --remove 25
[OK] Pokémon removed from the catalog.
```

## Concepts applied

- **TypeScript**: strict mode is enabled in `tsconfig.json`; every function, parameter and return value is typed (e.g. `getPokemon(nameOrId: string | number): Promise<PokemonResume | null>`).
- **`PokemonResume` interface**: represents the simplified Pokémon object used across the app, decoupled from the raw PokeAPI shape.
- **`PokemonAPIResponse` interface**: types only the fields consumed from the PokeAPI's response.
- **Fetch and async/await**: `pokemonAPIService.ts` uses native `fetch` inside an `async` function to consult the PokeAPI.
- **Error handling**: `try/catch` around the fetch call, plus a `response.ok` check, so a non-existent Pokémon (404) never crashes the app.
- **Array methods**: `map` (transforming API types/stats), `some` (checking for duplicates/existence), `filter` (removing a Pokémon by id) and `forEach` (listing the catalog).
- **`Catalog` class**: encapsulates the catalog with a private `pokemons` array and the `init`, `addPokemon`, `listPokemons` and `removePokemon` methods, persisting through `boxService`.

## Kanban

[Kanban board](https://github.com/users/pedro-sobral-09/projects/3)

## Branches used

- `main`
- `develop`
- `feat/pokedex`
- `docs/readme`

## Author

[Pedro Sobral](https://github.com/pedro-sobral-09)