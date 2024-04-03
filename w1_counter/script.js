const number = document.querySelector('#number');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
/*
console.log(number);
console.log(increase);
console.log(decrease);

increase.addEventListener('click', () => console.log("increase 가 클릭됨"));
increase.addEventListener('click', () => console.log("decrease 가 클릭됨"));
*/
increase.addEventListener('click', inc_func);
decrease.addEventListener('click', dec_func);

function inc_func() {
  let num = parseInt(number.innerText);
  number.innerText = num + 1;
}
function dec_func() {
  let num = parseInt(number.innerText);
  number.innerText = num - 1;
}

