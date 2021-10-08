// function Vacation(destination, length) {
//   this.destination = destination
//   this.length = length
// }

// Vacation.prototype.print = function() {
//   console.log(this.destination + ' | ' + this.length + ' days')
// }

// const maui = new Vacation('Maui', 7)
// maui.print()
class Vacation {
  constructor(destination, length) {
    this.destination = destination
    this.length = length
  }

  print() {
    console.log(`${this.destination} will take ${this.length} days.`)
  }
}

const trip = new Vacation('Santiago, Chile', 7)

trip.print()