let trainers = ['StarMukesh', 'Vicky', 'Manoj', 'Nathan', 'Ram'];
console.log("List of Trainers:", trainers);
console.log("Number of Trainers:", trainers.length);

let trainerList = document.getElementById("trainer-list");
trainers.forEach(function(trainer) {
    let listItem = document.createElement("li");
    listItem.textContent = trainer;
    trainerList.appendChild(listItem);
});

let member = {
    name: "Star",
    age: 25,
    membershipType: "Premium"
};
console.log("Member Details:", member);
console.log("Member Name:", member.name);
console.log("Member Age:", member.age);
console.log("Member Membership Type:", member.membershipType);

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num);
});

let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled Numbers:", doubled);

let input = document.getElementById("trainer-input");
let addButton = document.getElementById("add-trainer-btn");

addButton.addEventListener("click", function() {
  let newTrainerName = input.value;

  let li = document.createElement("li");
  li.textContent = newTrainerName;
  trainerList.appendChild(li);

  input.value = "";
});

let form = document.getElementById("contact-form");
let nameInput = document.getElementById("contact-name");
let emailInput = document.getElementById("contact-email");
let message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();  

  if (nameInput.value === "") {
    message.textContent = "Please enter your name.";
  } else if (!emailInput.value.includes("@")) {
    message.textContent = "Please enter a valid email.";
  } else {
    message.textContent = "Thanks! We'll contact you soon.";
  }
});

let learnButtons = document.querySelectorAll(".card button");

learnButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    let info = btn.nextElementSibling;
    info.classList.toggle("hidden");
  });
});


let modal = document.getElementById("join-modal");
let joinButton = document.querySelector(".join-btn");
let closeButton = document.getElementById("close-modal");

joinButton.addEventListener("click", function() {
  modal.classList.remove("hidden");   
});

closeButton.addEventListener("click", function() {
  modal.classList.add("hidden");   
});


let quoteText = document.getElementById("quote-text");
let newQuoteBtn = document.getElementById("new-quote-btn");

async function getQuote() {
  try {
    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json();
    quoteText.textContent = data.quote;
  } catch (error) {
    quoteText.textContent = "Couldn't load a quote right now.";
  }
}

newQuoteBtn.addEventListener("click", getQuote);
getQuote(); 