<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
    <link rel="stylesheet" href="../../../css/clientarea/polarea/leitstelle/index.css"/>
    <title>Leistelle</title>
  </head>
  <body>
    <a href="../logout.php">Abmelden</a>
      <?php

      session_start();
      if(!isset($_SESSION["username"])){
        header("Location: ../login.php");
        exit;
      }

      $username = $_SESSION["username"];

      print($username)
     ?>
    </div>
  </body>
</html>
