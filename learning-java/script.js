// Prompting the user for different words

document.addEventListener('DOMContentLoaded', function() {
    let place = prompt("Enter a place: ");
    let adjective = prompt("Enter an adjective: ");
    let animal = prompt("Enter an animal: ");
    let verb = prompt("Enter a verb: ");

    
    const placeSpan = document.getElementById("place");
    const adjectiveSpan = document.getElementById("adjective");
    const animalSpans = document.getElementsByClassName("animal");
    const verbSpan = document.getElementById("verb");

    
    placeSpan.innerText = place;
    adjectiveSpan.innerText = adjective;

    
    for (let i = 0; i < animalSpans.length; i++) {
        animalSpans[i].innerText = animal;
    }

    verbSpan.innerText = verb;

})


