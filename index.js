function scuberGreetingForFeet(distance){
  // Write your code here!
  let charge
  if (distance < 400) {
    charge = "This one is on me!";
  }
  else if (distance >= 400 && distance <= 2000) {
    charge = "That will be twenty bucks."
  }
  else if (distance > 2000 && distance <= 2500) {
    charge = "I will gladly take your thirty bucks.";
  }
  else {
    charge = "No can do."
  }
  
  return charge;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC"?"Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(generosity){
  // Write your code here!
  switch(generosity){
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
}