(function () {
    const body = document.body;
    const burger = document.querySelector('.js-burger');
    const mobileMenu = document.querySelector('.js-mobile-menu');
    const mobileBg = document.querySelector('.js-mobile-bg');

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('active');
        body.classList.toggle('body-lock');
        mobileBg.classList.toggle('active')
    })

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && e.target !== burger) {
            mobileMenu.classList.remove('active');
            burger.classList.remove('active');
            body.classList.remove('active');
            body.classList.remove('body-lock');
            mobileBg.classList.remove('active');
        }
    });
})();