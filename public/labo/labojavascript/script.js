let tableauMois=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]

//################ BOUCLE SIMPLE ##################

//déclaration d'un tableau de chaine de caractere contenant par exemple les mois de l'année 
/*let tableauMois =["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"];
//récupération de la div affichage
let affichage = document.getElementById("affichage");
/boucle simple d'itération
//tableauMois.lenght = 12
for(let index = 0;index<tableauMois.length;index++){
    affichage.textcontent = tableauMois[index];
    //à chaque itération, modification du texte de la div affichage
    if(tableauMois[index]==="mai"|| tableauMois[index]=== "septembre") {
        console.log("le mois de "+ tableauMois[index] +" à été trouvé",index)
    }
}
console.log(tableauMois);*/


//#################### BOUCLE SIMPLE A INCREMENTATION ######################

//déclaration d'un tableau de chaine de caractere contenant par exemple les mois de l'année 
/*let tableauMois =["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"];
//récupération de la div "affichage"

let affichage = document.getElementById("affichage")
//boucle simple d'iteration
//tableauMois.length = 12
for(let index =0;index<tableauMois.length;index+=2){
    //à chaque itération l'index est incrémenté de 2, lit la valeur de tableauMois[index] et modifie le texte de la div affichage
    affichage.textContent = tableauMois[index]
    if(tableauMois[index]==="mai" || tableauMois[index]==="septembre"){
        console.log("le mois de "+ tableauMois[index] + " à été trouvé", index)
    }
}*/

//############## BOUCLE SIMPLE AVEC 'CONTINUE' ###################

/*let tableauMois =["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"];
let affichage = document.getElementById("affichage")
for(let index = 0;index<tableauMois.length; index++) {
    //si la valeur de la cellule vaut "juin", juin, continuer sans faire de traitement, sinon afficher la valeur de la cellule
    if(tableauMois[index]==="juin"){
        continue;
    }
    affichage.textContent = tableauMois[index];
}
console.log(tableauMois)*/

//############# BOUCLE SIMPLE AVEC L4INSTRUCTION 'BREAK'#######################

/*let tableauMois=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
let affichage = document.getElementById("affichage")
for(let index = 0;index<tableauMois.length; index++){
    if(tableauMois[index] === "mai"){
    break;}
    console.log(index)
    affichage.textContent = tableauMois[index];
    
}*/

//#################### BOUCLE WHILE ##################

let affichage = document.getElementById("affichage")
//boucle d'iteration
//tableauMois.length = 12
//récupération de tous les élément possedant la classe "moisClass"
//déclaration d'un index à incrémenter

let index = 0;
//passage dans le tableauMois à la recherche des éléments possedant la class "violet"
//tant que l'élément possède la classe violet et que son texte est différent de novembre.
while(tableauMois[index].classList.contains(".violet")&& tableauMois[index].innerHTML !=="novembre"){
    //ajout de la class red qui colore la bordure en rouge
    tableauMois[index].add("red")
    //ajout d'une class pour un fond jaune
    tableauMois[index].classList.add("addFondJaune")
    //récupération du text de la div, stockage dans la variable textEnMajuscule et conversion en capitale
    let textEnMajuscule = tableauMois[index].innerHTML.toUpperCase();
    //assignation de la variable textEnMajuscule à la propriété text (innerhtml) de l'élément
    tableauMois[index].innerHTML = textEnMajuscule
    index++;
}



