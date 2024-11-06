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

function paidiUserCreator(paidName, paidScore, accountBlance) {
    userCreator.call(this, paidName, paidScore);
    // userCreator.apply(this,[paidName,paidScore])
    this.accountBlance = accountBlance;
}

paidiUserCreator.prototype = Object.create(userCreator.prototype);

paidiUserCreator.prototype.increaseBlance = function () {
    this.accountBlance++;
}

const paidUser1 = new paidiUserCreator("Alyass", 8, 20);
paidUser1.increaseBlance();
paidUser1.sayName(); // I'm Alyass