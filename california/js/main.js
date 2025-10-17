(function () {
    let swiper;

    function initSwiper() {
        swiper = new Swiper('.testimonials__slider', {
            spaceBetween: 0,
            slidesPerView: 1,
            centeredSlides: true,
            navigation: {
                nextEl: '.testimonials__next',
                prevEl: '.testimonials__prev',
            },
            allowTouchMove: true,
            allowSlideNext: true,
            allowSlidePrev: true,
        });

        const colors = ['#DCE5E2', '#ebe5b7ff', '#ADD8E6'];

        swiper.on('slideChange', function () {
            const heroInner = document.querySelector('.hero__inner');
            heroInner.style.backgroundColor = colors[swiper.realIndex % colors.length];
            updateNavigationButtons();
        });

        // Устанавливаем начальный цвет фона
        const heroInner = document.querySelector('.hero__inner');
        heroInner.style.backgroundColor = colors[0];

        const customPaginationItems = document.querySelectorAll('.custom-pagination-item');

        function updateCustomPagination(currentSlide) {
            customPaginationItems.forEach((item, index) => {
                if (index === currentSlide) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        swiper.on('slideChange', function () {
            updateCustomPagination(this.realIndex);
        });

        customPaginationItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                swiper.slideTo(index);
            });
        });

        updateCustomPagination(swiper.realIndex);

        function updateNavigationButtons() {
            // Эта функция теперь не нужна для блокировки, так как Swiper сам управляет состоянием
        }
    }

    // Инициализация после загрузки DOM
    document.addEventListener('DOMContentLoaded', function () {
        initSwiper();

        // Меню Solutions
        const solutionsToggle = document.querySelector('.solutions-toggle');
        const solutionsDropdown = document.querySelector('.solutions-dropdown');

        if (solutionsToggle && solutionsDropdown) {
            solutionsToggle.addEventListener('click', function (event) {
                event.preventDefault();
                solutionsDropdown.classList.toggle('active');
            });

            document.addEventListener('click', function (event) {
                if (event.target !== solutionsToggle &&
                    !solutionsToggle.contains(event.target) &&
                    !solutionsDropdown.contains(event.target)) {
                    solutionsDropdown.classList.remove('active');
                }
            });
        }

        // Модалка поиска - ИСПРАВЛЕННЫЙ КОД
        const searchIcon = document.querySelector('.header__actions a:nth-child(2)');
        const searchModal = document.querySelector('.search-modal');
        const searchModalClose = document.querySelector('.search-modal__close');
        let isSearchOpen = false;

        if (searchIcon && searchModal && searchModalClose) {
            searchIcon.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (isSearchOpen) {
                    // Закрываем если уже открыто
                    searchModal.classList.remove('open');
                    isSearchOpen = false;
                } else {
                    // Открываем если закрыто
                    searchModal.classList.add('open');
                    isSearchOpen = true;

                    // Фокусируемся на поле ввода
                    setTimeout(() => {
                        const searchInput = document.querySelector('.search-modal__input');
                        if (searchInput) searchInput.focus();
                    }, 100);
                }
            });

            searchModalClose.addEventListener('click', function (event) {
                event.stopPropagation();
                searchModal.classList.remove('open');
                isSearchOpen = false;
            });

            // Закрытие по клику вне модалки
            document.addEventListener('click', function (event) {
                if (isSearchOpen &&
                    !searchModal.contains(event.target) &&
                    event.target !== searchIcon &&
                    !searchIcon.contains(event.target)) {
                    searchModal.classList.remove('open');
                    isSearchOpen = false;
                }
            });

            // Закрытие по ESC
            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape' && isSearchOpen) {
                    searchModal.classList.remove('open');
                    isSearchOpen = false;
                }
            });

            // Предотвращаем закрытие при клике внутри модалки
            searchModal.addEventListener('click', function (event) {
                event.stopPropagation();
            });
        }

         // Подстановка текста в поле поиска
        const buttons = document.querySelectorAll('[data-keyword]'); // Выбираем все элементы с атрибутом data-keyword
        const input = document.querySelector('.search__input');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                input.value = this.dataset.keyword;
            });
        });

        // Бургер-меню
        function burgerInit(e) {
            const burgerIcon = e.target.closest('.burger-icon');
            const burgerNavLink = e.target.closest('.nav__link');

            if (!burgerNavLink && !burgerIcon) return;

            if (document.documentElement.clientWidth > 1000) return;

            // Переключаем класс для body
            document.body.classList.toggle('body--opened-menu');

            // Переключаем класс для навигации
            const nav = document.querySelector('.nav');
            if (nav) {
                nav.classList.toggle('active');
            }
        }

        document.addEventListener('click', burgerInit);
    });
})();