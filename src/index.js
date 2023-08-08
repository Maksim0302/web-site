// import $, { event } from "jquery";
import './styles/index.scss';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


// SWIPER
Swiper.use([Pagination]);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // Отключение Swiper при ширине экрана больше 1200px
    1098: {
      enabled: false,
      width: 400,
    },
  },
});

//БУРГЕР МЕНЮ
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function() {
  this.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("noscroll");
});
overlay.addEventListener('click', function(e) {
  if (e.target.matches('a')) {
    overlay.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.classList.remove("noscroll");
  }  
});

//АККОРДЕОН
let accordionButtons = document.getElementsByClassName('accordion__wrapper');  

for(let i = 0; i < accordionButtons.length; i++) {
  let plusActive = accordionButtons[i].classList.toggle('plus');
    accordionButtons[i].addEventListener('click',function(){  
      const $parent = this.parentElement
      if ($parent) {
        $parent.classList.toggle('accordion_active')
      }
      console.log(this.parentElement)
      
      this.classList.toggle('less'); 
      this.classList.toggle('plus');   
      this.classList.toggle('hide');
     
      let accordionList = this.nextElementSibling;
        this.classList.remove('hide')
        if(accordionList.style.display ==='flex'){
          accordionList.style.display = 'none';    
        }else{
          accordionList.style.display='flex';    
        }  
    });
};

