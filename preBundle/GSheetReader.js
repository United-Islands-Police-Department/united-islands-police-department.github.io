// run 'browserify ./preBundle/GSheetReader.js > ./js/GSheetReader.js' after any changes

const GSheetReader = require('g-sheets-api')
const options = {
    apiKey: 'AIzaSyCr7QGCPjlhT3KfMEHVOYW-yeyBeE927_k',
    sheetId: '1P6eYW6F8Ubo2bzQzbe1Vy50vdvW8mmYZNW_NfqJcgL8',

}

GSheetReader(
    options,
    results => {
        console.log(1,2)
        console.log(results)
    },
    error => {
        console.log(3,4)
        console.log(error)
    });
