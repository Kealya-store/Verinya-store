const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".product-card");

filters.forEach(button=>{

button.addEventListener("click",()=>{

filters.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const value = button.dataset.filter;

cards.forEach(card=>{

if(value==="all"){

card.style.display="block";

}else if(card.dataset.category===value){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});