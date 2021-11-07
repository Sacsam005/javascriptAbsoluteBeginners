//function with paranthesis

function add(x,y) {
    return (x+y);
}
console.log(add(2, 2));  //returns 4 on console


//function w/o parathesis

function add()  {
    return 5;
}
console.log(add);   //returns core function 'add'

//function w/parathesis
function add()  {
    return 5;
}
console.log(add());     //returns 5 since we used the parathesis...so the difference in between using and not using paranthesis results in getting or not getting the return value
