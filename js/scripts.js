/*!
* Start Bootstrap - One Page Wonder v6.0.5 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)');
const menuToggle = document.getElementById('navbarResponsive');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach(function (l) {
    l.addEventListener('click', function () {
        if (menuToggle.classList.contains('show')) {
            bsCollapse.toggle();
        }
    })
});