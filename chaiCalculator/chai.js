//function to calculate ingridients according to number of cups
function calculateChaiIngredients(numberOfCups) {
    //ingredients
    const water = 200 * numberOfCups;
    const milk = 50 * numberOfCups;
    const tealeaves = 1 * numberOfCups;
    const sugar= 2 * numberOfCups;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`water: ${water} ml`);
    console.log(`milk: ${milk} ml`);
    console.log(`tealeaves (majani): ${tealeaves} tablespoons`);
    console.log(`sugar (sukari): ${sugar} teaspoons`);
    
    console.log("Enjoy your Chai Bora!");
}

// user
const cups =Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
calculateChaiIngredients(cups);

