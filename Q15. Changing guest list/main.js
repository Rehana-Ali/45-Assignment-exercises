// name array
let guestArray = ["haya", "aresha", "rameema"];
// can not make dinner
let canNotAttend = "rameema";
console.log(`${canNotAttend} can not make it, for dinner.`);
// invite new guest
let newGuest = "suhana";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// send message
guestArray.map((item) => console.log(`Hello,${item} you are invited to dinner.`));
export {};
