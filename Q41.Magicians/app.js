"use strict";
// Define a function to print each magician name from an array
Object.defineProperty(exports, "__esModule", { value: true });
/*function show_magicians(magicians : string []): void {

    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string [] = ["ali","humza","bilal"];
show_magicians(magician)*/
let magicians = ["Ali", "Humza", "Bilal"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
