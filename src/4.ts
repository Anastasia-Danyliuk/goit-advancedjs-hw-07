class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(k: Key) {
        this.key = k;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    public door: boolean;
    public key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
        this.door = false;
    }

    comeIn(person: Person): void {
        if (this.door === true) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key) {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};


