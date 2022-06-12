const nameinput = document.getElementById("aktenerstellername-input")
const namebirthinput = document.getElementById("aktenerstellergeburt-input")
const namepersoninput = document.getElementById("aktenerstellerpersonummer-input")
const namedropcontent = document.getElementById("dropdown-content")

const strafendropdowncontent = document.getElementById("strafen-dropdown-content")
const strafeninput = document.getElementById("strafeninput")

function setuser(name, birth, personummer) {
    nameinput.value = name
    namebirthinput.value = birth
    namepersoninput.value = personummer
}

var totalearrest = 0
var totalhes = 0
var bussmin = 0
var bussmax = 0

const strafenelement = document.querySelector("[data-strafen-template]")
const strafencontainer = document.getElementById("strafen")

const totalehes = document.getElementById("totalehes")
const bussgeldmin = document.getElementById("bussgeldmin")
const bussgeldmax = document.getElementById("bussgeldmax")
const totalerarrest = document.getElementById("totalerarrest")

var allestgb = []
var alleswaffg = []
var allesbtmg = []
var allesstvo = []

var multiplier = {}

const zumkopieren = document.getElementById("paraszumkopieren")

function addstrafe(strafe, totalarrest, hes, bussmine, bussmaxe, para, paraeinf) {
    totalearrest += totalarrest
    if (totalearrest >= 60) {
      totalearrest -= 60
      totalhes += 1
    }
    totalhes += hes
    bussmin += bussmine
    bussmax += bussmaxe
    totalerarrest.innerHTML = totalearrest
    totalehes.innerHTML = totalhes
    bussgeldmin.innerHTML = bussmin
    bussgeldmax.innerHTML = bussmax
    addstrafenelement(strafe, hes, bussmine, bussmaxe)
    const paraneu = para.replace(paraeinf, '')
    if (paraneu === 'StGB ') {
      var indexofichweißesnicht = allestgb.indexOf(' ' + paraeinf)
      if (indexofichweißesnicht === -1) indexofichweißesnicht = allestgb.indexOf(' ' + multiplier[para] + 'x' + paraeinf)
      if (allestgb.includes(' ' + paraeinf) || allestgb.includes(' ' + multiplier[para] + 'x' + paraeinf)) {
        if (!(indexofichweißesnicht === -1)) {
          multiplier[para] += 1
          allestgb[indexofichweißesnicht] = ' ' + multiplier[para] + 'x' + paraeinf
        }
      } else {
        allestgb.push(' ' + paraeinf)
        multiplier[para] = 1
      }
    }
    else if (paraneu === 'WaffG ') {
      var indexofichweißesnicht = alleswaffg.indexOf(' ' + paraeinf)
      if (indexofichweißesnicht === -1) indexofichweißesnicht = alleswaffg.indexOf(' ' + multiplier[para] + 'x' + paraeinf)
      if (alleswaffg.includes(' ' + paraeinf) || alleswaffg.includes(' ' + multiplier[para] + 'x' + paraeinf)) {
        if (!(indexofichweißesnicht === -1)) {
          multiplier[para] += 1
          alleswaffg[indexofichweißesnicht] = ' ' + multiplier[para] + 'x' + paraeinf
        }
      } else {
        alleswaffg.push(' ' + paraeinf)
        multiplier[para] = 1
      }
    }
    else if (paraneu === 'BtMG ') {
      var indexofichweißesnicht = allesbtmg.indexOf(' ' + paraeinf)
      if (indexofichweißesnicht === -1) indexofichweißesnicht = allesbtmg.indexOf(' ' + multiplier[para] + 'x' + paraeinf)
      if (allesbtmg.includes(' ' + paraeinf) || allesbtmg.includes(' ' + multiplier[para] + 'x' + paraeinf)) {
        if (!(indexofichweißesnicht === -1)) {
          multiplier[para] += 1
          allesbtmg[indexofichweißesnicht] = ' ' + multiplier[para] + 'x' + paraeinf
        }
      } else {
        allesbtmg.push(' ' + paraeinf)
        multiplier[para] = 1
      }
    }
    else if (paraneu === 'StVO ') {
      var indexofichweißesnicht = allesstvo.indexOf(' ' + paraeinf)
      if (indexofichweißesnicht === -1) indexofichweißesnicht = allesstvo.indexOf(' ' + multiplier[para] + 'x' + paraeinf)
      if (allesstvo.includes(' ' + paraeinf) || allesstvo.includes(' ' + multiplier[para] + 'x' + paraeinf)) {
        if (!(indexofichweißesnicht === -1)) {
          multiplier[para] += 1
          allesstvo[indexofichweißesnicht] = ' ' + multiplier[para] + 'x' + paraeinf
        }
      } else {
        allesstvo.push(' ' + paraeinf)
        multiplier[para] = 1
      }
    }
    var dannalles = ''
    if (!(allestgb.length === 0)) dannalles += 'StGB ' + allestgb
    if (!(alleswaffg.length === 0)) dannalles += ' WaffG ' + alleswaffg
    if (!(allesbtmg.length === 0)) dannalles += ' BtMG ' + allesbtmg
    if (!(allesstvo.length === 0)) dannalles += ' StVO ' + allesstvo
    zumkopieren.innerText = dannalles
}

