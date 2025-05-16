function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./assets-site4/menu_white_36dp (1).svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./assets-site4/close_white_36dp.svg";
    }
}