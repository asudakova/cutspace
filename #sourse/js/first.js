const header = document.querySelector('.header');
window.onscroll = () => {
   if (window.pageYOffset > 0) {
      header.classList.add('header_active');
   } else {
      header.classList.remove('header_active')
   }
}

const anchors = document.querySelectorAll('.anchors-scroll');
const headerHeight = header.clientHeight;
anchors.forEach(anchor => {
   anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const elName = this.getAttribute('href');
      const target = document.querySelector(elName).offsetTop - headerHeight - 30;
      window.scrollTo({
         top: target,
         behavior: 'smooth'
      });
      if (burgerIcon.classList.contains('active')) {
         menu.classList.remove('active');
         burgerIcon.classList.remove('active');
         document.body.classList.remove('lock');
      }
   })
})

const burgerIcon = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');
burgerIcon.addEventListener('click', () => {
   burgerIcon.classList.toggle('active');
   menu.classList.toggle('active');
   document.body.classList.toggle('lock');
})
