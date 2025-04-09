const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

if (menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener('click', () => {
        document.body.classList.toggle('show-mobile-menu');
    });

    menuCloseButton.addEventListener('click', () => menuOpenButton.click());
}

document.addEventListener('click', (event) => {
    const isClickInsideMenu = event.target.closest('.mobile-menu');
    const isClickOnMenuButton = event.target.closest('#menu-open-button');

    if (!isClickInsideMenu && !isClickOnMenuButton && document.body.classList.contains('show-mobile-menu')) {
        document.body.classList.remove('show-mobile-menu');
    }
});

const navLinks = document.querySelectorAll('.mobile-menu a');

if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('show-mobile-menu');
        });
    });
}
