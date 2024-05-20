/*function show_magicians(magicians: string []): void {
    for(const magician of magicians) {
        console.log(magician + " " + "the Greate")
    }
}

const magicianName: string [] = ["Usman","Haseeb","Wajahat"];

show_magicians(magicianName);*/



let magicians: string [] = ["Ali","Humza","Bilal"];

function show_magicians(magicians : string[]){
    magicians.forEach(magician=> {
      console.log("The Greate" + " " + magician )
      
    })
}
show_magicians(magicians)