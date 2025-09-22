<?php get_header(); ?>

<main class="site-main">
    <section class="hero-scene">
        <canvas id="bg-canvas"></canvas>

        <div class="hero-content">
            
            <svg class="aetheria-logo" viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg">
                <text class="aetheria-text" text-anchor="middle" x="50%" y="80%" data-translate="hero-title">AETHERIA</text>
            </svg>

            <a href="#" class="btn-book" data-translate="hero-button">Забронювати столик</a>

        </div>
    </section>

    <section class="content-block" id="concept">
        <div class="content-container">
            <h2 data-translate="concept-title">Нова ера гастрономії</h2>
            <p data-translate="concept-text">AETHERIA — це не просто ресторан. Це подорож за межі звичного, де футуристичні технології зустрічаються з високою кухнею. Кожна страва — це витвір мистецтва, створений, щоб дивувати та надихати. Ми використовуємо інноваційні техніки та найсвіжіші локальні інгредієнти, щоб подарувати вам досвід, який ви не забудете.</p>
        </div>
    </section>

    <section class="content-block" id="menu">
        <div class="content-container">
            <h2 data-translate="menu-title">Гастрономічні сузір'я</h2>
            
            <nav class="menu-categories">
                <a href="#starters" class="category-link">Закуски</a>
                <a href="#main-courses" class="category-link">Основні страви</a>
                <a href="#desserts" class="category-link">Десерти</a>
            </nav>

            <ul class="menu-items">
                <li class="menu-item" 
                    data-title="Сфера з рідкого азоту з ароматом лісу"
                    data-price="450₴"
                    data-image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center"
                    data-description="Кріо-сфера, що тане в роті, вивільняючи концентрований аромат вранішнього лісу та диких ягід.">
                    <span>Сфера з рідкого азоту з ароматом лісу</span><span>450₴</span>
                </li>
                <li class="menu-item"
                    data-title="Марсіанський тартар з космічної яловичини"
                    data-price="620₴"
                    data-image="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center"
                    data-description="Тартар з яловичини, витриманої в умовах низької гравітації, з додаванням вулканічної солі червоної планети.">
                    <span>Марсіанський тартар з космічної яловичини</span><span>620₴</span>
                </li>
                <li class="menu-item"
                    data-title="Невагомий мус з екзотичних грибів"
                    data-price="380₴"
                    data-image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
                    data-description="Повітряний мус з рідкісних грибів, що ростуть тільки в умовах нульової гравітації космічних станцій.">
                    <span>Невагомий мус з екзотичних грибів</span><span>380₴</span>
                </li>
                <li class="menu-item"
                    data-title="Риба Соляріс під соусом з місячних квітів"
                    data-price="950₴"
                    data-image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&crop=center"
                    data-description="Філе риби, вирощеної в акваріумах з місячною водою, під соусом з квітів, що цвітуть тільки при світлі Землі.">
                    <span>Риба Соляріс під соусом з місячних квітів</span><span>950₴</span>
                </li>
                <li class="menu-item"
                    data-title="Стейк Оріон з попелом астероїда"
                    data-price="1200₴"
                    data-image="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=center"
                    data-description="Преміум стейк з яловичини, приготований з використанням попелу справжнього астероїда з сузір'я Оріона.">
                    <span>Стейк Оріон з попелом астероїда</span><span>1200₴</span>
                </li>
                <li class="menu-item"
                    data-title="Кристалічна паста з чорнилами катрана"
                    data-price="880₴"
                    data-image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop&crop=center"
                    data-description="Паста з кристалічних зерен, зварена в чорнилах гігантського космічного катрана з глибин Всесвіту.">
                    <span>Кристалічна паста з чорнилами катрана</span><span>880₴</span>
                </li>
                <li class="menu-item"
                    data-title="Сублімоване морозиво Комета Галлея"
                    data-price="400₴"
                    data-image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center"
                    data-description="Морозиво, приготоване методом сублімації, що відтворює смак льоду з хвоста легендарної комети Галлея.">
                    <span>Сублімоване морозиво Комета Галлея</span><span>400₴</span>
                </li>
                <li class="menu-item"
                    data-title="Їстівний перламутр з туманності Андромеди"
                    data-price="550₴"
                    data-image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
                    data-description="Делікатний десерт з перламутрових кристалів, вирощених в умовах, що імітують атмосферу туманності Андромеди.">
                    <span>Їстівний перламутр з туманності Андромеди</span><span>550₴</span>
                </li>
            </ul>
        </div>
    </section>

    <section class="content-block" id="contact">
        <div class="content-container">
            <h2 data-translate="contact-title">Наші координати</h2>
            <div class="contact-wrapper">
                <div class="contact-info">
                    <h3>AETHERIA</h3>
                    <p>
                        Вулиця НебесноїСфери, 1<br>
                        Київ, Україна, 01001
                    </p>
                    <p>
                        <strong>Бронювання:</strong><br>
                        <a href="tel:+380991234567">+38 (099) 123-45-67</a>
                    </p>
                    <p>
                        <strong>Години роботи:</strong><br>
                        Щодня, 18:00 – 23:59
                    </p>
                </div>
                <div class="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.521528341495!2d30.52113681596593!3d50.45014909516613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50ffa4ef8d%3A0x86337426b31c944d!2z0JzQsNC70LPQsNC90YHRjNC60LAg0J3QtdCy0LDRgNGI0LDRjNC80LDRjA!5e0!3m2!1sru!2sua!4v1663801129329!5m2!1sru!2sua" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>