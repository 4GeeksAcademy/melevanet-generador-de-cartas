/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  generateRandomCard();
};

function generateRandomCard() {
  const suits = ["♥", "♠", "♣", "♦"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const cardTop = document.getElementById("card-top");
  const cardMiddle = document.getElementById("card-middle");
  const cardBottom = document.getElementById("card-bottom");

  cardTop.innerHTML = randomSuit;
  cardMiddle.innerHTML = randomValue;
  cardBottom.innerHTML = randomSuit;

  const isRedSuit = randomSuit === "♥" || randomSuit === "♦";
  cardTop.style.color = isRedSuit ? "red" : "black";
  cardMiddle.style.color = isRedSuit ? "red" : "black";
  cardBottom.style.color = isRedSuit ? "red" : "black";
}
