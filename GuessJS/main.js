let guessGame = (() => {
    let data = {
        guessedString: "",
        guessResult: "",
        guessGuage: ""
    };
    let guessCount = 0;
    let guessHistory = [];
    let numberToGuess = 0;

    init = () => {
        generateRandomNumber(100);
        initialData();
        render();
        bindevent();
    };

    bindevent = () => {
        bindSubmitGuess();
        bindInputGuess();
    };

    render = () => {
        var Template = templateGen();
        document.getElementsByClassName("resultParas")[0].innerHTML = Template;
    };

    var initialData = () => {
        data.guessedString = "Nothing";
        data.guessGuage = "Nothing";
        data.guessResult = "Nothing";
    };

    var generateRandomNumber = function (max) {
        numberToGuess = Math.floor(Math.random() * Math.floor(max));
        console.log(numberToGuess);
    };

    function templateGen() {
        let templateString = `
                <p class="guesses">Your have guessed till now : ${data.guessedString}</p>
                <p class="lastResult">Your guess was : ${data.guessResult}</p>
                <p class="lowOrHi">Your guess is : ${data.guessGuage}</p>
        `;
        return templateString;
    };

    function bindSubmitGuess() {
        let submitBtn = document.getElementsByClassName("guessSubmit");
        submitBtn[0].addEventListener("click", () => {
            guessCalculator();
            let guessInputElemId = document.getElementById("guessField");
            guessInputElemId.value = "";
            submitBtn[0].disabled = true;
        });
    };

    function bindInputGuess() {
        let guessInput = document.getElementById("guessField");
        guessInput.addEventListener("keyup", (event) => {
            let inputVal = event.target.value;
            let submitBtn = document.getElementsByClassName("guessSubmit");
            if(parseInt(inputVal) > 100 || parseInt(inputVal) < 1 || inputVal === "" || guessCount > 10){
                submitBtn[0].disabled = true;
            }
            else{
                submitBtn[0].disabled = false;
            }
        });
    };

    var guessCalculator = () => {
        iterateGuessCount();
        addGuessValueToList();
        checkGuessValue();
        render();
    };

    function iterateGuessCount() {
        guessCount++;
        guessInputManipulator();
    };

    function guessInputManipulator() {
        let guessInput = document.getElementById("guessField");
        if(guessCount === 10){
            guessInput.disabled = true;
        }
    };

    function addGuessValueToList() {
        guessHistory[guessCount - 1] = document.getElementById("guessField").value; 
        data.guessedString = "";
        guessHistory.forEach((item) => {
            if(!data.guessedString) {
                data.guessedString = item;
            }
            else{
                data.guessedString += ", " + item;
            }
        });
    };

    function checkGuessValue() {
        let guessVal = document.getElementById('guessField').value;
        if(parseInt(guessVal) === parseInt(numberToGuess)) {
            data.guessResult = "Success";
            data.guessGuage = "Equal";
        }
        else {
            data.guessResult = "Wrong";
            checkGuessGuage(guessVal);
        }
    };

    function checkGuessGuage(guessVal) {
        let guage = "";
        if(guessVal < numberToGuess) {
            data.guessGuage = "Low";
        }
        else{
            data.guessGuage = "High";
        }
    };

    return {
        init: init,
        bind: bindevent,
        render: render
    }

})();

//Pass the max limit within which your API should limit itself before generating random number
document.addEventListener("DOMContentLoaded", guessGame.init);