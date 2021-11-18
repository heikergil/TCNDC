// Objects property shorthand

const name = 'Heiker'
const userAge = '34'

const user = {
    name,
    age: userAge,
    location: 'cabimas'
}

console.log(user)


// Object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

const {label:productLabel, stock, price, salePrice, rating = 5} = product

console.log(productLabel,  stock, price,rating )