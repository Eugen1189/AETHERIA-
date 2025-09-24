document.addEventListener('DOMContentLoaded', function() {
    // --- Код для меню ---
    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');

    if (menuToggle && fullscreenMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('is-active');
            fullscreenMenu.classList.toggle('is-active');
        });
    }

    // --- ФІНАЛЬНА Анімація заголовку та кнопки ---
    const title = document.querySelector('.content-overlay h1');
    const button = document.querySelector('.cta-button');

    if (title && button && typeof gsap !== 'undefined') {
        
        // Створюємо послідовну анімацію
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(title, {
            duration: 2.0,
            opacity: 1, // Анімуємо ДО видимості
            scale: 1,
            delay: 0.5
        }).to(button, {
            duration: 1.5,
            opacity: 1, // Анімуємо ДО видимості
            y: 0
        }, "-=1.0"); // Починаємо анімацію кнопки за 1с до кінця анімації заголовку
        
    } else {
         // Якщо GSAP не завантажився, просто показуємо елементи
         if(title) title.style.opacity = 1;
         if(button) button.style.opacity = 1;
    }
});