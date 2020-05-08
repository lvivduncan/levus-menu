// обгортка меню
const menu = document.querySelector('#levus-menu');

/* // list items
const lis = menu.querySelectorAll('li'); */

// міняємо тип меню при зміні розміру вікна
window.addEventListener('resize', changeMenu);

// визначаємо при завантаженні сторінки
document.addEventListener('DOMContentLoaded', changeMenu);

menu.addEventListener('click', showMenu);

/* lis.forEach(li => {
  li.addEventListener('click', showUl);
}); */

// перемикаємо меню
function changeMenu(){
  if(window.innerWidth < 1200){
    menu.classList.remove('desktop');
    menu.classList.add('mobile');
  } else {
    menu.classList.remove('mobile');
    menu.classList.add('desktop');
  }  
}

// показуємо/ховаємо мобільне меню
function showMenu(){
  if(menu.classList.contains('show')){
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
}

/* // розгорнути вкладене меню
function showUl(e){
  e.preventDefault();
} */