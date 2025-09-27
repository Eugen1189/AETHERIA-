<?php get_header(); ?>
<main id="main-content">

    <video autoplay muted loop playsinline poster="" id="main-bg-video">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/space-loop.webm" type="video/webm">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/videos/space-loop.mp4" type="video/mp4">
        </video>

        <div id="planet-navigation" class="planet-navigation-container">
            <div class="central-logo">AETHERIA</div>

        <div class="cta-button-container">
            <a href="#" class="cta-button">Резервувати шаттл</a>
                </div>
        <a href="#" class="planet planet-about" data-target="about-section" data-background="<?php echo get_template_directory_uri(); ?>/assets/images/planet-about.jpg">
            <div class="planet-visual" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/planet-about.jpg');"></div>
                <span>About Us</span>
            </a>
        <a href="#" class="planet planet-menu" data-target="menu-section" data-background="<?php echo get_template_directory_uri(); ?>/assets/images/planet-menu.jpg">
            <div class="planet-visual" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/planet-menu.jpg');"></div>
                <span>Menu</span>
            </a>
        <a href="#" class="planet planet-contacts" data-target="contacts-section" data-background="<?php echo get_template_directory_uri(); ?>/assets/images/planet-contacts.jpg">
            <div class="planet-visual" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/planet-contacts.jpg');"></div>
                <span>Contacts</span>
            </a>
</div>

<section id="about-section" class="content-section is-hidden">
    <button class="back-button" aria-label="Повернутись назад">&times;</button>
        <div class="container content-columns">
            <div class="content-left">
                <h2>ABOUT AETHERIA</h2>
                <p>AETHERIA is not just a restaurant. It's a portal to a new world where futuristic technologies meet haute cuisine. Our mission is to create not just dishes, but interstellar gastronomic experiences. We are pioneers exploring the uncharted flavors of the galaxy to bring them to you. Every visit to us is a journey you will remember forever.</p>
            </div>
            <div class="content-right">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/restaurant-interior.jpg" alt="AETHERIA Concept">
        </div>
    </div>
</section>
<section id="menu-section" class="content-section is-hidden">
    <button class="back-button" aria-label="Повернутись назад">&times;</button>
    <div class="container">
            <h2>OUR MENU</h2>
            <p>Explore our galactic dishes, cosmic cocktails, and much more. Each menu item is a journey to a new stellar system of taste.</p>

            <div class="menu-category">
                <h3 class="category-title hologram-text">NEBULA STARTERS</h3>
                <div class="menu-items">
                    <div class="menu-item hologram-text" 
                         data-title="Saturn's Rings Salad"
                         data-description="Crisp, cryo-processed vegetables harvested from orbital greenhouses, arranged in concentric rings and drizzled with a shimmering, sweet and tangy nebula sauce."
                         data-price="🌌 280 UAH"
                         data-image="<?php echo get_template_directory_uri(); ?>/assets/images/saturn-salad.jpg">
                        <h4>Saturn's Rings Salad</h4>
                        <p>Cryo-processed vegetables with nebula sauce</p>
                    </div>
                    <div class="menu-item hologram-text"
                         data-title="Red Giant Tartare"
                         data-description="Finely chopped prime Martian beef, seasoned with explosive volcanic salt from Io and served with a quail's yolk representing a nascent star."
                         data-price="🌌 350 UAH"
                         data-image="<?php echo get_template_directory_uri(); ?>/assets/images/red-giant-tartare.jpg">
                        <h4>Red Giant Tartare</h4>
                        <p>Martian beef with volcanic salt</p>
                    </div>
                </div>
            </div>

            <div class="menu-category">
                <h3 class="category-title hologram-text">MAIN ORBITS</h3>
                <div class="menu-items">
                    <div class="menu-item hologram-text"
                         data-title="Asteroid Belt Steak"
                         data-description="A prime cut of space-fed bovine, seared on a genuine meteorite fragment to lock in the cosmic flavors. Served with a rich, dark matter reduction sauce."
                         data-price="🌌 450 UAH"
                         data-image="<?php echo get_template_directory_uri(); ?>/assets/images/asteroid-steak.jpg">
                        <h4>Asteroid Belt Steak</h4>
                        <p>Cooked on meteorite stone with dark matter sauce</p>
                    </div>
                    <div class="menu-item hologram-text"
                         data-title="Europa Moon Fish"
                         data-description="A delicate fillet of bioluminescent fish, sourced from the deep, hidden oceans of Europa. Served in a stunning cryo-glaze that cracks like ice."
                         data-price="🌌 420 UAH"
                         data-image="<?php echo get_template_directory_uri(); ?>/assets/images/europa-fish.jpg">
                        <h4>Europa Moon Fish</h4>
                        <p>Deep-sea fish from Europa's oceans in cryo-glaze</p>
                    </div>
                </div>
            </div>

            <div class="menu-category">
                <h3 class="category-title hologram-text">DESSERT "ASTEROIDS"</h3>
                <div class="menu-items">
                    <div class="menu-item hologram-text"
                         data-title="Black Hole Chocolate Sphere"
                         data-description="A perfect sphere of dark, Valrhona chocolate that represents a black hole. Pour over the warm caramel 'event horizon' to melt the sphere and reveal the liquid lava cream center."
                         data-price="🌌 250 UAH"
                         data-image="<?php echo get_template_directory_uri(); ?>/assets/images/black-hole-sphere.jpg">
                        <h4>Black Hole Chocolate Sphere</h4>
                        <p>With liquid lava cream center</p>
                    </div>
                </div>
            </div>

    </div>
</section>
<section id="contacts-section" class="content-section is-hidden">
    <button class="back-button" aria-label="Повернутись назад">&times;</button>
    <div class="container">
            <h2>CONTACTS</h2>
            
            <div class="contact-intro-panel">
                <p>Ready to begin your journey? Reserve a shuttle or contact our flight control center for intergalactic cooperation.</p>
            </div>

            <div class="contact-details-grid">
                
                <div class="contact-item">
                    <div class="contact-title"><i class="fas fa-map-marker-alt"></i> Coordinates</div>
                    <div class="contact-detail">
                        "Alpha Centauri" Spaceport<br>
                        Sector 7, Orion Arm, Terra Nova system, Platform №9.<br>
                        <strong>Quantum Beacon:</strong> Q-Beacon ID: AET-771-B
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-title"><i class="fas fa-headset"></i> Communication Channel</div>
                    <div class="contact-detail">+380 (XX) XXX-XX-XX</div>
                </div>

                <div class="contact-item">
                    <div class="contact-title"><i class="fas fa-clock"></i> Operating Hours</div>
                    <div class="contact-detail">Cycles from 18:00 to 02:00 Earth time</div>
                </div>
                
                <div class="contact-item booking-placeholder">
                    <div class="contact-title"><i class="fas fa-rocket"></i> Booking Form</div>
                    <div class="contact-detail">Will be activated soon</div>
                </div>

            </div>

            <!-- Соціальні іконки -->
            <div class="social-icons">
                <a href="#" style="--color: #C13584;">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" style="--color: #1877F2;">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#" style="--color: #25D366;">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </div>

    </div>
</section>
</main>

<!-- Модальне вікно для деталей страв -->
<div id="dish-modal" class="modal-overlay">
    <div class="modal-content">
        <img id="modal-image" src="" alt="Dish image">
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
        <div id="modal-price" class="price"></div>
    </div>
</div>

<?php get_footer(); ?>