var slider_services = $('.services');
var slider_vacancy = $('.vacancy');


if (document.body.clientWidth < 577) {
  $(window).load(function() {
    slider_services.slick({
      dots: true,
    });
    slider_vacancy.slick({
      dots: true,
    })
  });
}

let menu_button = document.querySelector('.header-menu-button');
let menu_phone = document.querySelector('.header-menu-phone');
let menu = document.querySelector('.header-menu-nav');

menu_button.addEventListener('click', function() {
  menu_button.classList.toggle('header-menu-button_active');
  menu.classList.toggle('header-menu-nav_active');
  if (document.body.clientWidth < 577) {
    menu_phone.classList.toggle('header-menu-phone-active');
    menu.classList.add('hidden');
    if (menu_phone.classList.contains('header-menu-phone-active')) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
  }
});

