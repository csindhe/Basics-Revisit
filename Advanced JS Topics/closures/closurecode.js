const arrG=[10, 20, 30, 40];
for(var i = 0; i < arrG.length; i++){
    setTimeout(function(i_local) {
       console.log('Index: ' + i_local + ', element: ' + arrG[i_local]);
    }(i), 3000);
}

for(let i = 0; i < arrG.length; i++){
    setTimeout(function() {
       console.log('Index: ' + i + ', element: ' + arrG[i]);
    }, 3000);
}

function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();

myFunc();

//below is a function factory
function makeAdder(x) {
    return function(y){
        return x + y;   
    }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

var counter = (function() {
    var privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
