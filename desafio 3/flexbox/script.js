// function menuShow() {
//     let menuMobile = document.querySelector('.mobile-menu');
//     if (menuMobile.classList.contains('open')) {
//         menuMobile.classList.remove('open');
//         document.querySelector('.icon').src = "../flexbox/img/menu_white_36dp.svg";
//     } else {
//         menuMobile.classList.add('open');
//         document.querySelector('.icon').src = "../flexbox/img/close_white_36dp.svg";
//     }
// }

function toggleMenu() {
    // let navList = document.querySelector('.nav-list');
    // navList.classList.toggle('open');

    let navList = document.querySelector('.nav-list');
    if (navList.classList.contains('open')) {
        navList.classList.toggle('open');
        navList.classList.remove('open');
        document.querySelector('.icon').src = "../flexbox/img/menu_white_36dp.svg";
    } else {
        navList.classList.add('open');
        document.querySelector('.icon').src = "../flexbox/img/close_white_36dp.svg";
    }
}
