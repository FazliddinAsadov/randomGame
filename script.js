const start = document.querySelector(".start");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const res1 = document.querySelector(".res1");
const res2 = document.querySelector(".res2");
const section = document.querySelector("#item");

function openStart() {
  section.classList.add("active");
}
const backIcon = document.querySelector(".back");

function back() {
  section.classList.remove("active");
}

start.addEventListener("click", openStart);
backIcon.addEventListener("click", back);

let player1;
let player2;

let count1 = 0;
btn1.addEventListener("click", () => {
  player1 = Math.floor(Math.random() * 100);
  res1.textContent = player1;
});
btn2.addEventListener("click", () => {
  player2 = Math.floor(Math.random() * 100);
  res2.textContent = player2;
});

const total = document.querySelector(".total");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");

const counter1 = document.querySelector(".counter1");
const counter2 = document.querySelector(".counter2");

console.log(counter1);
console.log(counter2);

const imkon = document.querySelector(".imkon");
let imkonSana = 5;
let golibSana1 = 0;
let golibSana2 = 0;

total.addEventListener("click", () => {
  imkonSana--;
  if (player1 > player2) {
    answer1.innerHTML = `Win <br> <span style="font-size: 100px">&#128526;</span>`;
    answer2.innerHTML = `Lose <br> <span style="font-size: 100px">&#128557;</span>`;
    counter1.textContent = 1 + golibSana1++;
    counter2.textContent = golibSana2;
  } else if (player1 < player2) {
    answer1.innerHTML = `Lose <br> <span style="font-size: 100px">&#128557;</span>`;
    answer2.innerHTML = `Win <br> <span style="font-size: 100px">&#128526;</span>`;
    counter1.textContent = golibSana1;
    counter2.textContent = 1 + golibSana2++;
  } else {
    answer1.textContent = "Teng";
    answer2.textContent = "Teng";
    counter1.textContent = 1;
    counter2.textContent = 1;
  }
  imkon.textContent = "Imkoniyat:" + imkonSana;
  if (imkonSana == 0) {
    total.remove();
    if (golibSana1 > golibSana2) {
      answer1.innerHTML = `Win <br> <span style="font-size: 100px">&#128526;</span>`;
      answer2.innerHTML = `Lose <br> <span style="font-size: 100px">&#128557;</span>`;
      alert("Tabriklaymiz siz yutdingiz");
    } else {
      alert("Afsus hali bor ekan yutishinga");
      answer1.innerHTML = `Lose <br> <span style="font-size: 100px">&#128557;</span>`;
      answer2.innerHTML = `Win <br> <span style="font-size: 100px">&#128526;</span>`;
    }
  }
  console.log(golibSana1);
  console.log(golibSana2);
});

const refresh = document.querySelector(".refresh");

refresh.addEventListener("click", () => {
  location.reload();
});
