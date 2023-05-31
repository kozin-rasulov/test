const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'),
    hamburger.classList.add('d-none');
});
close.addEventListener('click', () => {
    menu.classList.remove('active'),
    hamburger.classList.remove('d-none');
});

const percents = document.querySelectorAll('.skills__progress-percent'),
      lines = document.querySelectorAll('.skills__progress-line span');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
