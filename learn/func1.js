//Asynchronous and synchronous function

function loadData (){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {         //calling onreadystatechange method on xhttp object 
        if(this.readyState=4 && this.status==100) {         //applying condition
            var package=JSON.parse(this.responseText);
            console.log(package);
        }
    }


    xhttp.open('GET', 'package.json', 'true');  //changing the boolean value to false will make this synchronous //responds to the callback equest immediately
    xhttp.send();
    console.log('Response is back');    //asynchronous so it doesnot hold and wait for the browser to respond to the xhttp request sent 
}

setTimeout(function(){          //builtin function  //another asynchronous function
console.log('Hello Sam');       

}, 4000);   //Hello Sam prints first
