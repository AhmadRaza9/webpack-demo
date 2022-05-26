import generateJoke from "./generateJoke";
import generateFun from "./generateFun";

import laughing from "./assets/Laughing.svg";

import "./styles/main.scss";

const laughImg = document.getElementById("laughImg");

laughImg.src = laughing;

const jokeBtn = document.getElementById("jokeBtn");

generateJoke();
jokeBtn.addEventListener("click", generateJoke);
