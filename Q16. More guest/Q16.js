"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// name array
let guestArray = ["haya", "aresha", "rameema"];
//send message
console.log("wellcome all  we found a bigger  dinner table");
guestArray.unshift("rumasa");
let middleguest = "kiran";
let midleIndex = guestArray.length / 2;
guestArray.splice(midleIndex, 0, middleguest);
guestArray.push("sila");
guestArray.map((item) => console.log(`\nDear ${item} you are invited to dinner!`));
