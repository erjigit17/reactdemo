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


// const string = 'Restaurants in Hanalei';
// let urlFriendly = "";
// for (let i = 0; i < string.length; i++) {
//   if (string[i] === ' ') {
//     urlFriendly += '-';
//   } else {
//     urlFriendly += string[i];
//   }
// }

// console.log(([...string].map(item => item === ' ' ? '-' : item)).join(''))
// const urlFriendly = string.replace(/ /g, '-')
// console.log(urlFriendly)
// const target = document.getElementById('target')
// const wrapper = document.createElement('div')
// const headline = document.createElement('h1')

// wrapper.id = 'welcome'
// headline.innerHTML = 'Hello World'
// wrapper.appendChild(headline)
// target.appendChild(wrapper)

// const { render } = ReactDom

// const Welcome = () => (
//   <div id="welcome">
//     <h1>Hello World</h1>
//   </div>
// )

// render(<Welcome />, document.getElementById('target'))
// let color_lawn = {
//   title: 'lawn',
//   color: '#00ff00',
//   rating: 0
// }
// function rateColor(color, rating) {
//   color.rating = rating
//   return color
// }

// console.log(rateColor(color_lawn, 5).rating)
// console.log(color_lawn.rating)

// const rateColor =  function (color, rating) {
//   return Object.assign({}, color, {rating: rating })
// }

// const rateColor = (color, rating) => ({
//   ...color,
//   rating
// })
// console.log(rateColor(color_lawn, 5).rating)
// console.log(color_lawn.rating)

// let list = [{title: 'Rad Red'}, {title: 'Lawn'}, {title: 'Party Pink'}]

// const addColor = function(title, colors) {
//   colors.push({ title: title})
//   return colors
// }

// const addColor = (title, array) => array.concat({title})

// const addColor = (title, list) => [...list, {title}]
// console.log(addColor('Glam Green', list).length)
// console.log(list.length)
// const frederick = {
//   name: "Frederick Douglass",
//   canRead: false,
//   canWrite: false
// };
// const selfEducate = person => ({
//   ...person,
//   canRead: true,
//   canWrite: true
// })
// console.log(selfEducate(frederick));
// console.log(frederick);

// function Header(text) {
//   let h1 = document.createElement('h1')
//   h1.innerHTML = text
//   document.body.appendChild(h1)
// }
// const Header = props => <h1>{props.title}</h1>

// Header('Header() caused side effects')
// const schools = ["Yorktown", "Washington & Liberty", "Wakefield"]
// console.log(schools.join(', '))

// const wSchools = schools.filter(school => school[0] ==='W')
// console.log(wSchools)

// const cutSchool = (cut, list) => list.filter(school => school !== cut )
// console.log(cutSchool("Washington & Liberty", schools).join(", "))
// // console.log(schools.join('\n'))
// // const highSchools = schools.map(school => `${school} High School`)
// // console.log(highSchools.join('\n'))
// const highSchools = schools.map(school => ({[schools.indexOf(school)]: school}))
// console.log(highSchools)
// const editName = (oldName,  name, arr) =>
//   arr.map(item => item.name === oldName ? { ...item, name } : item)

// let schools = [
//   { name: "Yorktown" },
//   { name: "Stratford" },
//   { name: "Washington & Liberty" },
//   { name: "Wakefield" }
// ];
// let updatedSchools = editName("Stratford", "HB Woodlawn", schools);
// console.log(updatedSchools[1]);  // { name: "HB Woodlawn" }
// console.log(schools[1]);

// const schools = {
//   Yorktown: 10,
//   "Washington & Liberty": 2,
//   Wakefield: 5
// }

// const schoolArray = Object.keys(schools).map(key => ({
//   name: key,
//   wins: schools[key]
// }))
// console.log(schoolArray)

// const ages = [21, 18, 42, 40, 64, 63, 34]
// // const ages = []

// // const maxAge = ages.reduce((max, age) => {
// //   console.log(`${age} > ${max} = ${age > max}`)
// //   if (age > max) {
// //     return age
// //   } else {
// //     return  max
// //   }
// // }, 0)

// const maxAge = ages.reduce((max, value) =>
//   (value > max ? value : max), 0)

// console.log('Max age: ', maxAge)
const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3
}, {
    id: "jbwsof",
    title: "big blue",
    rating: 2
}, {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5
}, {
    id: "ryhbhsl",
    title: "banana",
    rating: 1
} ]

const hashColors = colors.reduce((hash, {id, title, rating}) => {
  hash[id] = { title, rating}
  return hash
}, {})
// console.log(hashColors)




// const dic = array.reduce((result, value) =>{

//   result[array.indexOf(value)] = value
//   return result
// }, {})

// let array = ['item1', 'item2', 'item3']

// const arrToObj = (arr) => {
//   return arr.reduce((obj, value) => {
//     obj[arr.indexOf(value)] = value
//     return obj
//   }, {})
// }

// console.log(arrToObj(array))