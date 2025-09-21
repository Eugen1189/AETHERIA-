<?php get_header(); ?>

<main class="site-main">
    <section class="hero-scene">
        <canvas id="bg-canvas"></canvas>

        <div class="hero-content">
            
            <svg class="aetheria-logo" viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg">
                <text class="aetheria-text" text-anchor="middle" x="50%" y="80%">AETHERIA</text>
            </svg>

            <a href="#" class="btn-book">Забронювати столик</a>

        </div>
    </section>

    <section class="content-block" id="concept">
        <div class="content-container">
            <h2>Нова ера гастрономії</h2>
            <p>AETHERIA — це не просто ресторан. Це подорож за межі звичного, де футуристичні технології зустрічаються з високою кухнею. Кожна страва — це витвір мистецтва, створений, щоб дивувати та надихати. Ми використовуємо інноваційні техніки та найсвіжіші локальні інгредієнти, щоб подарувати вам досвід, який ви не забудете.</p>
        </div>
    </section>

    <section class="content-block" id="menu">
        <div class="content-container">
            <h2>Гастрономічні сузір'я</h2>
            
            <nav class="menu-categories">
                <a href="#starters" class="category-link">Закуски</a>
                <a href="#main-courses" class="category-link">Основні страви</a>
                <a href="#desserts" class="category-link">Десерти</a>
            </nav>

            <div class="menu-listings">
                <div id="starters" class="menu-category">
                    <h3>Закуски</h3>
                    <ul class="menu-items">
                        <li class="menu-item">
                            <div class="menu-item-summary"><span>Сфера з рідкого азоту з ароматом лісу</span><span>450₴</span></div>
                            <div class="menu-item-details">
                                <img src="https://via.placeholder.com/300x200" alt="Сфера з рідкого азоту">
                                <p>Кріо-сфера, що тане в роті, вивільняючи концентрований аромат вранішнього лісу та диких ягід.</p>
                            </div>
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-summary"><span>Марсіанський тартар з космічної яловичини</span><span>620₴</span></div>
                            <div class="menu-item-details">
                                <img src="https://via.placeholder.com/300x200" alt="Марсіанський тартар">
                                <p>Тартар з яловичини, витриманої в умовах низької гравітації, з додаванням вулканічної солі червоної планети.</p>
                            </div>
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-summary"><span>Невагомий мус з екзотичних грибів</span><span>380₴</span></div>
                            <div class="menu-item-details">
                                <img src="https://via.placeholder.com/300x200" alt="Невагомий мус">
                                <p>Повітряний мус з рідкісних грибів, що ростуть тільки в умовах нульової гравітації космічних станцій.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="main-courses" class="menu-category">
                    <h3>Основні страви</h3>
                    <ul class="menu-items">
                        <li class="menu-item">
                            <div class="menu-item-summary"><span>Риба "Соляріс" під соусом з місячних квітів</span><span>950₴</span></div>
                            <div class="menu-item-details">
                                <img src="https://via.placeholder.com/300x200" alt="Риба Соляріс">
                                <p>Філе риби, вирощеної в акваріумах з місячною водою, під соусом з квітів, що цвітуть тільки при світлі Землі.</p>
                            </div>
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-summary"><span>Стейк "Оріон" з попелом астероїда</span><span>1200₴</span></div>
                            <div class="menu-item-details">
                                <img src="https://via.placeholder.com/300x200" alt="Стейк Оріон">
                                <p>Преміум стейк з яловичини, приготований з використанням попелу справжнього астероїда з сузір'я Оріона.</p>
                            </div>
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-summary"><span>Кристалічна паста з чорнилами катрана</span><span>880₴</span></div>
                            <div class="menu-item-details">
                                <img src="https://via.placeholder.com/300x200" alt="Кристалічна паста">
                                <p>Паста з кристалічних зерен, зварена в чорнилах гігантського космічного катрана з глибин Всесвіту.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="desserts" class="menu-category">
                    <h3>Десерти</h3>
                    <ul class="menu-items">
                        <li class="menu-item">
                            <div class="menu-item-summary"><span>Сублімоване морозиво "Комета Галлея"</span><span>400₴</span></div>
                            <div class="menu-item-details">
                                <img src="https://via.placeholder.com/300x200" alt="Морозиво Комета Галлея">
                                <p>Морозиво, приготоване методом сублімації, що відтворює смак льоду з хвоста легендарної комети Галлея.</p>
                            </div>
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-summary"><span>Їстівний перламутр з туманності Андромеди</span><span>550₴</span></div>
                            <div class="menu-item-details">
                                <img src="https://via.placeholder.com/300x200" alt="Перламутр Андромеди">
                                <p>Делікатний десерт з перламутрових кристалів, вирощених в умовах, що імітують атмосферу туманності Андромеди.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>