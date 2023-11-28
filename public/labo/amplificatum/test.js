let testeur = document.getElementById("testeur")
let body = document.querySelector("body")

testeur.addEventListener("click", ()=> {
    let nouveauCarre = document.createElement("div")
    console.log(nouveauCarre)
    nouveauCarre.classList.add("nouveauCarre")
    nouveauCarre.textContent=("truc")
    //style du nouvel enfant
    nouveauCarre.setAttribute("style", "border-radius: 5px")
    body.appendChild(nouveauCarre);

    nouveauCarre.addEventListener("click", ()=>{
        let renouveauCarre = document.createElement("div")
        console.log(renouveauCarre)
        renouveauCarre.setAttribute("style", "background-color: blue; width: 100px; height: 100px; cursor: pointer;" )
        body.appendChild(renouveauCarre)
        
        renouveauCarre.addEventListener("click", ()=>{
            let carrerouge = document.createElement("div")
            console.log(carrerouge)
            carrerouge.setAttribute("style", "background-color: red; width: 100px; height: 100px; cursor: pointer;" )
            body.appendChild(carrerouge)
            
        })
    })
    
    
})
//édition d'un tableau, tableau = tableau; index = cellule, "lundi", mardi" etc = contenue de cellule
let tableau =["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
//for(let index =0;index<tableau.length;index++){
    //let c = tableau [index];
    //console.log("case",c)
    //console.log("index",index)

//}
//do...while compte jusqu'à (do = faire) (while = allez à)
let index = 0;
let valeur =""
do{
    valeur = tableau[index]
    console.log(valeur)
    index++
} while(valeur !=="vendredi");

//while 
while(valeur !==7);
let tableauJour = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
let tableauNombre = [1,2,3,4,5,6,7,8,9,10]
let tableauNom = ["pascal","julien","hercule","brigitte"]
i=0;
while(i<3){

    console.log("tableauJour"+tableauJour[i])
    console.log("tableauNom"+tableauNom[i])
    i++;
}





