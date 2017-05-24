var bolsa = document.getElementById("lock");
var boton = document.getElementById("btn-bag");
var bag = document.getElementById("bag");

bolsa.addEventListener("click",function(){
  bag.classList.toggle("hide-right");
  bag.classList.toggle("is-open");
});

boton.addEventListener("click",function(){
  bag.classList.toggle("hide-right");
  bag.classList.toggle("is-open");
});
