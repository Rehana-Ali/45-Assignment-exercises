// name array
let guestArray:string[] = [ "Anaya", "Ayesha", "Sara" ];


// can not make dinner
let canNotAttend:string = "Sara";
console.log(`${canNotAttend} can not make it, for dinner.`);


// invite new guest
let newGuest :string = "Ashmara";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;




// send message
guestArray.map((item)=> console.log(`Hello,${item} you are invited to dinner.`));






























