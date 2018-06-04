/*Constructor Function*/
function Person(first, last, age, gender, interests){
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.bio = function() {
        var string = this.first + ' ' + this.last + ' is ' + this.age + ' years Old. ';
        var pronoun;
        if(this.gender === "male"){
            pronoun = "He likes ";
        }else if(this.gender === "female"){
            pronoun = "She likes ";
        }else{
            pronoun = "They like ";
        }

        string += pronoun;

        for(var i = 0; i < this.interests.length; i++){
            if(i === this.interests.length - 1){
                string += this.interests[i] + '.';
            }
            else{
                string += this.interests[i] + ', ';
            }
        }
        console.log(string);
    };

    this.greeting = function() {
        console.log('Hi! I\'m ' + this.first + ' ' + this.last + '.');
    };
}

Person.prototype.farewell = function() {
    console.log('Hi! I\'m ' + this.first + ' ' + this.last + ' has left the building.');
}

/*Creating Object Instance*/
var person1 = new Person('Lord', 'Krishna', 'Infinity', 'Omnipotent', ['Maya Bazaaar', 'Flute']);

debugger;



