class userCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    sayName() {
        console.log("I am " + this.name);
    }
    increment() {
        this.score++;
    }
}

const user1 = new userCreator("Arbaaz Chouhan", 4);
const user2 = new userCreator("Tim", 4);

user1.increment();