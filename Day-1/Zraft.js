import {question} from 'readline-sync';


const commands = question("Enter Command: ");

let command = [];

let firstName = "Ryan";
let lastName = "James";


function getRGBGeneratedColor() {

  const mathR = Math.floor(Math.random() * 255);
  return mathR;
}

const R = getRGBGeneratedColor();
const G = getRGBGeneratedColor();
const B = getRGBGeneratedColor();

const randomDecimal = (Math.random() * 0.5).toFixed(2);

if (commands.includes("/Names")) {

    console.log(`Hello: ${firstName} ${lastName}`);
 }

if (commands.includes("/Color")) {

   console.log("R: " + R);
   console.log("G: " + G);
   console.log("B: " + B);
   console.log("Opacity: " + randomDecimal);
}











