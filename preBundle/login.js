var uname = document.getElementById("uname")
var psw = document.getElementById("psw")
var button = document.getElementById("loginbutton")

// run 'browserify ./preBundle/login.js > ./js/login.js' after any changes

const GSheetReader = require('g-sheets-api')
const options = {
    apiKey: 'AIzaSyCr7QGCPjlhT3KfMEHVOYW-yeyBeE927_k',
    sheetId: '1P6eYW6F8Ubo2bzQzbe1Vy50vdvW8mmYZNW_NfqJcgL8',
    sheetNumber: 1,
    sheetName: 'Mitarbeiter',
    returnAllResults: false,
}
var dienstnummern = [];
var passworter = [];
var inte = -405;

GSheetReader(
    options,
    results => {
        for (let i = 0; i < results.length; i++) {
            var dstn = results[i].Dienstnummer
            var passwort = results[i].Passwort
            dienstnummern.push(dstn)
            passworter.push(passwort)

        }
        console.log(dstn)
        console.log(passwort)
    },
    error => {
        window.alert(error)
    });

button.addEventListener("click", ev => {
    for (let i = 0; i < dienstnummern; i++) {
        if(dienstnummern[i] == uname) {
            inte = i
        }
    }
})