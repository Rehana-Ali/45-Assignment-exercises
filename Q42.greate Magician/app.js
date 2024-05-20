"use strict";
/*function show_magicians(magicians: string []): void {
    for(const magician of magicians) {
        console.log(magician + " " + "the Greate")
    }
}

const magicianName: string [] = ["Usman","Haseeb","Wajahat"];

show_magicians(magicianName);*/
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Ali", "Humza", "Bilal"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log("The Greate" + " " + magician);
    });
}
show_magicians(magicians);
