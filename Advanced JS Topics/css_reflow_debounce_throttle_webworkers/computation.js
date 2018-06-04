onmessage = (int) => {
    var progressPercent = 0;
    var intervalProgress;
    var intervalTime = int.data;
    
    computation = () => {
        intervalProgress = setInterval(progressbarLogic, intervalTime);
    };

    function progressbarLogic() {
        progressPercent = progressPercent + (intervalTime / 1000);
        progressbarPercentCalc();
    }

    function progressbarPercentCalc() {
        if ((Math.floor(progressPercent)) === 100) {
            clearInterval(intervalProgress);
        }

        postMessage(progressPercent);
    }

    computation();
}
