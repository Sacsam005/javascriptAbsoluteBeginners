function greeting (name) {
    var obj = {};
    obj.name=name;
    obj.greeting=function(){
        alert('Welcome' + ' ' + this.name);
    };
    return obj;
}
var paul=new greeting('paul');

paul.greeting();