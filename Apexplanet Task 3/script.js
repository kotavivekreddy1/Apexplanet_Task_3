/* ---------- Image Carousel ---------- */
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

/* ---------- Quiz ---------- */
const quizData = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "Which method is used to fetch data from an API?",
    options: ["getData()", "fetch()", "request()", "apiCall()"],
    answer: "fetch()"
  }
];

const quizContainer = document.getElementById("quiz");

function loadQuiz() {
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(option => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${option}"> ${option}
        </label><br>
      `;
    });
    quizContainer.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  document.getElementById("quiz-result").innerText =
    `You scored ${score} out of ${quizData.length}`;
}

loadQuiz();

/* ---------- Fetch API ---------- */
async function getJoke() {
  try {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: { "Accept": "application/json" }
    });
    const data = await res.json();
    document.getElementById("joke").innerText = data.joke;
  } catch (error) {
    document.getElementById("joke").innerText = "Failed to load joke.";
  }
}
