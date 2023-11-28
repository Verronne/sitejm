const Bouton = (cssClass, texte, fonctionDédiée, fonction2 =null) => {
    //paramètre 1 = "cssBouton"
    //paramètre 2 = "VALIDER"
    //parmètre 3 =panneauPopUp
    
    //construction de bouton
    const bouton = document.createElement("div");
    bouton.classList.add(cssClass)
    bouton.textContent = texte
    //ajoute un écouteur d'événement
    bouton.addEventListener("click", () => {
        fonctionDédiée();
        if(fonction2 !== null){
            fonction2()
        }
    })
    return bouton;
}
const viderLaBase = () => {
console.log("la collection a été vidée")
}

const hello = () => {
    console.log("hELLO")
}


const panneauPopUp = () => {
    const détruirePanneau = () => {
        panneauPrincipal.remove();
    }

    let panneauPrincipal =null;
    if(!document.getElementById("panneauPopUp")){

        panneauPrincipal = document.createElement("div");
        panneauPrincipal.classList.add("cssPanneau");//position absolute
        panneauPrincipal.id = "panneauPopUp";
        
        let boutonAnnuler = Bouton("cssBoutonAnnuler", "ANNULER", détruirePanneau,null)
        let boutonConfirmer = Bouton("cssBoutonConfirmer", "CONFIRMER", viderLaBase,détruirePanneau)
        //fonction pour détruire le panneau
     
        panneauPrincipal.appendChild(boutonConfirmer)
        panneauPrincipal.appendChild(boutonAnnuler)
        document.body.appendChild(panneauPrincipal);

    }else {

        return
    }
 



}
let premierBouton = Bouton("classeBouton", "Vider la collection", panneauPopUp)

document.body.append(premierBouton)