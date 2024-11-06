const obj = {
    num: 3,
    increment: function () {
        console.log(this.num++);
    },
};

obj.increment();  // Done

const obj2 = {
    num: 10,
}

obj.increment.call(obj2);  // call is used to apply the specific methods or properties of the object to the another object,,when we pass our first argument to the call it will owerwrite the this keyword from obj and set he will set obj2.
obj.increment.apply(obj2); // it will work same as the call. BUT we are saying him go to the obj and find increment in the increment find call it doesn't exists in the increment then he will be go to __proto__ and then in the prototype object and he able to find there because the call is the method of prototype and then he will be overwrite the this keywrod from obj and will insert the obj2.