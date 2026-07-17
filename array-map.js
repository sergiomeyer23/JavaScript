const items = [
    {name: 'bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 100},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
]

const itemNames = items.map((item) => {
    return item.price
})

console.log(itemNames)
