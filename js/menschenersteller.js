const cardexname = document.getElementById("namein")
const cardexpersonummer = document.getElementById("persoin")
const cardexhaartyp = document.getElementById("haartin")
const cardexhaarfarbe = document.getElementById("haarfin")
const cardexgesichtslink = document.getElementById("gesichtlin")
const cardexbtn = document.getElementById("cardexbtn")
const endjsonex = document.getElementById("endjsonex")

const cardausname = document.getElementById("cardausname")
const cardausperson = document.getElementById("cardausperson")
const cardaushaart = document.getElementById("cardaushaart")
const cardaushaarf = document.getElementById("cardaushaarf")
const cardausgesichtsl = document.getElementById("cardausgesichtsl")

var cardname
var cardpersonummer
var cardhaart
var cardhaarf
var cardgesl
var endjson

cardexbtn.addEventListener('click', function() {
    if (cardexbtn.innerHTML == "Zurücksetzen") {
        endjsonex.innerHTML = ""
        endjsonex.classList.remove("copied")

        cardexname.value = ""
        cardexpersonummer.value = ""
        cardexhaartyp.value = ""
        cardexhaarfarbe.value = ""
        cardexgesichtslink.value = ""

        cardausname.innerHTML = "Knut Eisbär"
        cardausperson.innerHTML = "123456789"
        cardaushaart.innerHTML = "Baba Locken"
        cardaushaarf.innerHTML = "Schwarz"
        cardausgesichtsl.src = "https://cdn.discordapp.com/attachments/879068677297819669/886232915762102322/eis.jpg"

        cardexbtn.innerHTML = "Erstellen"
    } else {
        if (!(cardexname.value == "")) {
            cardname = cardexname.value
            cardausname.innerHTML = cardname
        }
        if (!(cardexpersonummer.value == "")) {
            cardpersonummer = cardexpersonummer.value
            cardausperson.innerHTML = cardpersonummer
        }
        if (!(cardexhaartyp.value == "")) {
            cardhaart = cardexhaartyp.value
            cardaushaart.innerHTML = cardhaart
        }
        if (!(cardexhaarfarbe.value == "")) {
            cardhaarf = cardexhaarfarbe.value
            cardaushaarf.innerHTML = cardhaarf
        }
        if (!(cardexgesichtslink.value == "")) {
            cardgesl = cardexgesichtslink.value
            cardausgesichtsl.src = cardgesl
        } else {
            cardgesl = "https://cdn.discordapp.com/attachments/879068677297819669/886232915762102322/eis.jpg"
        }
    
        endjson = 
        {
            "id" : 1,
            "name" : cardname,
            "personummer" : cardpersonummer,
            "haartyp" : cardhaart,
            "haarfarbe" : cardhaarf,
            "gesichtbild" : cardgesl
        }

        endjsonex.innerHTML = JSON.stringify(endjson)
        cardexbtn.innerHTML = "Zurücksetzen"
    }
})

endjsonex.addEventListener('click', function() {
    navigator.clipboard.writeText(JSON.stringify(endjson))
    endjsonex.classList.add("copied")
})