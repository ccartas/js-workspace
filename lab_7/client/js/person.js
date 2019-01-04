export class Person {
    constructor(name, surname, address){
        this.name = name;
        this.surname = surname;
        this.address = address;
    }
    toString(){
        return `${this.name} ${this.surname} lives on ${this.address}`;
    }
}