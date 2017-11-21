"use strict";

class Human {

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    toString() {
        return `Name: ${this.name} | Age: ${this.age} | Gender: ${this.gender}`
    }
    move() {
        return "I am moving!";
    }
    print() {
        return this.toString();
    }
}
class Adult extends Human {

    move() {
        return this.name + " is walking!";
    }
    constructor(name, age, gender, occupation) {
        super(name, age, gender);
        this.occupation = occupation;
    }
    print() {
        return `Name: ${this.name} | Age: ${this.age} | Gender: ${this.gender}, ${this.name}  is a ${this.occupation}`;
    }

}
class Child extends Human {

    constructor(name, age, gender, _class) {
        super(name, age, gender);
        this._class = _class;
    }
    move() {
        return this.name + " is walking!";
    }
    print() {
        return `Name: ${this.name} | Age: ${this.age} | Gender: ${this.gender}, ${this.name}  is in ${this._class}`;
    }

}
class Baby extends Human {

    constructor(name, age, gender) {
        super(name, age, gender);
    }
    move() {

        return this.name + " is crawling!";
    }
    print() {
        return `Name: ${this.name} | Age: ${this.age} | Gender: ${this.gender}, ${this.name}  is a baby`;
    }

}

const human = new Human('Human', 26, "female");
const adult = new Adult('Adetunji', 26, "Male", "Farmer");
const child = new Child('Sola', 6, "female", "primary 2");
const baby = new Baby('Tola', 1, "female");

human.print();
human.move();
adult.print();
adult.move();
child.print();
child.move();
baby.print();
baby.move();


