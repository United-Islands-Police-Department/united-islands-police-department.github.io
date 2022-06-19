const nav_links = document.getElementsByClassName("nav_link")

const uipddings = document.getElementById("nav_uipd_link")

var aktuellfokus = uipddings

const uipdnewscontainer = document.getElementById("uipd_container")
const fahndungcontainer = document.getElementById("fahndung_container")
const pressecontainer = document.getElementById("presse_container")
const karrierecontainer = document.getElementById("karriere_container")

for(var i = 0; i < nav_links.length; i++) {
    (function(index) {
        nav_links[index].addEventListener("click", function(event) {
            aktuellfokus.classList.remove("nav_links_active")
            event.target.classList.add("nav_links_active")
            aktuellfokus = event.target
            removeall()
            if (event.target.innerHTML === "Polizei United Islands") uipdnewscontainer.classList.remove("removed")
            if (event.target.innerHTML === "Fahndung") fahndungcontainer.classList.remove("removed")
            if (event.target.innerHTML === "Presse") pressecontainer.classList.remove("removed")
            if (event.target.innerHTML === "Karriere") karrierecontainer.classList.remove("removed")
       })
    })(i);
}

function removeall() {
    uipdnewscontainer.classList.add("removed")
    fahndungcontainer.classList.add("removed")
    pressecontainer.classList.add("removed")
    karrierecontainer.classList.add("removed")
}