function reset() {
    strafencontainer.innerText = ""
    totalearrest = 0
    totalhes = 0
    bussmin = 0
    bussmax = 0
    totalerarrest.innerHTML = 0
    totalehes.innerHTML = 0
    bussgeldmin.innerHTML = 0
    bussgeldmax.innerHTML = 0
    allestgb = []
    alleswaffg = []
    allesbtmg = []
    allesstvo = []
    zumkopieren.innerText = ""
    zumkopieren.classList.remove("copied")
}

function addstrafenelement(strafe, hes, bussmine, bussmaxe) {
    const strafentemplate = strafenelement.content.cloneNode(true).children[0]
    const header = strafentemplate.querySelector("[data-header]")
    const body = strafentemplate.querySelector("[data-hes]")
    const bussgeldmintemp = strafentemplate.querySelector("[data-bussgeldmin]")
    const bussgeldmaxtemp = strafentemplate.querySelector("[data-bussgeldmax]")
    header.innerText = strafe
    body.innerText = hes
    bussgeldmintemp.innerText = bussmine
    bussgeldmaxtemp.innerText = bussmaxe
    strafencontainer.append(strafentemplate)
}

var testamk = [1, 3, 5, 2, 4]

testamk = testamk.sort(function (a, b) {
  return a - b
})

for (let i = 0; i < testamk.length; i++) {
  const test = testamk[i];
  console.log(test)
}

let strafen = []

strafeninput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    strafen.forEach(strafe => {
      const isVisible =
        strafe.name.toLowerCase().includes(value) ||
        strafe.para.toLowerCase().includes(value) ||
        strafe.paraeinf.toLowerCase().includes(value)
      strafe.element.classList.toggle("hide", !isVisible)
    })
})

zumkopieren.addEventListener('click', function() {
  navigator.clipboard.writeText(zumkopieren.innerText)
  zumkopieren.classList.add("copied")
})

const userCardTemplate = document.querySelector("[button-template]")
const strafenbuttontemplate = document.querySelector("[strafen-button-template]")

fetch("../menschen.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const buttontemplate = userCardTemplate.content.cloneNode(true).children[0]
      const tembutton = buttontemplate.querySelector("[data-uffffff]")
      tembutton.innerText = user.name
      tembutton.onclick = function () {
          setuser(user.name, user.birth, user.personummer)
       };
      namedropcontent.append(buttontemplate)
    })
})

fetch("../strafen.json")
  .then(res => res.json())
  .then(data => {
    strafen = data.map(strafe => {
    const stafenbuttontemplate = strafenbuttontemplate.content.cloneNode(true).children[0]
    const strafentembutton = stafenbuttontemplate.querySelector("[data-strafen-button]")
    strafentembutton.innerText = strafe.name
    strafentembutton.onclick = function () {
        addstrafe(strafe.name, strafe.arrest, strafe.hes, strafe.bussgeldmin, strafe.bussgeldmax, strafe.para, strafe.paraeinf)
    };
    strafendropdowncontent.append(stafenbuttontemplate)
    return { name: strafe.name, para: strafe.para, paraeinf: strafe.paraeinf, element: stafenbuttontemplate }
    })
})