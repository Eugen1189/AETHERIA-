document.addEventListener('DOMContentLoaded', function() {
    // --- Код для меню (залишається без змін) ---
    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');

    if (menuToggle && fullscreenMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('is-active');
            fullscreenMenu.classList.toggle('is-active');
        });
    }

    // --- Код для перемикачів мови ---
    const langLinks = document.querySelectorAll('.lang-link');
    
    // Завантажуємо збережену мову при завантаженні сторінки
    const savedLang = localStorage.getItem('selectedLanguage') || 'UA';
    switchLanguage(savedLang);
    
    // Встановлюємо активний клас для збереженої мови
    langLinks.forEach(link => {
        if (link.textContent.trim() === savedLang) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Видаляємо активний клас з усіх посилань
            langLinks.forEach(l => l.classList.remove('active'));
            
            // Додаємо активний клас до натиснутого посилання
            this.classList.add('active');
            
            // Отримуємо вибрану мову
            const selectedLang = this.textContent.trim();
            
            // Зберігаємо вибрану мову
            localStorage.setItem('selectedLanguage', selectedLang);
            
            // Перемикаємо контент залежно від вибраної мови
            switchLanguage(selectedLang);
        });
    });

    // Функція перемикання мови
    function switchLanguage(lang) {
        const elementsToTranslate = {
            'UA': {
                'hero-title': 'AETHERIA',
                'hero-button': 'Забронювати столик',
                'concept-title': 'Нова ера гастрономії',
                'concept-text': 'AETHERIA — це не просто ресторан. Це подорож за межі звичайного, де футуристичні технології зустрічаються з високою кухнею. Кожна страва — це витвір мистецтва, створений, щоб дивувати та надихати. Ми використовуємо інноваційні техніки та найсвіжіші локальні інгредієнти, щоб подарувати вам досвід, який ви не забудете.',
                'menu-title': 'Гастрономічні сузір\'я',
                'contact-title': 'Наші координати',
                'footer-copyright': 'Всі права захищені.',
                'nav-home': 'Головна',
                'nav-menu': 'Меню',
                'nav-concept': 'Концепція',
                'nav-contact': 'Контакти'
            },
            'EN': {
                'hero-title': 'AETHERIA',
                'hero-button': 'Book a Table',
                'concept-title': 'New Era of Gastronomy',
                'concept-text': 'AETHERIA is not just a restaurant. It\'s a journey beyond the ordinary, where futuristic technologies meet haute cuisine. Every dish is a work of art, created to amaze and inspire. We use innovative techniques and the freshest local ingredients to give you an experience you will never forget.',
                'menu-title': 'Gastronomic Constellations',
                'contact-title': 'Our Coordinates',
                'footer-copyright': 'All rights reserved.',
                'nav-home': 'Home',
                'nav-menu': 'Menu',
                'nav-concept': 'Concept',
                'nav-contact': 'Contact'
            }
        };

        const translations = elementsToTranslate[lang];
        if (!translations) return;

        // Перекладаємо елементи
        Object.keys(translations).forEach(selector => {
            const element = document.querySelector(`[data-translate="${selector}"]`);
            if (element) {
                element.textContent = translations[selector];
            }
        });
    }

    // === НОВИЙ КОД: АНІМАЦІЯ ПРОКРУТКИ З GSAP ===

    // === ФІНАЛЬНА АДАПТИВНА АНІМАЦІЯ СКРОЛУ ===
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        // --- Анімація для комп'ютерів (екран ширший за 768px) ---
        "(min-width: 769px)": function() {
            const sections = gsap.utils.toArray('.content-block');
            let container = document.querySelector('.site-main');

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + (container.offsetWidth * sections.length)
                }
            });

            gsap.set(sections, { position: 'absolute', left: (i) => i * 100 + '%' });
            gsap.set(container, { display: 'flex', width: (sections.length * 100) + '%' });
        },

        // --- Анімація для мобільних (екран 768px і менше) ---
        "(max-width: 768px)": function() {
            const sections = gsap.utils.toArray('.content-block, .site-footer');

            sections.forEach(section => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 90%",
                        end: "top center",
                        scrub: 1,
                    },
                    opacity: 0,
                    y: 50
                });
            });
        }
    });

    // === НОВИЙ КОД: СТВОРЕННЯ 3D-СЦЕНИ З THREE.JS ===
    if (document.getElementById('bg-canvas')) {
        // 1. Налаштування сцени, камери та рендерера
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg-canvas'),
            alpha: true // Робимо фон рендерера прозорим
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        // 2. Створення геометрії та матеріалу для кристалів
        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.MeshStandardMaterial({
            color: 0xa9a9a9,
            metalness: 0.8,
            roughness: 0.2,
            transparent: true,
            opacity: 0.5
        });

        // 3. Створення групи кристалів
        const crystals = new THREE.Group();
        for (let i = 0; i < 100; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            mesh.position.set(x, y, z);
            const [rx, ry, rz] = Array(3).fill().map(() => Math.random() * Math.PI);
            mesh.rotation.set(rx, ry, rz);
            const scale = Math.random() * 2 + 0.5;
            mesh.scale.set(scale, scale, scale);
            crystals.add(mesh);
        }
        scene.add(crystals);

        // 4. Додавання освітлення
        const pointLight1 = new THREE.PointLight(0x8E78FF, 2);
        pointLight1.position.set(20, 20, 20);
        const pointLight2 = new THREE.PointLight(0x2A9DFF, 1.5);
        pointLight2.position.set(-20, -20, -20);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(pointLight1, pointLight2, ambientLight);

        // 5. Анімація
        function animate() {
            requestAnimationFrame(animate);
            crystals.rotation.x += 0.0005;
            crystals.rotation.y += 0.0005;
            renderer.render(scene, camera);
        }
        animate();

        // 6. Адаптивність
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }


    // === НОВИЙ КОД: ЛОГІКА ДЛЯ ГОЛОГРАФІЧНОГО МОДАЛЬНОГО ВІКНА ===
    const menuItems = document.querySelectorAll('.menu-item');
    const modal = document.getElementById('hologram-modal');
    
    if (menuItems.length > 0 && modal) {
        const modalClose = document.getElementById('hologram-close');
        const modalBackdrop = modal.querySelector('.hologram-backdrop');
        const modalImage = document.getElementById('hologram-image');
        const modalTitle = document.getElementById('hologram-title');
        const modalDescription = document.getElementById('hologram-description');
        const modalPrice = document.getElementById('hologram-price');

        const openModal = (item) => {
            modalImage.src = item.dataset.image;
            modalTitle.textContent = item.dataset.title;
            modalDescription.textContent = item.dataset.description;
            modalPrice.textContent = item.dataset.price;
            modal.classList.add('is-active');
        };

        const closeModal = () => {
            modal.classList.remove('is-active');
        };

        menuItems.forEach(item => {
            item.addEventListener('click', () => openModal(item));
        });

        modalClose.addEventListener('click', closeModal);
        modalBackdrop.addEventListener('click', closeModal);
    }

}); // ЦЕ ЗАКРИВАЮЧА ДУЖКА DOMContentLoaded