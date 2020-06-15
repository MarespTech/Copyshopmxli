<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Copy-Shop</title>
    
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>

    <link rel="stylesheet" href="css/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/ef94dd43d5.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <?php 
 include 'includes/header.php';
    
 if(isset($_GET['page'])){
     $page = $_GET['page'];
     
     if ($page == 'cotizador'){
         include 'views/cotizar.php';
     }
     else if ($page == 'servicios'){
         include 'views/servicios.php';
     }
     else if ($page == 'main'){
         include 'views/main.php';
     }


 }else{
     include 'views/main.php';
 }

 include 'includes/footer.php'; ?>
</body>



</html>