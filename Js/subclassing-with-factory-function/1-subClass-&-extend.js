class parent {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    login() {
        // login will automaticlly set to tha prototype of the parent.
        console.log("Login");
    }
}

const user1 = new parent("Phill", 3);
console.log(user1); // Done
user1.login(); // Login

class subClass extends parent {
    // whenever i will use the extend keyword the parent class will be set automatically of the subClass.
    constructor(name, score, age) {
        super(name, score, age);  // whenever we want to use the same constructor method we must use super.
        this.age = age;
    }
}

const user2 = new subClass("suzy", 4, 20);
console.log(user2.age); // 20
// super instance . frome all.

class scStudent {
    constructor(name) {
        this._name = name;
    }
    implement() {
        console.log("name is " + scStudent.capitalize(this.name));
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1); // the static runs only once and it runs only once.
    }
    get name() {
        // getters
        return this._name;
    }
    // also we can make getter and setter private.
    set name(newName) {
        // setters
        this._name = newName;
    }
}

const user3 = new scStudent("Phill");
user3.implement();
user3.name = "Suzy";
console.log(user3.name);

// higher order function
function userCreator(arr, instruction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(instruction(arr[i]));
    }
    return output;
}

function multiplyBy2(input) {
    return 2 * input;
}

const array = [1, 2, 3];
const user = userCreator(array, multiplyBy2);
console.log(user); // [2,4,6];