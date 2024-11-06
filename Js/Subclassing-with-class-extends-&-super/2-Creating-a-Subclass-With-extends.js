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

const user1 = new userCreator("Phill", 4);
const user2 = new userCreator("Tim", 4);

user1.increment();


class paidiUserCreator extends userCreator {
    constructor(paidName, paidScore, accounBalance) {
        super(paidName, paidScore);
        this.accountBlance = accounBalance;
    }
    increaseBlance() {
        this.accountBlance++;
    }
}

const paidUser1 = new paidiUserCreator("Arbaaz Chouhan", 8, 25);

paidUser1.increaseBlance();

paidUser1.sayName();