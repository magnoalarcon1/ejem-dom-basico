/* let h = document.querySelector("H1");
let o = document.getElementById("pid")

h.innerHTML = "alo <br> gisella";
console.log(h.getAttribute("class"));
h.setAttribute("style","color:red");

const i = document.createElement('input');


i.setAttribute("type","button");
i.setAttribute("value","hola");
o.append(i); */

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");
const form = document.querySelector("#form");

form.addEventListener('submit',sumarInputValues)

function sumarInputValues(){
  event.preventDefault();
 /*    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
  */
    result.innerText = parseInt(input1.value) + parseInt(input2.value);
}