var global = require('./global.js');

var person = {
    'name': 'Andrew',
    'birthyear': 1981,
    'currentyear': 2017,
    'getAge': function () {
        console.log(this.currentyear - this.birthyear);
    }


};


//person.getAge();

console.log(global.human())

var p = new global.human2(3,2);
console.log(p.show());

console.log(p.)


//console.log(global.human('hi'));

