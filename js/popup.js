(function () {
        const popupOpenButtons = document.querySelectorAll('.js-popup-open-btn');

        popupOpenButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const selector = btn.dataset.target;
                const popup = document.querySelector(selector);
                popup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            })
        })

        const popups = document.querySelectorAll('.js-popup');

        popups.forEach(popup => {
            const closeBtn = popup.querySelector('.js-close-btn');
            closeBtn.addEventListener('click', function () {
                popup.style.display = 'none';
                document.body.style.overflow = 'auto';
            })

            popup.addEventListener('click', e => {
                if (e.target === popup) {
                    popup.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            })
        })
    }
)();