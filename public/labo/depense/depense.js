//liste de mes id

let gain = document.getElementById("gain")
let gainText = document.getElementById("gainText")
let gainMontant = document.getElementById("gainMontant")
let gainListing = document.getElementById("gainListing")
let depense = document.getElementById("depense")
let depenseText = document.getElementById("depenseText")
let depenseMontant = document.getElementById("depenseMontant")
let depenseListing = document.getElementById("depenseListing")
let grandTotal = document.getElementById("grandTotal")
let boutonOKgauche = document.getElementById("boutonOKgauche")
let boutonOKdroite = document.getElementById("boutonOKdroite")
let totalGainlist = document.getElementById("totalGain")
let totalDepense = document.getElementById("totalDepense")

//variable global gain
let totalGain=0
//variable global perte
let totalperte=0
//variable global grand total
let grandTotalNum=0

//attribution de la saisi du nom et du prix

//////////////////////// page gauche //////////////////////////

boutonOKgauche.addEventListener("click", () => {

    //réccupération des champs saisi par l'utilisateur
    let _gainText = gainText.value
    let _gainMontant = gainMontant.value

    if(gainText.value === "" || gainMontant.value === "") {
        alert("vous devez entrez les deux champs.");
        return;
    }
    else {
    

    grandTotalNum+= parseFloat(_gainMontant)

    grandTotal.textContent = grandTotalNum.toString()
    //total gain 
    //parseFloat permet de convertir une chaine de caractère en nombre à virgule
    //voir aussi parseInt (pour les entiers)
    totalGain +=  parseFloat(_gainMontant)
    totalGainlist.textContent= totalGain.toString()

    //création de la div pricipale
    let ligneDeGain = document.createElement("div")
    ligneDeGain.classList.add("ligneDeGain")

    //création des div secondaires (le libellé , le prix)

    //création de la div pour le texte

    let gainTextDiv = document.createElement("div")
    gainTextDiv.textContent = _gainText

    //ajout de la div text à la div générale
    ligneDeGain.appendChild(gainTextDiv)

    //ajout de la div générale à la LISTE GAIN
    gainListing.appendChild(ligneDeGain)

    //creation du prix sur la div listing
    let gainMontantDiv = document.createElement("div")
    gainMontantDiv.textContent = _gainMontant
    //creation du bouton suppression
    let boutonSuppresion = document.createElement("img")
    boutonSuppresion.src = "./poubelle.png"
    boutonSuppresion.classList.add("poubelle")
    // le prix au milieu
    ligneDeGain.appendChild(gainMontantDiv)
    //le bouton suppression
    ligneDeGain.appendChild(boutonSuppresion)
    //la ligne total
    gainListing.appendChild.ligneDeGain

    gainText.value=""
    gainMontant.value=""

boutonSuppresion.addEventListener("click", ()=> {

    let récupererValeurDeLaDiv = boutonSuppresion.parentElement.children[1].innerHTML;
//soustraction de totalGain

totalGain =  totalGain - parseFloat(récupererValeurDeLaDiv);
grandTotalNum -= parseFloat(récupererValeurDeLaDiv);

grandTotal.textContent = grandTotalNum
//totalGain -= ....

//changement de la valeur de totalGainList(élément Html) avec la valeur de totalGain(numérique)
totalGainlist.textContent = totalGain.toString()

    boutonSuppresion.parentElement.remove()
    
})
    }
})

//############################ page droite #################################


boutonOKdroite.addEventListener("click", () => {

    //récupération des champs saisi par l'utilisateur
    let _depenseText = depenseText.value
    let _depenseMontant = depenseMontant.value

    if(depenseText.value ==="" || depenseMontant.value ==="") {
        alert("vous devez entrez les deux champs");
        return;
    }
    else {

    grandTotalNum-= parseFloat(_depenseMontant)

    grandTotal.textContent = grandTotalNum.toString()
    //total gain 
    //parseFloat permet de convertir une chaine de caractère en nombre à virgule
    //voir aussi parseInt (pour les entiers)
     totalperte += parseFloat(_depenseMontant)
     totalDepense.textContent= totalperte.toString()

    // création div principal depense
    let ligneDeDepense = document.createElement("div")
    ligneDeDepense.classList.add("ligneDeGain")

    //création des div secondaire (le libellé, le prix)
    // création de la div pour le texte

    let depenseTextDiv = document.createElement("div")
    depenseTextDiv.textContent=_depenseText

    //ajout de la div text à la div générale
    ligneDeDepense.appendChild(depenseTextDiv)
    
    //ajout de la div générale à la LISTE DEPENSE
    depenseListing.appendChild(ligneDeDepense)

    //création du prix sur la div listing
    let depenseMontantDiv = document.createElement("div")
    depenseMontantDiv.textContent = _depenseMontant
    //création du bouton suppression
    let boutonSuppresion = document.createElement("img")
    boutonSuppresion.src = "./poubelle.png"
    boutonSuppresion.classList.add("poubelle")
    //le prix au milieu
    ligneDeDepense.appendChild(depenseMontantDiv)
    //le bouton suppression
    ligneDeDepense.appendChild(boutonSuppresion)
    //la ligne depense total
    depenseListing.appendChild.ligneDeDepense

    //remise a zéro des entrer
    depenseText.value = ""
    depenseMontant.value = ""

    boutonSuppresion.addEventListener("click",()=> {
        let récupererValeurDeLaDiv = boutonSuppresion.parentElement.children[1].innerHTML;

        //soustraction de totaldepense
totalperte -= parseFloat(récupererValeurDeLaDiv)


        //changement de la valeur de totalDepenseList(élément Html) avec la valeur totalDepense(numérique)
        
        console.log(grandTotalNum)
        grandTotalNum += parseFloat(récupererValeurDeLaDiv);
        grandTotal.textContent = grandTotalNum
        totalDepense.textContent = totalperte.toString()

        boutonSuppresion.parentElement.remove()
    })
}
})
