const unlocker = document.getElementById('unlocker')

unlocker.addEventListener("input", ev => {
    const value = ev.target.value.toLowerCase()
    switch (value) {
        case "help": {
            window.alert("langwaffe, langwaffekorrektur");
            break;
        }
        case "langwaffe": {
            console.log(value)
            ForceCopyToClipboard("https://links.uipd.tech/langwaffe");
            window.alert("'https://links.uipd.tech/langwaffe' wurde kopiert");
            break;
        }
        case "lwkorrektur": {
            window.location.href = "https://links.uipd.tech/lwkorrektur"
            break;
        }
    }
})

function ForceCopyToClipboard(WhatToCopy) {
    navigator.clipboard.writeText(WhatToCopy)
}