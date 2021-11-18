
//regular function

// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// console.log(square(3))

// arrow functions does not bind they own this
const event = {
    name:'Birthday Party',
    guestList: ['heiker', 'lis', 'nena'],
        printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()
