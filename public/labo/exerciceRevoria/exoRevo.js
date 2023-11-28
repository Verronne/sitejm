//Exercice 1 :
//crée une page html avec un button 
//a l'aide de js ajouter un gestionnaire d'événements au bouton pour qu'un message s'affiche dans une boite ('alerte') lorsque le bouton est cliqué

// const bouton = document.getElementById("bouton");
// bouton.addEventListener("click",() => {
//     alert("vous avez cliqué")
// });

// Exercice 2 : 
// crée une page html avec un paragraphe vide <p> et un bouton 
// lorsque l'utilisateur clique sur le bouton , utilisez js pour ajouter du texte dans le paragraphe
// Exo2 bis: 
// essayez de rajouter un champ ou l'utilisateur tape du texte et cela s'ajoute dans la balise p
// const baliseP = document.getElementById("p");
// const bouton = document.getElementById("bouton");
// const bouton2 = document.getElementById("bouton2");
// const input = document.getElementById("input");

// bouton.addEventListener("click", function() {
//     baliseP.innerHTML= "je suis une quiche";

// });
// bouton2.addEventListener("click", function() {
//     baliseP.textContent+= " "+input.value;
//     input.value="";
// });

// Exercice 3 :
// Créez une page html avec un bouton et un element de texte par xemple un paragraphe
// En utilisant JS faite en sorte que lorsque l'utilisateur clique sur le bouton, l'élément texte soit afficher si il est caché ou si il est affiché 

const bouton = document.getElementById("bouton");
const baliseP = document.getElementById("p");

bouton.addEventListener("click", function() {
        baliseP.innerHTML= "je suis une quiche";
        bouton.classList("display: none")

    
    });