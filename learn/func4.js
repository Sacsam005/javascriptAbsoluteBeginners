//passing function as an argument

function doIf(cond, func)   {
    if(cond)    {
        func();
    }
}

const a='algebra';

doIf(a===2, Ais2);
doIf(a==='animal', AisAnimal);
doIf(a==='algebra', AisAlgebra);        


function Ais2() {console.log('A is 2')};
function AisAnimal() {console.log('A is animal')};
function AisAlgebra() {console.log('A is algebra')};        //returns 'A is algebra' 

//another way of doing this same thing 

function doIf(cond, func) {
    if (cond) {
        func();
    }
}

const a='algebra';

doIf(a===2, function(){         //in this case we r creating a function with in a loop!!!
    return console.log('A is 2');
});

doIf(a==='animal', function() {
    return console.log('A is animal'); 
});

doIf(a==='algebra', function()  {
    return console.log('A is algebra');            //returns 'A is algebra to the console'
});