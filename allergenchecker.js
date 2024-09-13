//The aim of this project is to alert customers to allergens, I used the loop function to analyse if 2 meals share the same allergens and to print this to the console.
//List my objects, in this case meals in a restaurant
const menu = [
    {
    name: "XL Burger",
    ingredients: ["Beef Patty", "Sesame Bun", "Bacon", "Cheddar Cheese"],
    allergens: ["Lactose", "Sesame", "Gluten"],
    vegan: ["False"]
    },

    {
    name: "Veggie XL Burger",
    ingredients: ["Bean Patty", "Gluten Free Sesame Bun", "Facon", "Cheddar Cheeezee"],
    allergens: ["Soy", "Sesame"],
    vegan: ["True"]
    }, 
];

//Log alert if meal contains any allergens
if (menu.name = ["Soy", "Lactose", "Sesame", "Gluten"]){
  console.log("This meal contains allergens.")
} else {
  console.log("This meal is allergen free.")
}

//Implement a loop to check if burgers have any allergens in common. 
for (let i = 0; i < menu.length; i++){
    for (let j = i + 1; j < menu.length; j++){
        let menu1 = menu[i];
        let menu2 = menu[j];

        
        let allergenCheck = menu1.allergens.filter(allergen => menu2.allergens.includes(allergen));
        if (allergenCheck.length > 0){
            console.log(`${menu1.name} and ${menu2.name} Have The Allergen ${allergenCheck.join(', ')}`);
       
        //If no allergens in common, log to console
        } else {
            console.log(`${menu1.name} and ${menu2.name} Do Not Have Allergens in Common `);
        }
    }
}

//Check if both meals are vegan
for (let i = 0; i < menu.length; i++){
    for (let j = i + 1; j < menu.length; j++){
        let menu1 = menu[i];
        let menu2 = menu[j];

        //If vegan,log to console that both meals are vegan
        let veganCheck = menu1.vegan.filter(is => menu2.vegan.includes(is));
        if (veganCheck.length > 0){
            console.log(`${menu1.name} and ${menu2.name} Are both vegan ${veganCheck.join(', ')}`);
        
          //If not log to the console that the meals are not vegan
        } else {
            console.log(`${menu1.name} and ${menu2.name} Are not vegan`);
        }
    }
}
