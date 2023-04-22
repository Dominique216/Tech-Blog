const { options } = require("../controllers");

module.exports = {
    // currentUser: (num1, num2) => {
    //     num1 === num2 ? true : false
    // }
    ifCurrentUser: (num1, num2, options) => {
        if(num1 == num2) {
            console.log(num1)
            console.log(num2)
            return options.fn(this)   
        } else {
            console.log(num1)
            console.log(num2)
            options.inverse(this);
        }
    }
}

