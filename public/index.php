<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Project</title>
    <link rel="stylesheet" href="../styles/styles.css">
    <link rel="stylesheet" href="../styles/responsive.css">
    <link rel="stylesheet" href="../styles/themeDarkMode.css">
</head>
<body>


<?php include '../templates/header.php'; ?>

<div class='bodyMain'>

<?php include '../templates/main.php'; ?>

<?php include '../templates/about.php'; ?>

<?php include '../templates/experience.php'; ?>

<?php include '../templates/competence.php'; ?>

<?php include '../templates/contact.php'; ?>

<?php include '../templates/footer.php'; ?>
        
</div>

<!-- SCroll to top -->
<ion-icon name="arrow-round-up" id='btnScrollToTop'></ion-icon>


<script src='../javascript/script.js'></script>
<script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
</body>
</html>