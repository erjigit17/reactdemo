// function Vacation(destination, length) {
//   this.destination = destination
//   this.length = length
// }

// Vacation.prototype.print = function() {
//   console.log(this.destination + ' | ' + this.length + ' days')
// }

// const maui = new Vacation('Maui', 7)
// maui.print()
// class Vacation {
//   constructor(destination, length) {
//     this.destination = destination
//     this.length = length
//   }

//   print() {
//     console.log(`${this.destination} will take ${this.length} days.`)
//   }
// }


// class Expedition extends Vacation {
//   constructor(destination, length, gear) {
//     super(destination, length)
//     this.gear = gear
//   }

//   print() {
//     super.print()
//     console.log(`Bring your ${this.gear.join(' and your ')}`)
//   }
// }

// const trip = new Expedition('Mt. Whitney', 3, [
//   "sunglasses",
//   "prayer flags",
//   "camera"
// ])

// trip.print()
// const { print, log } = require("./text-helpers")
// const freel =require("./mt-freel")

// print('printing a message')
// log('logging a message')

// freel.print()

// const log = message => console.log(message)

// const obj = {
//   message: 'Lorem Ipsum',
//   log(message) {
//     console.log(message)
//   }
// }

// obj.log(obj.message)
// const messages = [
//   'first message',
//   message => console.log(message),
//   'second message',
//   message => console.log(message)
// ]

// messages[1](messages[0])
// messages[3](messages[3])

// const insideFn = logger => {
//   logger('Lorem Ipsum')
// }

// insideFn(message => console.log(message))

// const createScream = logger => message => {
//     logger(message.toUpperCase() + '!!!')
//   }

// const scream = createScream(message => console.log(message))
// scream('functions can be returned from other functions')
// scream('createScream returns a function')
// scream('scream invokes that returned function')


const string = 'Restaurants in Hanalei';
// let urlFriendly = "";
// for (let i = 0; i < string.length; i++) {
//   if (string[i] === ' ') {
//     urlFriendly += '-';
//   } else {
//     urlFriendly += string[i];
//   }
// }

console.log(([...string].map(item => item === ' ' ? '-' : item)).join(''))
