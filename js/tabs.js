(function () {
    const tabButtons = document.querySelectorAll('.js-tab-btn');
    const tabContent = document.querySelectorAll('.js-tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            tabButtons.forEach(el => {
                el.classList.remove('active');
            });
            tabContent.forEach(el => {
                el.classList.remove('active');
            });

            btn.classList.add('active');
            const tabIndex = Array.from(btn.parentElement.children).indexOf(btn);
            tabContent[tabIndex].classList.add('active');
        });
    });
})();