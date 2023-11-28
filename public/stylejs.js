/*#####################--LINKEDIN--###################*/

let linkedin = document.getElementById("linkedin")
console.log(linkedin.classList)
linkedin.addEventListener("mouseenter", () => {
    linkedin.classList.toggle("ombre")
    linkedin.setAttribute("style", "border-radius: 15%; box-shadow: 1px 1px 20px; -ms-transform: scale(1.1); -webkit-transform: scale(1.1); transform: scale(1.1); transition: 0.5s; color: #e0e0e0")

})
linkedin.addEventListener("mouseout", () => {
    linkedin.classList.toggle("ombre")
    linkedin.setAttribute("style", "border-radius: 15%;  transition: 1s;")
})
/*const lienlinkedin = document.createElement("div")
linkedin.setAttribute("style","border-radius: 15%;  transition: 1s;width :100px;height :100px; background-color :black" )
document.body.appendChild(lienlinkedin)

*/
linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/julien-muzard-8908a7252/")
})

/*####################--MAPS--######################*/

let maps = document.getElementById("maps")
console.log(maps.classList)
maps.addEventListener("mouseenter", () => {
    maps.classList.toggle("ombre")
    maps.setAttribute("style", "filter: drop-shadow(1px 1px 10px); -ms-transform: scale(1.2); -webkit-transform: scale(1.2); transform: scale(1.2); transition: 0.5s; color: #e0e0e0")
})
maps.addEventListener("mouseout", () => {
    maps.classList.toggle("ombre")
    maps.setAttribute("style", "transition: 1s;")
})
maps.addEventListener("click", () => {
    window.open("https://www.google.com/maps/place/61700+Domfront+en+Poiraie/@48.5864629,-0.8202104,11z/data=!3m1!4b1!4m6!3m5!1s0x4809827bc687ca41:0xfc525d3dc44550c!8m2!3d48.6058965!4d-0.6690744!16s%2Fg%2F11bxfvrbll?entry=ttu")
})

/*####################--telephone--#######################*/

let telephone = document.getElementById("telephone")
console.log(maps.classList)
telephone.addEventListener("mouseenter", () => {
    telephone.classList.toggle("ombre")
    telephone.setAttribute("style", "filter: drop-shadow(1px 1px 10px); -ms-transform: scale(1.2); -webkit-transform: scale(1.2); transform: scale(1.2); transition: 0.5s; color: #e0e0e0")
})
telephone.addEventListener("mouseout", () => {
    telephone.classList.toggle("ombre")
    telephone.setAttribute("style", "transition: 1s;")
})
telephone.addEventListener("click", () => {
    window.open("tel:+33645130560")
})

/*##########################--ADRESSE MAIL--################################*/

let adressemail = document.getElementById("adressemail")
console.log(maps.classList)
adressemail.addEventListener("mouseenter", () => {
    adressemail.classList.toggle("ombre")
    adressemail.setAttribute("style", "filter: drop-shadow(1px 1px 10px);-ms-transform: scale(1.2); -webkit-transform: scale(1.2); transform: scale(1.2); transition: 0.5s; color: #e0e0e0")
})
adressemail.addEventListener("mouseout", () => {
    adressemail.classList.toggle("ombre")
    adressemail.setAttribute("style", "transition: 1s;")
})
adressemail.addEventListener("click", () => {
    window.open("mailto:muzardjulien1986@gmail.com")
})


//###########  click ecran pour fermer le menu  #############

const fermerMenu = () => {
    


    const input = document.getElementById("menu-cb")
    input.checked = false

    const fenetreNode = document.getElementById("menu-cote")
    fenetreNode.remove()

}
const changerEtatMenu =() => {
    //récupérer le menu
    const input = document.getElementById("menu-cb")
    const actif = input.checked

    if(actif) {
        const fenetreNode = document.createElement("div")
        fenetreNode.id = "menu-cote"
        fenetreNode.className = "menu-cote"
        fenetreNode.addEventListener("click", fermerMenu)
        document.body.appendChild(fenetreNode)

    } else {
        const fenetreNode = document.getElementById("menu-cote")
    fenetreNode.remove()
    }
}
const input = document.getElementById("menu-cb")
input.addEventListener("click", changerEtatMenu)