//Greeting from Help Me Find A Houseplant
function tagline() {
    console.log("Find your perfect plant 🪴 with Help Me Find A Houseplant! 😇");
  }
  //User enters a name to use on the site
  const Name = prompt("Please enter your name");
  console.log("Welcome " + Name + " We are glad you found us! 🙏");
  tagline();
  //User decides if they would like to create an account
  let createAccount = prompt(
    "Would you like to create an account with Help Me Find A Houseplant?"
  );
  
  if (createAccount === "yes") {
    //Enter password prompt
    let enterPassword = prompt("Please enter your pasword");
    console.log("Great news, your account has been created!");
  }else { 
    //User is advised they will continue on the site as a guest
    console.log(
      "You are using Help Me Find A Houseplant as guest and your recommendations will not be saved 🌿"
    );
  }
  //Plant identifier asks user to input information on environment the plant will live so it can come up with a recommendation
  console.log("Let's find which houseplant will thrive in your environment 🪴");
  //Light scale
  const bright = 4 || 5;
  const average = 3;
  const shady = 1 || 2;
  console.log(
    "Firstly; how much sun 🌞 will your plant get in your chosen spot?"
  );
  //User is prompted to input how much light their plant will receive
  let amountOfLight = prompt(
    "How bright is the spot you have chosen? (1 = very shady - 5 = very bright)"
  );
  
  //Display amount of light the plant will receive to the user
  if (amountOfLight <= 2) {
    console.log("Your plant will be in a shady spot with little sun ⛅️");
  } else if (amountOfLight >= 4) {
    console.log("Your plant will be in a bright spot with lots of sun 🌞");
  } else {
    console.log("Your plant will have an average amount of sun 🌤");
  }
  //User is asked how often they want to water/spray their plant
  console.log(
    "Next, how often do you want to water or spray your plant per week? 💧"
  );
  const littleAsPossible = 1;
  const averageAmount = 2 || 3;
  const daily = 4;
  let amountOfWater = prompt("I want to water my plant____times per week");
  
  //Display how humid the plants' environment will be
  if (amountOfWater <= 1) {
    console.log("Your plant will be in a dry environment with little water 🏜");
  } else if (amountOfWater >= 4) {
    console.log(
      "Your plant will be in a humid environment with lots of moisture 🌧"
    );
  } else {
    console.log("Your plant will have an average amount of water 🌦");
  }
  //Display which plant will be best suited to the user's environment based on the light and humidity the plant will receive
  if (amountOfWater <= 2 && amountOfLight >= 4) {
    console.log("Sounds like you would be best friends with a Cactus 🌵 ");
  } else if (amountOfWater <= 3 && amountOfLight >= 3) {
    console.log(
      "We think a spider 🕸 plant will love having you as a Plant Parent ❤️"
    );
  } else {
    console.log("Your perfect match would be a fern 🌿");
  }
  //Prompt the user to decide if they would like to purchase a plant today
  let buyPlant = prompt("Do you want to adopt a plant today?");
  
  if (buyPlant === "yes"){ 
    //User inputs how many plants of each type they would like to buy
    const howManyCactus = prompt("How many Cactus plants @ £10 each");
    const howManySpider = prompt("How many Spider plants @ £12 each");
    const howManyFern = prompt("How many fern plants @ £14 each");
    //variable assigned to total cost for each type of plant selected, let variable used so cost of product can be reassigned if there is a sale
    let costOfCactus = howManyCactus * 10
    let costOfSpider = howManySpider * 12
    let costOfFern = howManyFern * 14
    //If client isn't ready to purchase today, give a friendly message
    
    //Display number of plants purchased by user
    console.log("You spent £" + costOfCactus + " on cactus plants today")
    console.log("You spent £" + costOfSpider + " on spider plants today")
    console.log("You spent £" + costOfFern + " on fern plants today")
    //Display total cost of all plants purchased today with discount applied to customer if they spend £150 or more
    let totalPrice = (costOfCactus + costOfSpider + costOfFern)
    let discount = 15
    totalPrice = totalPrice * ((100 - discount) / 100)
    if (totalPrice > 100) 
    
       console.log(
      "Congratulations, you spent over £100 and received a 15% discount! Amount Due Today = £ " + totalPrice)
  
  else 
      console.log(
        "Next time spend over £100 to receive a 15% discount on your purchases! £ " + totalPrice + " To pay today"
      );
  }
  //Repeat tagline for Help Me Find A Houseplant
  tagline()