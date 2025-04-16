const prompt = require('prompt-sync')()

// "use strict"
//1.
try {
    const weightConvert =(el) =>{
        let weight = prompt("Input your weight(lb):")
        let weightInKg = parseInt(weight) *0.454  

        if(isNaN(weight) || weight<0){
            throw new Error(`"Please enter a valid number."`)
        }else{
            console.log(`Weight in kilogram is ${weightInKg}kg`);
        }
    }
    weightConvert()
}catch(err){
    console.log(err);
}

//2.
try {
    const ageCalc =(el) =>{
        let yearInput = prompt("Input the year you were born:")
        let monthInput = prompt(`Input the month you were born in "1-12":`)
        let presentYear = new Date().getFullYear()
        let presentMonth = new Date().getMonth()+1
        
        let age = presentYear - yearInput
    
        if(isNaN(yearInput || monthInput)){
            throw new Error(`Please enter a valid number`)
        }else if(monthInput>12){
            throw new error(`Please enter a number between 1 and 12`);            
        }else if(presentMonth < parseInt(monthInput)){
            age --
        }
        console.log(`The user’s age is ${age} years old.`);
    }
    ageCalc()
}catch(err){
    console.log(err);
}

//3.
// In this project, develop a recipe book application that 
// features a variety of recipes obtained through a free
//  recipe API (create the Api). We need an API key to access
//   this API. Each time the page is refreshed, a new set of 
// recipes with distinct ingredients will be displayed. 
// Additionally, a link is provided to access the recipe website.

const randRecipes =() =>{ 
    let recipe = [
        `Recipe name: Greek Tzatziki Chickpea Wrap

Ingredients:
Vegetables:
- 1 cup diced cucumber (16 calories, $0.50)
- 1/2 cup diced tomato (16 calories, $0.50)
- 1/4 cup sliced red onion (13 calories, $0.25)
- 2 tablespoons chopped fresh dill (4 calories, $0.25)`,

        `Recipe name: Sweet Potato and Coconut Soup

Ingredients:
Vegetables:
- 2 large sweet potatoes, peeled and cubed (200 calories, $1.50)
- 1 onion, chopped (40 calories, $0.50)
- 2 cloves garlic, minced (10 calories, $0.10)
- 1 tablespoon fresh ginger, grated (5 calories, $0.20)
- 1 tablespoon curry powder (20 calories, $0.30`,

        `Recipe name: Ikura Don (Salmon Roe Rice Bowl)

Ingredients:
Vegetables:
- 2 cups cooked rice (500 calories, $0.50)
- 1 cucumber, thinly sliced (10 calories, $0.50)
- 4 sheets nori seaweed, cut into strips (30 calories, $1.00)`,

        `Recipe name: Ratatouille Pasta

Ingredients:
Vegetables:
- 1 eggplant, diced (137 calories, $1.50)
- 1 zucchini, diced (33 calories, $0.50)
- 1 yellow bell pepper, diced (50 calories, $0.80)
- 1 red bell pepper, diced (50 calories, $0.80)
- 1 onion, diced (40 calories, $0.50)`
    ]

    let el = Math.floor(Math.random()*recipe.length)
    return recipe[el]    
}
console.log(randRecipes());
