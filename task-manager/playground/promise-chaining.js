require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete('619ecdad3671282bc0da9e87').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed : false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false})
    return count
}

deleteTaskAndCount('619fc214dcb5a314109b744e').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})



// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(is, {age})
//     const count = await User.countDocuments({age})
//     return count
// }

// updateAgeAndCount('619ecdad3671282bc0da9e87', { age }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

