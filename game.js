const cardColors = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
cards = [...cards];

const init = function(){
    cards.forEach((card) => {
        const position = Math.floor(Math.random() * cardColors.length);
        card.classList.add(cardColors[position])
        cardColors.splice(position, 1)
    })

}

init()