const back = document.querySelector('.intro .navbar .navlist .back');

const mobile_menu = document.querySelector('.intro .navbar .navlist ul');

const intro = document.querySelector('.intro.container');

back = document.addEventListener('click', ()=>{back.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});