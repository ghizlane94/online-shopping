
const addButton = document.querySelector(".card button");
const number = document.querySelector("span");
let count = 0;
addButton.addEventListener("click",() =>{
  count++;
  number.innerHTML = count;
  console.log("hello");
})
