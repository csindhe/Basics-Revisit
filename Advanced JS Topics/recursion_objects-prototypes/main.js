var Todo = (() => {
    var inputVal = "";

    init = () => {
        bindEvents();
    }

    bindEvents = () => {
        bindbutton();
    }

    function bindbutton() {
        document.getElementById("inpSubmit").addEventListener("click", (e) => {
            triggerChanges();
        });
    }

    var person = function(name) {
        this.name = name;
        this.canTalk = true;
    };

    person.prototype.greet = function() {
        if(this.canTalk) {
            console.log("Hi, I am " + this.name);
        }
    };

    var employee = function(name, title) {
        person.call(this, name);
        this.title = title;
    };

    employee.prototype = Object.create(person.prototype);
    employee.prototype.constructor = employee;

    employee.prototype.greet = function() {
        if(this.canTalk){
            console.log("Hi I am " + this.name + ", the " + this.title);
        }
    };

    var customer = function(name) {
        person.call(this, name);
    };

    customer.prototype = Object.create(person.prototype);
    customer.prototype.constructor = customer;

    triggerChanges = () => {
        inputVal = document.getElementById("inpBox").value;
        var bob = new employee(inputVal, 'Builder');
        bob.greet();
        var joe = new customer(inputVal);
        joe.greet();
        var che = new person(inputVal);
        che.greet();
        objectMethods();
        checkRecursion();
        checkCommonFunctonalities();
    }

    function objectMethods() {
        const Obj1 = { a: 1, b: 2, c: 3 };
        const Obj2 = Object.assign({ c: 4, d: 5 }, Obj1);
        console.log(Obj2.c, Obj2.d, Obj1.c, Obj1.d);
        console.log(Obj1);
        console.log(Obj2);
    }

    function checkRecursion() {
        var arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var sumOfArrayItems = sumArr(arrNum);
        console.log("Sum of Array Items [" + arrNum + "] is " + sumOfArrayItems);
    }

    function sumArr(arrNum) {
        return (arrNum.length === 0) ? 0 : arrNum[0] + sumArr(arrNum.slice(1));
    }

    checkCommonFunctonalities = () => {
        var Object1 = Object.create({});
        console.log(Object.getPrototypeOf(Object1));
        var Object2 = Object.create(Object1);
        console.log(Object.getPrototypeOf(Object2));


    }

    return {
        init: init
    }

})();

document.addEventListener("DOMContentLoaded", Todo.init);

