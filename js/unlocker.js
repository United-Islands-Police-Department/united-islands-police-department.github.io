const unlocker = document.getElementById('unlocker')

unlocker.addEventListener("input", ev => {
    const value = ev.target.value.toLowerCase()
    switch (value) {
        case "help": {
            window.alert("langwaffe, langwaffekorrektur");
            break;
        }
        case "langwaffe": {
            ForceCopyToClipboard("https://links.uipd.tech/langwaffe");
            window.alert("'https://links.uipd.tech/langwaffe' wurde kopiert");
            break;
        }
        case "lwkorrektur": {
            window.open("https://links.uipd.tech/lwkorrektur", '_blank').focus();
            break;
        }
    }
})

function ForceCopyToClipboard(WhatToCopy) {
    navigator.clipboard.writeText(WhatToCopy)
}


var counterNumber = 0;

document.getElementById("linkcontainerh").addEventListener("click", ev => {
    counterNumber++
    if(counterNumber === 3) window.location.href = "https://links.thecompany.social/links"
})
