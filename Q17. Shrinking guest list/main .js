"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// name array
let guestArray = ["haya", "aresha", "rameema"];
// cant  not  make  dinner
let canNotAttend = "rameema";
// invite new guest
let newGuest = "suhana";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("rumasa");
let middleguest = "kiran";
let midleIndex = guestArray.length / 2;
guestArray.splice(midleIndex, 0, middleguest);
guestArray.push("sila");
console.log("we can  invite  only two people for dinner!");
while (guestArray.length > 2) {
    let removeguest = guestArray.pop();
    console.log(`\nsorry ${removeguest} we can't invite you to dinner!`);
}
;
guestArray.map((item) => console.log(`\n${item} you are still invited to dinner!`));
guestArray.pop();
guestArray.pop();
console.log(guestArray);
