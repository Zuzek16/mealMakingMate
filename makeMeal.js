const carbs = ["rice noodles", "pasta", "rice", "cereal", "bread", "oats", "red beans", "tortilla"];
const protein = ["schrimp", "chickpeas", "chicken", "beef", "pork", "eggs", "lentils", "cottage cheese", "greek joghurt", "natural joghurt", "turkey", "joghurt", "salmon", "cod", "tuna", "mackerel", "black beans"];
const vegetables = ["potoato", "cabbage", "cucumber", "paprika", "tomato", "brussels", "sweet potato", "broccoli", "peas", "carrot", "lettuce", "celery", "califlower"];
const fruit = ["apple", "melon", "watermelon", "pear", "kiwi", "berries", "pineapple", "banana", "corn", "orange", "lemon", "grapes", "cherries"];
const drinks = ["water", "milk", "fruit juice", "smoothie", "milkshake", " cocoa", "lemonade", "sparkling water", "tea", "coffee", "mocha", "fizzy drink"];

let allOptions = [carbs, protein, vegetables, fruit, drinks];
let allOptionsNames = ["Carbs", "Protein", "Vegetables", "Fruit", "Drink"];
let noneChecked = false;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }  

function genMeal(random) {
    let anwser = ``;
    let pStart = `<p>`;
    let pEnd = `</p>`;

    if (random) {
        allOptions.forEach((category, id) => {
            anwser +=  pStart + `${allOptionsNames[id]}:  ` + category[getRandomIntInclusive(0, (category.length - 1))] + pEnd;
        });
    } else {
        const allInputs = document.querySelectorAll("input[type=checkbox]");
        noneChecked = true;
        Array.from(allInputs).forEach((input, id)  => {
            if (input.checked) {
                noneChecked = false;
                console.log(input.checked);
                let val = allOptions[id][getRandomIntInclusive(0, (allOptions[id].length - 1))]
                    
                anwser += pStart + (input.name[0]).toUpperCase() + (input.name).slice(1) + ": " + val + pEnd; 
            }
        });
    }
    if (noneChecked) {
        anwser = pStart + "No categories checked..." + pEnd;
    }
    document.getElementById("anwser").innerHTML = anwser;
}