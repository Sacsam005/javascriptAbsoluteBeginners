//prototype chain and inheritance in Javascript

function Person(name, age) {            
    this.name=name;
    this.age=age;

    this.tellMeAboutPerson = function() {
        console.log(this.name + ' ' + this.age );
    }
}


var Sam= new Person('Sam', 23);         //try Sam.hasOwnProperty in console

//try Sam.tellMeAboutPerson in console