const überschrift = document.getElementsByClassName("überschrift")

for(var i = 0; i < überschrift.length; i++) {
    (function(index) {
        überschrift[index].addEventListener("click", function() {
            weh()
        })
    })(i);
}

const unterschrift = document.getElementsByClassName("klickmich")

for(var i = 0; i < unterschrift.length; i++) {
    (function(index) {
        unterschrift[index].addEventListener("click", function() {
            weh()
        })
    })(i);
}

document.getElementById("blauesteilzuwerbung").addEventListener('click', () => {
    weh2()
})

document.getElementById("blauesteilzubilder").addEventListener('click', () => {
    weh3()
})

document.addEventListener('keydown', (event) => {
    if (event.code === "Space") weh()
})

function weh() {
    window.location.href = "#"
}

function weh2() {
    window.location.href = "#"
}

function weh3() {
    window.location.href = "#"
}