<footer class="site-footer">
    <div class="footer-container">
        <div class="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
            <a href="#">Facebook</a>
        </div>
        <div class="footer-copyright">
            &copy; <?php echo date('Y'); ?> AETHERIA. <span data-translate="footer-copyright">Всі права захищені.</span>
        </div>
    </div>
    
    <div class="hologram-modal" id="hologram-modal">
        <div class="hologram-backdrop"></div>
        <div class="hologram-content">
            <button class="hologram-close" id="hologram-close">&times;</button>
            <div class="hologram-inner-wrapper">
                <div class="hologram-image-container">
                    <img id="hologram-image" src="" alt="">
                </div>
                <div class="hologram-text-container">
                    <h2 id="hologram-title"></h2>
                    <p id="hologram-description"></p>
                    <div id="hologram-price"></div>
                </div>
            </div>
        </div>
    </div>

    <?php wp_footer(); ?>
</body>
</html>