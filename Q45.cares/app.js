"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
