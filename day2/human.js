"use strict";

class Human {

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    toString() {
        //`${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
        return `${this.name} | Age ${this.age} :: Gender ${this.gender}`
    }
    move() {
        console.log("I am moving!");
    }
    print() {
        console.log(this.toString());
    }
}
class Adult extends Human {

    move() {
        console.log(this.name + " is walking!");
    }
    constructor(name, age, gender, occupation) {
        super(name, age, gender);
        this.occupation = occupation;
    }
    print() {
        super.print();
        console.log(`${this.name} is a ${this.occupation}`);
    }

}
class Child extends Human {

    constructor(name, age, gender, _class) {
        super(name, age, gender);
        this._class = _class;
    }
    move() {
        console.log(this.name + " is walking!");
    }
    print() {
        super.print();
        console.log(`${this.name} is in ${this._class}`);
    }

}
class Baby extends Human {

    constructor(name, age, gender) {
        super(name, age, gender);
    }
    move() {

        console.log(this.name + " is crawling!");
    }
    print() {
        super.print();
        console.log(`${this.name} is a baby`);
    }

}

const human = new Human('Human', 26, "female");
const adult = new Adult('Adetunji', 26, "Male", "Farmer");
const child = new Child('Sola', 6, "female", "primary 2");
const baby = new Baby('Tola', 1, "female");

human.print(); //
human.move(); // 
adult.print(); // 
adult.move(); // 
child.print(); // 
child.move(); // 
baby.print(); // 
baby.move(); // 


