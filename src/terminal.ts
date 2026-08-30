#!/usr/bin/env node
import TerminalController from "./controller/terminalController.js";
import { Catalog } from "./model/catalog.js";

async function pokedex(){
    const catalog = new Catalog();
    await catalog.init();

    const controller = new TerminalController(catalog);

    await controller.run(process.argv.slice(2));
}

pokedex();