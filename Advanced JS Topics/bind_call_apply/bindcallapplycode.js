var module = {
    x: 42,
    getX: function() {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX());

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());

//Syntax is function.bind(thisArg[, arg1, arg2[, ....]]);


var numbers = [5, 6, 7, 8];
var max = Math.max.apply(null, numbers);
console.log(max);

var min = Math.min.apply(null, numbers);
console.log(min);