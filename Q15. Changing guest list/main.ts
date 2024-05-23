// name array
let guestArray:string[] = [ "haya", "aresha", "rameema" ];


// can not make dinner
let canNotAttend:string = "rameema";
console.log(`${canNotAttend} can not make it, for dinner.`);


// invite new guest
let newGuest :string = "suhana";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;




// send message
guestArray.map((item)=> console.log(`Hello,${item} you are invited to dinner.`));






























