<?php get_header(); ?>

<div class="hero-section">
    <div class="video-background">
        <video autoplay muted loop playsinline poster="<?php echo get_template_directory_uri(); ?>/assets/images/planet-about.jpg">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/aetheria-intro.webm" type="video/webm">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/aetheria-intro.mp4" type="video/mp4">
            Ваш браузер не підтримує відео.
        </video>
    </div>

    <div class="hero-content">
        <h1>AETHERIA</h1>
        <button class="cta-button">Забронкувати столик</button>
    </div>
</div>

<?php get_footer(); ?>