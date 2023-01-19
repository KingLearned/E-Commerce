class Person {
    constructor(username, age, score){
        this.username = username,
        this.age = age,
        this.score = score
        this.calculate()
    }
    calculate(){
        return `hello ${this.username} this is your age ${this.age} and score ${this.score}`
    }
}
module.exports = Person