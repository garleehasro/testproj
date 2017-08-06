module.exports = {
 'num3': 1000,

 'human': function(message){
    var p = message;
    return this.num3;
 },
 
 'human2': function(num1,num2){
   var num3 = 100;
    this.show = function(){
        return  num1 + num2 + num3 + 2;
    };

 }
 

 
//test
}


