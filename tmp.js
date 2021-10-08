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
const { print, log } = require("./text-helpers")
const freel =require("./mt-freel")

print('printing a message')
log('logging a message')

freel.print()