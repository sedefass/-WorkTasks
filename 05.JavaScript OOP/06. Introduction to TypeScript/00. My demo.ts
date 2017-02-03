
// Basic Types

//  Boolean - true or false
//  String - text
//  Number – integer or floating point number
//  Array – collection of types
//  Object – base object
//  Enum – enumeration
//  Any – dynamic types, can be everything
//  Void – no value

var currentName: string;
var hasPassed: boolean;
var averageMark: number;
var currentCourses: string[]; // Array<string>
var additionalInfo: any;
var currentState: State;
enum State { Onsight, Online, NotEnrolled }
function setStudent(
    name: string, passed: boolean,
    mark: number, courses: string[], info: any,
    state: State): void {

}

//--------------------------------------------------------------------------------------------

// Interfaces

interface Person {
    firstName: string;
    lastName: string;
    age?: number;
}

interface Driver extends Person {
    yearsExperience: number;
    vehicles: Vehicle[];
    addVehicle(vehicle: Vehicle): void;
    removeVehicle(vehicle: Vehicle): Vehicle;
}

//--------------------------------------------------------------------------------------------

// Classes

class CarDriver extends BasePerson implements Driver {
    private static LicenseNumber: string = '1234-5678';
    private _health: number;
    vehicles: Vehicle[];
    constructor(name: string, public experience: number) {
        super(name);
    }
    get health() { … }
    set health(newHealth: number) { … }
    static CurrentLicenseNumber(): string { … }
    addVehicle(vehicle: Vehicle) { … }
    greet(): string {
        return super.greet() + …;
    }
}

//--------------------------------------------------------------------------------------------

// Modules

//  Organize your code into subsystems
//  Created by the module keyword
//  Define the public parts by export keyword
//  You can split one module into different files
//  You can compile them to a single one
//  Possibility of external modules (node/require)
//  Can be used with external libraries

module Drivers {
    export class BasePerson implements Person {
        // some code
    }
    export class CarDriver extends BasePerson {
        // some code
    }
}

var someDriver = new Drivers.CarDriver(parameters);

//--------------------------------------------------------------------------------------------

// Functions

//  Can define the types of the parameters
//  Can define their return value
//  Can define typed pointers
//  Can have optional or default parameters
//  Can define collection parameters
//  Can be used as lambda expressions
//  Can have overloads based on their parameters

function calculateSum(x: number, y: number, z?: number,
    ...restNumbers: number[]): number {
    var sum = x + y;
    for (var i = 0; i < restNumbers.length; i++) {
        sum += restNumbers[i];
    }
    return sum;
}
var calc: (x: number, y: number) => number = calculateSum;
var calcSum = (x, y) => x + y;

//--------------------------------------------------------------------------------------------

// Generics

//  Provides reusability
//  Generic functions
//  Generic classes
//  Gives you types checking and constrains

class List<T> {
    private _collection: T[];
    add(item: T) {
        this._collection.push(item);
    }
    remove(item: T) {
        // some code
    }
    get count() {
        return this._collection.length;
    }
}

// Documentation
//  http://www.typescriptlang.org/Content/TypeSc
// ript%20Language%20Specification.pdf
//  Handbook
//  http://www.typescriptlang.org/Handbook
//  Demos
//  http://www.typescriptlang.org/Samples
//  Training room
//  http://www.typescriptlang.org/Playground

