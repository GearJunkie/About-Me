// 'use strict'

// let guessScore = 0;
// // let guessScore;
// let username = prompt("Hello, could you plase tell me your name?");
// //line 3 is called a statement and statements always end with a semicolon. username is the object. = is an assignement operator. prompt() is a method. The content within the () is called the parameters.

// function getuserName(){
//   console.log("The user's name is" + username);
//   document.write('<h1>' + username + ' please take a moment to know a little about myself!</h1>');
//   return username;
// }
// getuserName();
// //A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

// alert("Welcome to my webpage " + username + "!");

// function questionOne(){
//   //"let" is a variable keyword. "usernameReturn" is the variable name. let usernameReturn is declaring a variable. = alert() is the variable value.
//   let backpacking = prompt("Have you ever been backpacking? Yes or No");
//   let lowercaseBackpacking = backpacking.toLowerCase();
//   //the dot between backpacking.toLowerCase() is a member operator.
//   console.log(backpacking + lowercaseBackpacking);

//   if (lowercaseBackpacking === "yes" || lowercaseBackpacking === "y") {
//     alert("Isn't it such a rewarding experience?")
//     guessScore++
//   } else if (lowercaseBackpacking === "no" || lowercaseBackpacking === "n") {
//     alert("You're missing out on a truly wonderful experience!");
//   } else {
//     alert("Just a yes or no will do...");
//   }
//   //This is a conditional statement. The condition is contained w/in the (). "If" a condition is met, "then" your code executes one or more statements, "else" your code executes something different.
// }
// questionOne();

// function questionTwo(){
//   let packrafting = prompt("Have you ever been packrafting? Yes or No");
//   let lowercasePackrafting = packrafting.toLowerCase();
//   console.log(packrafting + lowercasePackrafting);

//   if (lowercasePackrafting === "yes" || lowercasePackrafting === "y") {
//     alert("This takes backpacking to a whole new level!");
//     guessScore++
//   } else if (lowercasePackrafting === "no" || lowercasePackrafting === "n") {
//     alert("Oh, but you should! Packrafting allows you to reach places that backpacking could never take you.");
//   } else {
//     alert("You haven't quite caught onto how to answer the question, have you?");
//   }
// }
// questionTwo();

// function questionThree(){
//   let floaternighter = prompt("Do you know what a 'floaternighter' is? Yes or No");
//   let lowercaseFloaternighter = floaternighter.toLowerCase();
//   console.log(floaternighter + lowercaseFloaternighter);

//   if (lowercaseFloaternighter === "yes" || lowercaseFloaternighter === "y") {
//     alert("These are one of my favorite ways to go camping!");
//     guessScore++
//   } else if (lowercaseFloaternighter === "no" || lowercaseFloaternighter === "n") {
//       alert("A 'floaternighter' is a super fun overnight camp trip that uses watercraft to reach your campsite.");
//   } else {
//       alert("Hmm, you are really struggling to stay on topic!");
//   }
// }
// questionThree();

// function questionFour(){
//   let gearjunkie = prompt("Would you consider yourself a gear junkie (someone that collects lots of items that are related to their hobbies)?");
//   let lowercaseGearJunkie = gearjunkie.toLowerCase();
//     console.log(gearjunkie + lowercaseGearJunkie);

//   if (lowercaseGearJunkie === "yes" || lowercaseGearJunkie === "y") {
//       alert("Me too! I am always looking for cool gear to add to my collection!");
//       guessScore++
//   } else if (lowercaseGearJunkie === "no" || lowercaseGearJunkie === "n") {
//       alert("Being a gear junkie is not for everyone!");
//   } else {
//       alert("I've had about enough of this!");
//   }
// }
// questionFour();

// function questionFive(){
//   let outdoorenthusiast = prompt("Do you consider yourself an outdoor enthusiast?");
//   let lowercaseOutdoorEnthusiast = outdoorenthusiast.toLowerCase();
//     console.log(outdoorenthusiast + lowercaseOutdoorEnthusiast);

//   if (lowercaseOutdoorEnthusiast === "yes" || lowercaseOutdoorEnthusiast === "y") {
//       alert(username + ", most of our daily lives are centered around the developed world, so I think that it's good to get outdoors as often as possible.");
//       guessScore++
//   } else if (lowercaseOutdoorEnthusiast === "no" || lowercaseOutdoorEnthusiast === "n") {
//       alert(username + ", you might be surprised how much you would enjoy giving any remote outdoor activity a try!");
//   } else {
//       alert(username + ", please leave my webpage!");
//   }
// }
// questionFive();

// function questionSix(){
//   let correctAnswer = 39
//   let userAttempts = 4
//   for (let i = 0; i < userAttempts; i++){
//     let userGuess = prompt("Can you guess my age? Choose a number between 1-50");
//       while (userGuess < 1 || userGuess > 50) {
//           userGuess = prompt("Not within the Range. Please enter a number between 1 and 50");
//       }
//       if (userGuess == correctAnswer) {
//           alert("Yes, I'm 39 years old!");
//           guessScore++
//           break;
//       } else if (userGuess < correctAnswer) {
//           alert("too low, try again")
//       } else if (userGuess > correctAnswer) {
//           alert("too high, try again")
//       } else {
//           alert("Something Else Went Wrong.");
//       }
//       console.log(i);
//       if (i == userAttempts -1) {
//           alert("You did not guess my correct age. The correct answer is: " + correctAnswer);
//       }
//   }
// }
// questionSix();

// function questionSeven(){
// let cuisineArray = ["peruvian", "mediterranean", "korean"];
// let guessAttempts = 6;
// let theRightAnswer = false;
  
//   while (theRightAnswer === false && guessAttempts > 0) {
//     let userGuess = prompt("Name one of my favorite types of cuisine!");
//     for (let index = 0; index < cuisineArray.length; index++) {
//       if (userGuess === cuisineArray[index]) {
//         alert("Yes, you got it! My favorite cuisines are Peruvian, Mediterranean, and Korean.");
//         guessScore++
//         theRightAnswer = true;
//       break;
//       }
//     }
//       if (theRightAnswer === false && guessAttempts > 1) {
//         alert("Sorry, but that is not one of my favorites. Please try again.");
//     }
//       else if (theRightAnswer === false && guessAttempts == 1) {
//         alert("You did not answer correctly. The answers were; Peruvian, Mediterranean, and Korean.")
//         theRightAnswer = true;
//         break;
//       }
//     guessAttempts--
//   }
//   alert("Yay! You got " + guessScore + " of 7 questions correct!");
// }
// questionSeven();