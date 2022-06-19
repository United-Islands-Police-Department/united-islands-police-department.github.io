<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="https://uipd.tech/images/logo_pd.png">
    <link rel="stylesheet" href="css/login.css">
    <title>PD Utils</title>
</head>
<body>
    <?php
    if(isset($_POST["submit"])){
      $mysql = require("../../mysql/mysql.php");
      $stmt = $mysql->prepare("SELECT * FROM accounts WHERE USERNAME = :user"); //Username überprüfen
      $stmt->bindParam(":user", $_POST["username"]);
      $stmt->execute();
      $count = $stmt->rowCount();
      if($count == 1){
        //Username ist frei
        $row = $stmt->fetch();
        if(password_verify($_POST["pw"], $row["password"])){
          session_start();
          $_SESSION["username"] = $row["username"];
          header("Location: index.php");
        } else {
          echo "Der Login ist fehlgeschlagen";
        }
      } else {
        echo "Der Login ist fehlgeschlagen";
      }
    }
     ?>



    <div class="hero-container">
        <div class="hero-logo">
            <a href=""><img class="hero-logo-img" src="../../img/pdbanneridk.png" alt="" id="logo"></a>
        </div>
    </div>

    <h1 id="linkcontainerh">Anmelden</h1>
        <div class="links-container" id="linkcontainer">
            <form action="login.php" method="post">
                <input type="text" name="username" placeholder="Username" required><br>
                <input type="password" name="pw" placeholder="Passwort" required><br>
                <button type="submit" name="submit">Einloggen</button>
            </form>
            <br>
        </div>
        <a href="register.php">Noch keinen Account?</a>
    </body>
</html>