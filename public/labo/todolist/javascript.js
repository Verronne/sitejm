//délcaration des variables javascript 
//références

let champsDeSaisi = document.getElementById("champsDeSaisi")
let validation = document.getElementById("validation")
let grandeListeDeTaches = document.getElementById("value")






//ajout d'un écouteur d'événement sur le bouton
validation.addEventListener("click", ()=> {
 
    //création de la nouvelleTache (div)
let nouvelleTache = document.createElement("div")


   //récupération de la saisie utilisateur et assignation à nouvelleTache
   console.log(champsDeSaisi)
   nouvelleTache.textContent= champsDeSaisi.value

  

//ajout d'une classe à nouvelleTache
nouvelleTache.classList.add("caseListe")


//création d'une div pour le bouton de suppresion
let boutonSuppresion = document.createElement("img")

boutonSuppresion.src="./poubelle.png"
boutonSuppresion.classList.add("poubelle")


nouvelleTache.appendChild(boutonSuppresion)

//ajout de la tache à la liste générale
grandeListeDeTaches.appendChild(nouvelleTache)

//suppresion ligne de nouvelleTache
boutonSuppresion.addEventListener("click", ()=> {
    // creation div warning suppression
    let warning=document.createElement("div")
    //creation div annuler
  

    nouvelleTache.remove()
})

})

//keypress
// création manipulation affectation