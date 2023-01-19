// The Emmittre is used for the creation of back end Modules
const EventEmmitter =  require("events") //Module
const eventEmitter = new EventEmmitter()//class

    // CLASS PROPERTIES INITIALIZED BELOW
    //     ** INSTATIATION
    //     ** POLYMORPHISM
    //     ** INHERITANCE
    //     ** ENCAPSULATION
class Person extends EventEmmitter{
        constructor(user_id, username){
        super()
        this.user_id=user_id,
        this.username=username
    }
    get name() {
        return this.username
    }
}
let Learned = new Person(5, "Mr Nelson")
// Learned.username()
Learned.on('username', ()=>{
    console.log(`My name is ${Learned.name}`)
})
Learned.emit("username")


        // ### INSTANTIATING AN EVENT EMMITTER ###
// eventEmitter.on('nelson', (data) =>{
//     console.log(`nelson is here ${data}`)
// })
// eventEmitter.emit('nelson', "what do you have him?")
module.exports.eventEmitter