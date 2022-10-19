const URL = "https://www.thecocktaildb.com/api.php";
const main = document.getElementById("card")

window.addEventListener("DOMContentLoaded", Card)

function Card () {
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
    .then (response => response.json())
    .then ( data => { data.drinks.forEach(element => {
        console.log(element); 
        CardCreate(element);

    });
        
    }
    );
}

function CardCreate (element) {

    const card = document.createElement("div")

    const nameCard = document.createElement("h2");
    nameCard.textContent = element["strDrink"];

    const imgCard = document.createElement("img")
    imgCard.setAttribute("src" , element["strDrinkThumb"]);

    card.appendChild(nameCard);
    card.appendChild(imgCard);
    
    main.appendChild(card);
}

search.addEventListener("DOMContentLoaded",filter)

function filter () {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
    let inputVal = document.getElementById("search").value;
}