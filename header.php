<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Старе меню прибрано - навігація тепер через планети -->

<div id="preloader" class="loaded">
    <video autoplay muted loop playsinline poster="" id="intro-video">
        <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/aetheria-intro.webm" type="video/webm">
        <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/aetheria-intro.mp4" type="video/mp4">
    </video>
    <div class="intro-overlay">
        <div class="intro-center-content">
            <button id="enter-button" class="btn">ENTER</button>
            <p class="slogan">AETHERIA: YOUR PORTAL TO A NEW REALITY.</p>
        </div>
    </div>
</div>   