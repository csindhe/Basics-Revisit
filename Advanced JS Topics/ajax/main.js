var Todo = (() => {
    var httpRequest;

    init = () => {
        bindEvents();
    }

    render = () => {

    }

    bindEvents = () => {
        bindSubmitButton();
    }

    function bindSubmitButton() {
        document.getElementById("ajax-btn").addEventListener("click", () => {
            //submitAjaxRequest();
            fetchAjaxRequest();
        });
    }

    fetchAjaxRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            cache: 'no-cache',
            credentials: 'same-origin',
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer'
        })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            processResponse(data, true);
        })
        .catch((data) => {
            document.getElementById("ap-processor").innerText = "Status Code not equal to 200";
        })
        
    }

    submitAjaxRequest = () => {
        httpRequest = new XMLHttpRequest(); //Create a request
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
        // httpRequest.open('POST', 'test.php', true);
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpRequest.send('userName=Lord Krishna');
    };

    alertContents = () => {
        try{
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if(httpRequest.status === 200){
                    processResponse(httpRequest.responseText, false);
                }
                else{
                    document.getElementById("ap-processor").innerText = "Status Code not equal to 200";
                }
            }  
        }
        catch(e){
            document.getElementById("ap-processor").innerText = e.description;
        }
    }

    function processResponse(response, isFetch) {
        var sHTML = "";
        var responseJSON;
        if(!isFetch){
            responseJSON = JSON.parse(response);
        }
        else{
            responseJSON = response;
        }
        for(key in responseJSON){
            sHTML = sHTML + `
                <div style="text-align: left;">
                    <strong>${key + ":"}</strong>
                    <span>${responseJSON[key]}</span>
                </div>
            `;
        }
        document.getElementById("ap-processor").innerHTML = sHTML;
    }

    return {
        init: init,
        render: render,
        bind: bindEvents
    }

})();

document.addEventListener("DOMContentLoaded", Todo.init);