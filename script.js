const accordion = document.getElementsByClassName("accordion");
let i;

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
    });
}

window.addEventListener("scroll", function() {
    const contentContainer = document.querySelector(".content-container");
    const contentContainerPosition = contentContainer.getBoundingClientRect();

    if(contentContainerPosition.top < window.innerHeight && contentContainerPosition.bottom >= 0){
        contentContainer.classList.add("visible");
    }else{
        contentContainer.classList.remove("visible");
    }
});


window.addEventListener("scroll", function() {
    const cardsContainer = document.querySelector(".cards-container");
    const cardsContainerPosition = cardsContainer.getBoundingClientRect();

    if(cardsContainerPosition.top < window.innerHeight && cardsContainerPosition.bottom >= 0){
        cardsContainer.classList.add("visible");
    }else{
        cardsContainer.classList.remove("visible");
    }
});
