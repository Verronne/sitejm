let blocUn = document.getElementById("un")

console.log(blocUn.classList)

blocUn.addEventListener("click", () =>{
    // change the background color to a new color when the div is clicked
    blocUn.style.backgroundColor ="red";
    blocUn.style.color ="white";
    const nouveau = document.createElement("div");
    nouveau.classList.add("carre")
    const Calculatrice = document.getElementById("Calculatrice")
    Calculatrice.appendChild(nouveau)
    const monNombreAleatoire =Math.floor(Math.random()*6);

})
let blocDeux = document.getElementById("deux")
console.log(blocDeux.classList)

blocDeux.addEventListener("click", () =>{
    // change the background color to a new color when the div is clicked
    blocDeux.classList.toggle("black");
    blocDeux.classList.toggle("deuxwhite")
    
    
}) 

const timer = setInterval(
    () => {
        blocDeux.classList.toggle("black");
        blocDeux.classList.toggle("deuxwhite")
    
    }
    ,1000)

let blocTrois = document.getElementById("trois")
blocTrois.addEventListener("click", () =>{
    // change the background color to a new color when the div is clicked
    blocTrois.classList.add("borderyellow");
    blocTrois.setAttribute("style", "width:100px")
    clearInterval(timer);
})

let tousLesBlackBlock = document.querySelectorAll(".blackBlock")
for (let i=0;i<tousLesBlackBlock.length;i++) {
    tousLesBlackBlock[i].setAttribute("style","border:yellow solid 2px")
}

    const nouveau = document.createElement("div");
    nouveau.id ="nouvelleDiv";
    nouveau.className ="transparent";
    nouveau.style.backgroundColor ="violet";

    nouveau.textContent ="N";
    nouveau.style.display ="flex"
    nouveau.style.justifyContent ="center"
    nouveau.style.alignItems ="center"
    //nouveau.setAttribute("style","height: 100px;width: 100px;background-color:blue");
    document.body.appendChild(nouveau)
    const grille = document.getElementById("grille")
    grille.appendChild(nouveau);



