'use strict';

let username = prompt("Hello, could you plase tell me your name?");

function getuserName(){
  console.log("The user's name is" + username);
  document.write('<h2>' + username + ' Please take a moment to know a little about myself!</h2>');
  return username;
}

let usernameReturn = alert("Welcome to my webpage " + username + "!");

let backpacking = prompt("Have you ever been backpacking? Yes or No");
let lowercaseBackpacking = backpacking.toLowerCase();
console.log(backpacking + lowercaseBackpacking);

if (lowercaseBackpacking === "yes" || lowercaseBackpacking === "y") {
  alert("Isn't it such a rewarding experience?")
} else if (lowercaseBackpacking === "no" || lowercaseBackpacking === "n") {
  alert("You're missing out on a truly wonderful experience!");
} else {
  alert("Just a yes or no will do...");
}

let packrafting = prompt("Have you ever been packrafting? Yes or No");
let lowercasePackrafting = packrafting.toLowerCase();
console.log(packrafting + lowercasePackrafting);

if (lowercasePackrafting === "yes" || lowercasePackrafting === "y") {
  alert("This takes backpacking to a whole new level!");
} else if (lowercasePackrafting === "no" || lowercasePackrafting === "n") {
  alert("Oh, but you should! Packrafting allows you to reach places that backpacking could never take you.");
} else {
  alert("You haven't quite caught onto how to answer the question, have you?");
}

let floaternighter = prompt("Do you know what a 'floaternighter' is? Yes or No");
let lowercaseFloaternighter = floaternighter.toLowerCase();
console.log(floaternighter + lowercaseFloaternighter);

if (lowercaseFloaternighter === "yes" || lowercaseFloaternighter === "y") {
  alert("These are one of my favorite ways to go camping!");
} else if (lowercaseFloaternighter === "no" || lowercaseFloaternighter === "n") {
    alert("A 'floaternighter' is a super fun overnight camp trip that uses watercraft to reach your campsite.");
  } else {
    alert("Hmm, you are really struggling to stay on topic!");
  }

  let gearjunkie = prompt("Would you consider yourself a gear junkie (someone that collects lots of items that are related to their hobbies)?");
  let lowercaseGearJunkie = gearjunkie.toLowerCase();
  console.log(gearjunkie + lowercaseGearJunkie);

  if (lowercaseGearJunkie === "yes" || lowercaseGearJunkie === "y") {
    alert("Me too! I am always looking for cool gear to add to my collection!");
  } else if (lowercaseGearJunkie === "no" || lowercaseGearJunkie === "n") {
    alert("Being a gear junkie is not for everyone!");
  } else {
    alert("I've had about enough of this!");
  }

  let outdoorenthusiast = prompt("Do you consider yourself an outdoor enthusiast?");
  let lowercaseOutdoorEnthusiast = outdoorenthusiast.toLowerCase();
  console.log(outdoorenthusiast + lowercaseOutdoorEnthusiast);

  if (lowercaseOutdoorEnthusiast === "yes" || lowercaseOutdoorEnthusiast === "y") {
    alert(username + ", most of our daily lives are centered around the developed world, so I think that it's good to get outdoors as often as possible.");
  } else if (lowercaseOutdoorEnthusiast === "no" || lowercaseOutdoorEnthusiast === "n") {
    alert(username + ", you might be surprised how much you would enjoy giving any remote outdoor activity a try!");
  } else {
    alert(username + ", please leave my webpage!");
  }