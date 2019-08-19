// ES6
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Persion extends Human {
    constructor() {
        super();

        this.name = 'Nguyen Van A';
        this.gender = 'female';
    }

    printName() {
        console.log(this.name);
    }
}

const person = new Persion();
person.printName();
person.printGender();

// -----------------------------------------------
// ES7
class Human2 {
    gender = 'male';

    printGender2 = () => {
        console.log(this.gender);
    }
}

class Persion2 extends Human2 {
    name = 'Nguyen Van A';
    gender = 'female';

    printName2 = () => {
        console.log(this.name);
    }
}

const person = new Persion2();
person.printName2();
person.printGender2();
