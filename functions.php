<?php

function aetheria_scripts() {
    // Підключення CSS
    wp_enqueue_style( 'aetheria-style', get_stylesheet_uri() );
    
    // === НОВІ РЯДКИ: ПІДКЛЮЧЕННЯ GSAP ===
    wp_enqueue_script( 'gsap-core', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', array(), null, true );
    wp_enqueue_script( 'gsap-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', array('gsap-core'), null, true );
    // ===================================

    // === НОВИЙ РЯДОК: ПІДКЛЮЧЕННЯ THREE.JS ===
    wp_enqueue_script( 'three-js', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', array(), null, true );
    
    // Оновлюємо залежності для нашого main.js
    wp_enqueue_script( 'aetheria-main-script', get_template_directory_uri() . '/js/main.js', array('gsap-core', 'gsap-scrolltrigger', 'three-js'), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'aetheria_scripts' );

?>
