document.addEventListener('DOMContentLoaded', function() {
    console.log(AETHERIA_ASSETS); // <<<< ДОДАЙТЕ ЦЕЙ РЯДОК ДЛЯ ПЕРЕВІРКИ
    
    if (typeof THREE === 'undefined') {
        console.error('Three.js не завантажений!');
        return;
    }

    // --- Базові налаштування сцени ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector('#bg-canvas');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(15);

    // --- Фон з зірками ---
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // --- Освітлення сцени ---
    const pointLight = new THREE.PointLight(0xffffff, 200);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    
    // --- СТВОРЮЄМО ПЛАНЕТИ (НАДІЙНИЙ МЕТОД З "CALLBACK") ---
    const textureLoader = new THREE.TextureLoader();
    let menuPlanet, aboutPlanet, contactsPlanet; // Оголошуємо змінні тут

    // Планета "Меню"
    textureLoader.load(
        AETHERIA_ASSETS.planetMenu,
        function (texture) { // Ця функція виконається ПІСЛЯ завантаження
            menuPlanet = new THREE.Mesh(
                new THREE.SphereGeometry(3, 32, 32),
                new THREE.MeshStandardMaterial({ map: texture, metalness: 0.1, roughness: 0.7 })
            );
            menuPlanet.position.set(-10, 2, 0);
            scene.add(menuPlanet);
        },
        undefined,
        (err) => console.error('Помилка завантаження текстури Меню:', err)
    );

    // Планета "Про нас"
    textureLoader.load(
        AETHERIA_ASSETS.planetAbout,
        function (texture) { // Ця функція виконається ПІСЛЯ завантаження
            aboutPlanet = new THREE.Mesh(
                new THREE.SphereGeometry(2, 32, 32),
                new THREE.MeshStandardMaterial({ map: texture, metalness: 0.1, roughness: 0.7 })
            );
            aboutPlanet.position.set(12, -4, -5);
            scene.add(aboutPlanet);
        },
        undefined,
        (err) => console.error('Помилка завантаження текстури Про нас:', err)
    );

    // Планета "Контакти"
    textureLoader.load(
        AETHERIA_ASSETS.planetContacts,
        function (texture) { // Ця функція виконається ПІСЛЯ завантаження
            contactsPlanet = new THREE.Mesh(
                new THREE.SphereGeometry(1.5, 32, 32),
                new THREE.MeshStandardMaterial({ map: texture, metalness: 0.1, roughness: 0.7 })
            );
            contactsPlanet.position.set(5, 5, -10);
            scene.add(contactsPlanet);
        },
        undefined,
        (err) => console.error('Помилка завантаження текстури Контакти:', err)
    );

    // --- Інтерактивність (реакція на мишу) ---
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // --- Анімація ---
    const clock = new THREE.Clock();
    function animate() {
        const elapsedTime = clock.getElapsedTime();
        
        // Обертання планет (перевіряємо, чи вони вже створені)
        if (menuPlanet) menuPlanet.rotation.y = .1 * elapsedTime;
        if (aboutPlanet) aboutPlanet.rotation.y = .15 * elapsedTime;
        if (contactsPlanet) contactsPlanet.rotation.y = .2 * elapsedTime;

        // --- ПОВЕРТАЄМО РУХ ЗА МИШЕЮ ---
        // Плавний рух фону з зірками вслід за курсором
        if (particlesMesh) {
            particlesMesh.rotation.y += ( ( mouseX - window.innerWidth / 2 ) * 0.00005 - particlesMesh.rotation.y ) * 0.05;
            particlesMesh.rotation.x += ( ( mouseY - window.innerHeight / 2 ) * 0.00005 - particlesMesh.rotation.x ) * 0.05;
        }

        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    // --- Адаптація під розмір вікна ---
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});