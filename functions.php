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

    // 5. Підключаємо ЛОКАЛЬНУ бібліотеку Three.js
    wp_enqueue_script( 'threejs', get_template_directory_uri() . '/js/three.min.js', array(), null, true );
    
    // 6. Підключаємо наш скрипт для 3D-фону
    wp_enqueue_script( 'aetheria-hero-script', get_template_directory_uri() . '/js/three-hero.js', array('threejs'), '1.0', true );

    // --- НОВИЙ БЛОК: ПЕРЕДАЄМО ДАНІ У СКРИПТ ---
    $assets_data = array(
        'planetMenu'     => get_template_directory_uri() . '/assets/images/planet-menu.jpg',
        'planetAbout'    => get_template_directory_uri() . '/assets/images/planet-about.jpg',
        'planetContacts' => get_template_directory_uri() . '/assets/images/planet-contacts.jpg',
    );

    wp_localize_script( 'aetheria-hero-script', 'AETHERIA_ASSETS', $assets_data );
}
add_action( 'wp_enqueue_scripts', 'aetheria_scripts' );

?>
