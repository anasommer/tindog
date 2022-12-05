import dogs from "./data.js";
import Dog from "./Dog.js";

//buttons & badge img
const likeBtn = document.getElementById("btn-like");
const dislikeBtn = document.getElementById("btn-dislike");
const badgeImg = document.getElementById("badge");

// index of the first dog when app starts
let index = 0;

// Make array of dogs
const dogsArray = dogs.map((dog) => new Dog(dog));

// If Like button is clicked - show Like badge
likeBtn.addEventListener("click", function () {
  badgeImg.setAttribute("src", "./images/badge-like.png");
  badgeImg.classList.remove("hidden");
  showNextDog();
});

// If Dislike button is clicked - show Dislike badge
dislikeBtn.addEventListener("click", function () {
  badgeImg.setAttribute("src", "./images/badge-nope.png");
  badgeImg.classList.remove("hidden");
  showNextDog();
});

// Show next dog 1,5 seconds after user clicks button
function showNextDog() {
  setTimeout(() => {
    index++;
    // Infinite loop through array
    index === dogsArray.length ? (index = 0) : index;
    render(index);
    badgeImg.classList.add("hidden");
  }, 1500);
}

// Render HTML of 1 dog to the page
function render(index) {
  document.getElementById("profile").innerHTML =
    dogsArray[index].createDogHtml();
}

render(index);
