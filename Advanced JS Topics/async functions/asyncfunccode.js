function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000)
    });
}

function resolveAfterImmediate() {
    return new Promise(resolve => {
        resolve('resolved');
    });
}

async function asyncCall() {
    console.log("Calling");
    var result1 = await resolveAfterImmediate();
    console.log(result1);
    var result = await resolveAfter2Seconds();
    console.log(result);
}

//asyncCall();

var resolveAfterTwoSeconds = function() {
    console.log("Starting Slow Promise");
    return new Promise(resolve => {
        setTimeout(() => {
           resolve(20);
           console.log("Slow Promise is done");  
        }, 2000);
    }); 
};

var resolveAfterOneSecond = function() {
   console.log("Stating Fast Promise");
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(10); 
         console.log("Fast Promise is done");
      }, 1000);
   });
};

var sequentialStart = async function() {
    console.log("SEQUENTIAL START");
    //If the value of the expression following await operator is not a promise then it is converted into resolved Promise.
    const slow = await resolveAfterTwoSeconds();
    const fast = await resolveAfterOneSecond();

    console.log(slow);
    console.log(fast);
};

//sequentialStart();

var concurrentStart = async function() {
   console.log("Concurrent Start with await");
   const slowC = resolveAfterTwoSeconds();
   const fastC = resolveAfterOneSecond();
   
   console.log(await slowC);
   console.log(await fastC); 

};

//concurrentStart();

var parallelStart = function() {
    console.log("Parallel Start with promise.then");
    resolveAfterTwoSeconds().then((message) => {
        console.log(message);
    });
    resolveAfterOneSecond().then((message) => {
       console.log(message); 
    });
};

//parallelStart();

var stillSerial = function() {
   console.log("StillSerial with Promise.All");
   Promise.all([resolveAfterTwoSeconds(), resolveAfterOneSecond()]).then((slow, fast) => {
      console.log(slow);
      console.log(fast); 
   });
};

//stillSerial();

sequentialStart(); //2+1 seconds in total;
setTimeout(concurrentStart, 4000); //takes 2 sec in total;
setTimeout(stillSerial, 7000); //same as above;
setTimeout(parallelStart, 10000); //trully parallel;


