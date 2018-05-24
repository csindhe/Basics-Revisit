let Todo = (() => {
    var myMenu, oppMenu;

    init = () => {
        myMenu = document.querySelector(".menu");
        oppMenu = document.querySelector(".menu-icon");
        myEventListners();
    }

    function myEventListners(){
        myMenu.addEventListener("transitionend", OnTransitionEnd, false);
        oppMenu.addEventListener("click", toggleClassMenu, false);
        myMenu.addEventListener("click", toggleClassMenu, false);
    }

    function toggleClassMenu() {
        myMenu.classList.add("menu--animatable");   
        if(!myMenu.classList.contains("menu--visible")) {       
            myMenu.classList.add("menu--visible");
        } else {
            myMenu.classList.remove('menu--visible');       
        }   
    }
    
    function OnTransitionEnd() {
        myMenu.classList.remove("menu--animatable");
    }

    return {
        init: init
    }

})();

document.addEventListener("DOMContentLoaded", Todo.init);


