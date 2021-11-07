//object oriented programming using function

var age=33;

var person = {
    name: 'Sachin',
    age: 23,
    email: 'sac@gmail.com',
    hobby: 'eating',
    DOB: '2/2/2012',
    description: function ()    {
        console.log('the name of the person is  ' + this.name + ' ' + 'and he is ' + this.age + ' years old');
    }
    
}
person.description();


/*  here if i remove 'this.' before the age variable from the console element the console will take the input from 
global var age=33; but not the local var age:23;    */