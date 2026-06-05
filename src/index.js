import View from "./view.js";
import Service from "./service.js";
import Controller from "./controller.js";

const view = new View();

const service = new Service({
    tableName: 'tdd-ew-db'
});

const DEFAULT_ITEMS = [
    { title: 'AI Alien', imageUrl: './img/ai-alien.jpeg' },
    { title: 'Predator Night Vision', imageUrl: './img/predator.jpeg' },
    { title: 'ET Bilu', imageUrl: './img/et-bilu.jpeg' },
];

await service.seedInitialItems(DEFAULT_ITEMS);

const controller = new Controller({ view, service });
controller.initialize();