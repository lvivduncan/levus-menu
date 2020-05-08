// обгортка меню
const menu = document.querySelector('#levus-menu');

// обгортка для мобільного меню
const wrapper = document.createElement('div');
wrapper.className = 'levus-wrapper';

// міняємо тип меню при зміні розміру вікна
window.addEventListener('resize', changeMenu);

// визначаємо при завантаженні сторінки
document.addEventListener('DOMContentLoaded', changeMenu);

wrapper.addEventListener('click', showMenu);

// перемикаємо меню
function changeMenu(){
  if(window.innerWidth < 1200){
    menu.classList.remove('desktop');
    menu.classList.add('mobile');

    // додаємо елемент на сторінку
    menu.append(wrapper);
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