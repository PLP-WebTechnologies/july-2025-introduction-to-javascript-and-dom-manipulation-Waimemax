// Part 1: Basics
// Variables, Conditionals, and User Input Simulation
let userAge = 20; // imagine we captured user input
if (userAge >= 18) {
  document.getElementById("age-result").textContent = "You are an adult.";
} else {
  document.getElementById("age-result").textContent = "You are a minor.";
}

// Part 2: Functions
// Function 1: Calculate Discount
function calculateDiscount(price, discountPercent) {
  return price - (price * (discountPercent / 100));
}

// Function 2: Display Discount Result
function showDiscount() {
  let price = 100;
  let discount = 15;
  let finalPrice = calculateDiscount(price, discount);
  document.getElementById("discount-result").textContent =
    `Original: $${price}, Discount: ${discount}%, Final Price: $${finalPrice}`;
}

// Part 3: Loops
// Example 1: Countdown using for loop
function countdown() {
  let result = "";
  for (let i = 5; i >= 1; i--) {
    result += i + " ";
  }
  document.getElementById("countdown-result").textContent = "Countdown: " + result;
}

// Example 2: Iterating over an array
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => {
  console.log("Fruit: " + fruit); // output to console
});

// Part 4: DOM Manipulation
// Example 1: Toggle text visibility
document.getElementById("toggle-btn").addEventListener("click", function() {
  let text = document.getElementById("toggle-text");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

// Example 2: Add new list items dynamically
document.getElementById("add-item-btn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New Item " + (document.querySelectorAll("#dynamic-list li").length + 1);
  document.getElementById("dynamic-list").appendChild(li);
});

// Example 3: Change content dynamically
document.getElementById("toggle-text").addEventListener("mouseover", function() {
  this.textContent = "Hovered over me!";
});
document.getElementById("toggle-text").addEventListener("mouseout", function() {
  this.textContent = "Hello, I’m visible!";
});
