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

    // --- НАДІЙНА Анімація заголовку та кнопки ---
    const title = document.querySelector('.hero-content h1');
    const button = document.querySelector('.cta-button');

    if (title && button && typeof gsap !== 'undefined') {
        
        // Створюємо послідовну анімацію
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Анімуємо заголовок як єдиний елемент
        tl.to(title, {
            duration: 2.0,
            opacity: 1, // Анімуємо ДО видимості
            scale: 1,    // Масштабуємо до нормального розміру
            delay: 0.5
        })
        // Анімуємо кнопку
        .to(button, {
            duration: 1.5,
            opacity: 1, // Анімуємо ДО видимості
            y: 0         // Повертаємо на місце по осі Y
        }, "-=1.5"); // Починаємо анімацію кнопки за 1.5с до кінця анімації заголовку
        
    } else {
         // Якщо GSAP не завантажився, просто показуємо елементи
         if(title) title.style.opacity = 1;
         if(button) button.style.opacity = 1;
    }
});