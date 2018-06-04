var Todo = (() => {
    var myWorker;

    init = () => {
        bindEvents();
    }

    render = () => {

    }

    bindEvents = () => {
        bindProgressBtn();
    }

    bindProgressBtn = () => {
        document.getElementById("progressbarbtn").addEventListener("click", () => {
            triggerProgress();
        });
    }

    triggerProgress = () => {
        myWorker = new Worker('./computation.js');
        myWorker.postMessage(10);
        //with debouncing
        myWorker.addEventListener("message", debounce(function(e){
            console.log("Debounced " + Math.round(e.data));
        }, 1000));
        //with throttle
        myWorker.addEventListener("message", throttle(function(e){
            console.log("Throttled " + Math.round(e.data));
            requestAnimationFrame(() => {
                updateUI(Math.round(e.data));
            });
        }, 10000));
    }

    function updateUI(arg) {
        document.getElementById("progressbarIndicator").innerText = arg + "%";
        document.getElementById("progressbarInd-div").style.width = arg + "%";
    }

    const debounce = (func, delay) => {
        let inDebounce;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => func.apply(context, args), delay);
        }
    }

    const throttle = (func, limit) => {
        let lastFunc;
        let lastRan;
        return function() {
            const args = arguments;
            const context = this;
            if(!lastRan){
                func.apply(context, args);
                lastRan = Date.now();
            }
            else{
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    if((Date.now() - lastRan) >= limit){
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        }
    }

    return {
        init: init,
        bind: bindEvents,
        render: render
    }

})();

document.addEventListener("DOMContentLoaded", Todo.init);

