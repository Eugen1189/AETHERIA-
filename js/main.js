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

    // --- Код для переходу з інтро на основний контент ---
    const enterButton = document.getElementById('enter-button');
    const introOverlay = document.querySelector('.intro-overlay');
    const mainContent = document.querySelector('.main-content');

    const introVideoContainer = document.querySelector('.intro-video');
    const introVideo = introVideoContainer ? introVideoContainer.querySelector('video') : null;
    
    const mainVideoContainer = document.querySelector('.main-video');
    const mainVideo = mainVideoContainer ? mainVideoContainer.querySelector('video') : null;

    if (enterButton && introVideoContainer && mainVideoContainer && mainVideo) {
        enterButton.addEventListener('click', function() {
            // 1. Плавно ховаємо вступний екран (кнопку)
            introOverlay.style.opacity = '0';

            // 2. ЗАПУСКАЄМО АНІМАЦІЮ ЗУМУ для першого відео, додаючи клас
            introVideoContainer.classList.add('zooming-out');
            
            // 3. Готуємо і показуємо друге (main) відео
            mainVideoContainer.style.display = 'block';
            mainVideo.play();
            setTimeout(() => {
                mainVideoContainer.style.opacity = '1';
            }, 100);

            // 4. Показуємо основний контент
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 100);

            // 5. Збільшуємо час очікування до 1500мс (відповідно до тривалості анімації в CSS)
            setTimeout(() => {
                introOverlay.style.display = 'none';
                introVideoContainer.style.display = 'none';
                if (introVideo) {
                    introVideo.pause();
                }
            }, 1500); // <-- ВАЖЛИВО: час тепер 1500ms
        });
    }

    // --- Анімація заголовку та кнопки в основному контенті ---
    const title = document.querySelector('.center-content h1');
    const button = document.querySelector('.center-content .btn');

    if (title && button && typeof gsap !== 'undefined') {
        // Створюємо послідовну анімацію
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Анімуємо заголовок як єдиний елемент
        tl.to(title, {
            duration: 2.0,
            opacity: 1,
            scale: 1,
            delay: 0.5
        })
        // Анімуємо кнопку
        .to(button, {
            duration: 1.5,
            opacity: 1,
            y: 0
        }, "-=1.5");
        
    } else {
         // Якщо GSAP не завантажився, просто показуємо елементи
         if(title) title.style.opacity = 1;
         if(button) button.style.opacity = 1;
    }

    // --- JavaScript для інтерактивного руху (Parallax ефект) ---
    const planetsContainer = document.querySelector('.planets-nav');

    if (planetsContainer) {
        document.addEventListener('mousemove', function(e) {
            // Розраховуємо позицію миші відносно центру екрану
            // e.clientX - позиція по горизонталі, window.innerWidth - ширина екрану
            const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
            const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

            // Встановлюємо максимальний кут нахилу
            const maxRotation = 10; // в градусах

            // Застосовуємо трансформацію до контейнера з планетами
            // rotateY залежить від позиції X миші, rotateX - від позиції Y
            planetsContainer.style.transform = `rotateY(${x * maxRotation}deg) rotateX(${-y * maxRotation}deg)`;
        });
    }
});