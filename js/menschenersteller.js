const cardexname = document.getElementById("namein")
const cardexpersonummer = document.getElementById("persoin")
const cardexphone = document.getElementById("phonein")
const cardexbtn = document.getElementById("cardexbtn")

const cardausname = document.getElementById("cardausname")
const cardausperson = document.getElementById("cardausperson")
const cardausphone = document.getElementById("cardausphone")

var cardname
var cardpersonummer
var cardphone

cardexbtn.addEventListener('click', function() {
    if (cardexbtn.innerHTML == "Zurücksetzen") {

        cardexname.value = ""
        cardexpersonummer.value = ""
        cardexphone.value = ""

        cardausname.innerHTML = "Max Mustermann"
        cardausperson.innerHTML = "17938/XXXXX"
        cardausphone.innerHTML = "123456789"

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
        if (cardexphone.value.startsWith("17938/")) {
            cardphone = cardexphone.value
            cardausphone.innerHTML = cardphone
        }
    }
})