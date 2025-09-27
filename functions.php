<?php

function aetheria_scripts() {
    // 1. Підключення CSS
    wp_enqueue_style( 'aetheria-style', get_stylesheet_uri() );

    // 2. Підключаємо ЛОКАЛЬНЕ ядро GSAP
    wp_enqueue_script( 'gsap-core', get_template_directory_uri() . '/js/gsap.min.js', array(), null, true );
    
    // 3. Підключаємо ЛОКАЛЬНИЙ плагін SplitText (з малої літери)
    wp_enqueue_script( 'gsap-splittext', get_template_directory_uri() . '/js/splittext.min.js', array('gsap-core'), null, true );

    // 4. Підключаємо наш основний скрипт для меню
    wp_enqueue_script( 'aetheria-main-script', get_template_directory_uri() . '/js/main.js', array('gsap-core', 'gsap-splittext'), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'aetheria_scripts' );

function aetheria_register_nav_menu() {
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'aetheria-theme' ),
    ) );
}
add_action( 'after_setup_theme', 'aetheria_register_nav_menu' );

?>
