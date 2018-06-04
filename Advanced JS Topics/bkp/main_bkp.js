let Todo = (() => {
    var myMenu, oppMenu;

    init = () => {
        myMenu = document.querySelector(".menu");
        oppMenu = document.querySelector(".menu-icon");
        myEventListners();
        //Read all collapsed positions.
        collectProperties_(this.collapsedPositions_);
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

    getBoundingClientRect = {
        top: 178,
        left: 201,
        width: 234,
        height: 240,
        bottom: 418,
        right: 435
    }

    return {
        init: init,
        collectProperties_: function(target) {
            var part, parts = Object.keys(this.elements_);
            for(var p = 0; p < parts.length; p++){
                part = parts[p];
                target[part] = this.elements_[part].getBoundingClientRect();
                target[part].opacity = parseFloat(window.getComputedStyle(
                    this.elements_[part]).opacity);
            }
        }
    }

})();

var dataSortWorker = new Worker('sort-worker.js');
dataSortWorker.postMessage(datatoSort);

dataSortWorker.addEventListener('message', (evt) => {
    var sortedData = evt.data;
    //update on the screen.....
});


document.addEventListener("DOMContentLoaded", Todo.init);


