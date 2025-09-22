<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="site-header">
    <div class="header-container">
        <div class="menu-toggle" id="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav class="lang-switcher">
            <a href="#" class="lang-link active">UA</a>
            <span>/</span>
            <a href="#" class="lang-link">EN</a>
        </nav>
    </div>
</header>

<div class="fullscreen-menu" id="fullscreen-menu">
    <nav class="fullscreen-nav">
        <ul>
            <li><a href="#" data-translate="nav-home">Головна</a></li>
            <li><a href="#" data-translate="nav-menu">Меню</a></li>
            <li><a href="#" data-translate="nav-concept">Концепція</a></li>
            <li><a href="#" data-translate="nav-contact">Контакти</a></li>
        </ul>
    </nav>
</div>  