interface IPerson {
    firstName: string;
    lastName: string;
    age?: number;
}

class SomeVehicle {
    type: string;

}

class SomePerson implements IPerson {
    private idNum: number = 1;

    firstName: string;
    lastName: string;
    age: number;
    id: string;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = this.idNum.toString();
        this.idNum++;
    }

    greet(): string {
        return this.firstName + ' ' + this.lastName + ' - ' + this.age + ' years old, ID: ' + this.id;
    }
}

class SomeDriver extends SomePerson {
    private vehicleList: SomeVehicle[];

    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
    }
}

var somePerson = new SomePerson('John', 'Page', 18);
var someDriver = new SomeDriver('Dgohn', 'Macc', 21);

console.log(somePerson.greet());
console.log(someDriver.greet());