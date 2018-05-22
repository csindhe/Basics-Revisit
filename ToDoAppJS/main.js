import { promiseMessageAPI } from './promiseMessageAPI.js';
import { SocketAPI } from './webSocketAPI.js';

let Todo = (() => {
    let elemId = "result-container";
    let resultElemId;
    let todoResultList = ["Initial Sample Todo Item"];

    function init() {
        resultElemId = document.getElementById("resultcontainer");
        render(todoResultList);
        bindEvents();
        promiseCheck();
    }

    function bindEvents() {
        bindAdd();
        bindSearch();
        bindReset();
    }

    function render(list) {
        let inner_html = templateGen(list);
        if(!inner_html){
            inner_html=`<h2>Great You have a clean slate now!!</h2>`
        }
        resultElemId.innerHTML = inner_html;
        bindRemoveItem(list);
    }

    function templateGen(list) {
        let template = '';
        let i = 0;
        for(let item of list){
            i++; 
            template += `<div class='todo-item' id=${'todo-item-'+i} style="display: flex;">
                            <div class="item" style="width: 100%; flex-basis: 90%;">${item}</div>
                            <div style="width: 100%; flex-basis: 10%;" parent=${'todo-item-'+i}><button class='remove-item'>X</button></div>
                         </div><br>`;
        }
        return template;
    }

    function bindAdd() {
        let addBtnElemId = document.getElementById("todo-input-btn");
        addBtnElemId.addEventListener("click", () => {
            let elemId = document.getElementById("todo-input-data");
            let inputValue = elemId.value;    
            if(inputValue) {
                todoResultList.push(inputValue);
                render(todoResultList);
                elemId.value = "";
            }        
        });
    }

    function bindSearch() {
        let filterList = [];
        let elemId = document.getElementById("todo-search-data");
        elemId.addEventListener("keyup", (event)=> {
            let searchValue = event.target.value;
            if(searchValue){
                filterList = todoResultList.filter((list) => {
                    return (list.match(searchValue)) ? true : false;
                });
                render(filterList);
            }
            else {
                render(todoResultList);
            }
        });
    }

    function bindReset() {
        let searchResetBtnId = document.getElementById("todo-search-btn");
        let elemId = document.getElementById("todo-search-data");
        searchResetBtnId.addEventListener("click", () => {
            render(todoResultList);
            elemId.value = "";
        });
    }

    function bindRemoveItem(list) {
        for(let i = 0; i< list.length; i++){
            let elem$Id = "todo-item-"+(i+1);
            let elemId = document.querySelector('[parent=todo-item-'+ (i+1) +']');
            if(elemId){
                elemId.addEventListener("click", () => {
                    let elemItemId = document.getElementById(elem$Id);
                    let itemVal = elemItemId.children[0].innerText;
                    if(itemVal){
                        todoResultList = list.filter((item) => {
                            return (itemVal === item) ? false : true;
                        })
                        render(todoResultList);
                    }
                });
            }
        }
        
    }

    function promiseCheck() {
        const promiseMessage = promiseMessageAPI.getServerMessage();
        promiseMessage.then((resp) => {
            let successCont = document.getElementsByClassName("success-container");
            successCont[0].innerText = resp.toString();
        }, (error) => {
            let errorCont = document.getElementsByClassName("success-container");
            errorCont[0].innerText = error.toString();
        });
    }

    return {
        init: init,
        bind: bindEvents,
        render: render
    }

})();

document.addEventListener("DOMContentLoaded", Todo.init);

