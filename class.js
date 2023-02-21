
class Car {

    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getName(){
        return this.make + ' ' + this.model + ' ' + this.color;
    }

}

const myCar = new Car('toyota', 1980, 'red');
// console.log(myCar.getName());



class Instructor {
    name;
    designation = 'instructor';
    team = 'web team';
    location;

    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    supportSession (time){
        console.log(`start support session ${time}`);
    }
    startQuiz (module){
        module += 5;
        console.log(`start quiz ${module}`);
    }
}

const amir = new Instructor();
console.log(amir);

const solayman = new Instructor('solayman', 'dhaka');
console.log(solayman);

amir.supportSession('9:00');
amir.startQuiz(60);