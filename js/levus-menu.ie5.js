{
    'use strict';

    var menu = document.querySelector('#levus-menu');

    if (menu != null) {
        var changeMenu = function changeMenu() {
            if (window.innerWidth < 1200) {
                menu.classList.remove('desktop');
                menu.classList.add('mobile');
            } else {
                menu.classList.remove('mobile');
                menu.classList.add('desktop');
            }
        };

        var showMenu = function showMenu() {
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            } else {
                menu.classList.add('show');
            }
        };

        var showUl = function showUl(e) {
            e.stopPropagation();
            e.target.classList.contains('parent') ? this.classList.toggle('show') : '';
        };

        var wrapper = document.createElement('div');
        wrapper.className = 'levus-wrapper';

        var lis = menu.querySelectorAll('li');

        lis.forEach(function(li) {
            return li.children.length > 1 ? li.className = 'parent' : '';
        });

        window.addEventListener('resize', changeMenu);

        changeMenu();

        menu.append(wrapper);

        wrapper.addEventListener('click', showMenu);

        lis.forEach(function(li) {
            li.addEventListener('click', showUl);
        });
    }
}