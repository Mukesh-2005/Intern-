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

let Button = document.getElementById("myButton");
let output = document.getElementById("output");

Button.addEventListener("click", function() {
    output.textContent = "Button Clicked!";
});

let input = document.getElementById("trainer-input");
let addButton = document.getElementById("add-trainer-btn");

addButton.addEventListener("click", function() {
  let newTrainerName = input.value;

  let li = document.createElement("li");
  li.textContent = newTrainerName;
  trainerList.appendChild(li);

  input.value = "";
});
