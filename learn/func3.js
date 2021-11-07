//creating an own function
function add(x,y) {
    return (x+y);
}
console.log(add(2,2));  //returns 4 on console 

//function assigned to a variable
console.log(add(2, 2));     //here the comiler will fail to give an output as it doesnot understand the declaration

var add= function (x, y)    {       //function assigned to a var should be ahead and above the print log
    return (x+y);
}                                      // hence the output with this function will result to an error


