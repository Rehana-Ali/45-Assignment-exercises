"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = 'large', text = 'I love typescript') {
    console.log(`You have order a ${size},shirt that says ${text}`);
}
makeShirt();
makeShirt(`medium`);
makeShirt('small', 'I need a big shirt to wear');
