
let year = 2024

// types primitifs : Number, String, Boolean, Null, Undefined, BigInt, Symbol

// types References : Object, Array, function

console.log(`${typeof year}`)

const myAge = 15
let question = null | undefined

console.log(`Variable question ${question}`)

console.log(myAge)

// erreur d'assignation
// myAge = "DDDD"
// console.log(myAge)

const colors = ["red", "green"]

let savedColors = colors

console.log({
    'SavedColors': savedColors
})

colors['0'] = "Yellow"

// error d'assignation
// colors = ['green']

console.log({
    'SavedColors': savedColors,
    "colors":colors
})

console.log(savedColors === colors)



let colors_two = ["red", "green"]

let saved = colors_two

console.log({
    'Saved': saved
})

colors_two = ['indigo']

console.log({
    'Saved': saved,
    'Colors-two': colors_two
})

console.log(saved === colors_two)


// les truthy : true, les nombres positifs, {}, [], string,
// les falsy : false, 0, les nombres négatifs, null, undefined,"",0n,

if (saved === colors_two){
    console.log('Je suis là')
}else{
    console.log('Je ne comprends pas')
}

