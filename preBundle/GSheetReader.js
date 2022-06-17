// run 'browserify ./preBundle/GSheetReader.js > ./js/GSheetReader.js' after any changes

const GSheetReader = require('g-sheets-api')
const options = {
    apiKey: 'AIzaSyCr7QGCPjlhT3KfMEHVOYW-yeyBeE927_k',
    sheetId: '1P6eYW6F8Ubo2bzQzbe1Vy50vdvW8mmYZNW_NfqJcgL8',
    sheetNumber: 1,
    sheetName: 'Personenakten',
    returnAllResults: false,
}
var names = [];

GSheetReader(
    options,
    results => {
        for (let i = 0; i < results.length; i++) {
            var name = results[i].Name
            if(!names.includes(name)) names.push(name)
        }
        console.log(names)
    },
    error => {
        window.alert(error)
    });