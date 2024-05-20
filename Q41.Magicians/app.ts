// Define a function to print each magician name from an array

/*function show_magicians(magicians : string []): void {

    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string [] = ["ali","humza","bilal"];
show_magicians(magician)*/



let magicians: string [] = ["Ali","Humza","Bilal"];

function show_magicians(magicians : string[]){
    magicians.forEach(magician=> {
      console.log(magician)
      
    })
}
show_magicians(magicians)