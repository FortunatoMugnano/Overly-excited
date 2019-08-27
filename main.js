const cakes = [
    {
        name: "Zebra Cake",
        colors: ["white", "brown"],
        numberOfRolls: 6,
        price: 1.99,
        ingredients: ["Chocolate", "Cream", "Milk"],
        motto: "Get some Stripes!",
        seasonal: true
    },
    {
        name: "American Cake",
        colors: ["white", "red"],
        numberOfRolls: 6,
        price: 2.19,
        ingredients: ["Strowberry", "Cream", "Milk", "Blueberry"],
        motto: "Red white and Blueberry!",
        seasonal: true
    },
    {
        name: "Christmas Cake",
        colors: ["white", "brown"],
        numberOfRolls: 6,
        price: 2.19,
        ingredients: ["Eggnog", "Cream", "Milk"],
        motto: "Eggnog cake Rolls!",
        seasonal: true

    }];

console.log("Tell me about the cake", cakes);



const createSweetComponent = (item) => {
    return `<div>
        <h2>${item.name}</h2>
        <p>${item.motto}</p>
        <p>${item.numberOfRolls} sweets </p>
    </div>`
}

const sweetContainer = document.querySelector("#container")

for (let i = 0; i < cakes.length; i++) {
    console.log("loop of the array", i, cakes[i])
    sweetContainer.innerHTML += createSweetComponent(cakes[i]);
}



 // console.log(createSweetComponent())