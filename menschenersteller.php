<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="https://uipd.tech/images/logo_pd.png">
    <link rel="stylesheet" href="css/menschenersteller.css">
    <title>Eisbärs PD Utils</title>
</head>
<body>
    <div class="hero-container">
        <div class="hero-logo">
            <a href="index.html"><img class="hero-logo-img" src="pdbanneridk.png" alt=""></a>
        </div>
    </div>
    <div class="menschenersteller-container">
        <div class="cardex">
            <div class="header" id="cardausname">Max Mustermann</div>
            <div class="body" id="cardausphone">17938/XXXXX</div>
            <div class="perso" id="cardausperso">Personalausweis</div>
        </div>
        <div class="cardex">
            <div class="header"><input type="text" name="namein" id="namein" placeholder="Name"></div>
            <div class="phone"><input type="text" name="phonein" id="phonein" placeholder="Telefonnummer"></div>
            <div class="body"><input type="text" name="persoin" id="persoin" placeholder="Personummer"></div>
            <br><br><button id="cardexbtn">Erstellen</button>
        </div>
    </div>
    <div class="endjsonex" id="endjsonex"></div>
</body>
<script>
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
            cardexpersonummer.value = "Personalausweis"
            cardexphone.value = ""

            cardausname.innerHTML = "Max Mustermann"
            cardausperson.innerHTML = "17938/XXXXX"
            cardausphone.innerHTML = "123456789"

            cardexbtn.innerHTML = "Erstellen"
        } else {
            if (!(cardexname.value == "")) {
                cardname = cardexname.value
                cardausname.innerHTML = cardexname
            }
            if (!(cardexpersonummer.value == "Personalausweis")) {
                cardpersonummer = cardexpersonummer.value
                cardausperson.innerHTML = cardexpersonummer
            }
            if (!cardexphone.value.startsWith("17938/")) {
                cardphone = cardexphone.value
                cardausphone.innerHTML = cardexphone
            }
        }
    })
</script>
</html>