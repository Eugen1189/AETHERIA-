<?php get_header(); ?>

<div class="hero-section">
    <div class="video-background intro-video">
        <video autoplay muted loop playsinline poster="<?php echo get_template_directory_uri(); ?>/assets/images/planet-about.jpg">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/aetheria-intro.webm" type="video/webm">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/aetheria-intro.mp4" type="video/mp4">
            Ваш браузер не підтримує відео.
        </video>
    </div>

    <div class="video-background main-video" style="display: none; opacity: 0;">
        <video muted loop playsinline>
            <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/space-loop.webm" type="video/webm">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/space-loop.mp4" type="video/mp4">
            Ваш браузер не підтримує відео.
        </video>
    </div>

    <div class="intro-overlay">
        <button id="enter-button" class="btn">ENTER</button>
    </div>

    <div class="main-content" style="display: none;">
        <div class="planets-nav">
            <a href="#menu-section" class="planet" id="planet-menu">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/planet-menu.jpg" alt="Menu">
            </a>
            <a href="#about-section" class="planet" id="planet-about">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/planet-about.jpg" alt="About Us">
            </a>
            <a href="#contacts-section" class="planet" id="planet-contacts">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/planet-contacts.jpg" alt="Contacts">
            </a>
        </div>

        <div class="center-content">
            <h1>AETHERIA</h1>
            <a href="#" class="btn">Забронювати столик</a>
        </div>
    </div>
</div>

<?php get_footer(); ?>