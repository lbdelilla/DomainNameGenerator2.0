/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*Resolved excercise with random concatenation*/

/*window.onload = function() {
  document.querySelector("#pbt").addEventListener("click", () => {
    document.querySelector("#domain-gnrtr").innerHTML = generateDomain();
  });

  console.log("Hello Rigo from the console!");
};

let generateDomain = () => {
  let pronoun = ["the", "their", "your", "our"];
  let adj = ["great", "big", "tiny", "small", "huge"];
  let noun = ["jogger", "racoon", "unicorn", "horse", "mouse"];
  let end = [".com", ".net", ".es", ".org", ".uy"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let endIndex = Math.floor(Math.random() * end.length);

  return (
    pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + end[endIndex]
  );
}; */

/* Excercise with nested for loops*/

/*let generateDomain;*/

window.onload = function() {
  function generateDomain() {
    let pronoun = ["the", "their", "your", "our"];
    let adj = ["great", "big", "tiny", "small", "huge"];
    let noun = ["jogger", "racoon", "unicorn", "horse", "mouse"];
    let end = [".com", ".net", ".es", ".org", ".uy"];
    let domainname = "";
    for (let a of pronoun) {
      for (let b of adj) {
        for (let c of noun) {
          for (let d of end) {
            domainname += a + b + c + d + "</br>";
            console.log(domainname);
          }
        }
      }
    }
    return domainname;
  }
  document
    .querySelector("#pbt")
    .addEventListener(
      "click",
      () =>
        (document.querySelector("#domain-gnrtr").innerHTML = generateDomain())
    );
  console.log("Hello Rigo from the console!");
};
