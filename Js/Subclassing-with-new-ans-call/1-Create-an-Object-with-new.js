function userCreator(name, score) {
    this.name = name;
    this.score = score;
}

userCreator.prototype.sayName = function () {
    console.log("I'm " + this.name);
}

userCreator.prototype.increment = function () {
    console.log(this.score++);
}

const user1 = new userCreator("Phill", 4);
const user2 = new userCreator("Trim", 5);

user1.sayName(); // I'm Phill
user1.increment(); // 4
user1.increment(); // 5