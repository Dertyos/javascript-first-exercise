/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function randomBetween(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateExcuse() {
    let a = who[randomBetween(1, 4) - 1];
    let b = action[randomBetween(1, 4) - 1];
    let c = what[randomBetween(1, 3) - 1];
    let d = when[randomBetween(1, 5) - 1];

    let excuse = a + " " + b + " " + c + " " + d;
    return excuse;
  }
  document.getElementById("excuse").innerHTML = generateExcuse();
};
