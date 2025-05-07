const questions = [
  {
    question: "Which of these is a Qualcomm processor?",
    options: ["Snapdragon", "Exynos", "A17 Bionic", "Tensor"],
    answer: "Snapdragon"
  },
  {
    question: "Who manufactures the Exynos chip?",
    options: ["MediaTek", "Qualcomm", "Samsung", "Apple"],
    answer: "Samsung"
  },
  {
    question: "Which processor is made by Apple?",
    options: ["Snapdragon 8 Gen 2", "A17 Bionic", "Dimensity 9200", "Exynos 2200"],
    answer: "A17 Bionic"
  },
  {
    question: "The Dimensity line is made by which company?",
    options: ["Qualcomm", "MediaTek", "Samsung", "Google"],
    answer: "MediaTek"
  },
  {
    question: "What is the main feature of Google's Tensor chips?",
    options: ["Gaming", "AI and ML", "Security", "Power saving"],
    answer: "AI and ML"
  },
  {
    question: "Which node size is used for the A17 Pro chip?",
    options: ["10nm", "5nm", "3nm", "7nm"],
    answer: "3nm"
  },
  {
    question: "Which company manufactures Apple chips physically?",
    options: ["Intel", "Samsung", "Foxconn", "TSMC"],
    answer: "TSMC"
  },
  {
    question: "What does SoC stand for?",
    options: ["System of Chips", "Software on Core", "System on Chip", "Speed of Chip"],
    answer: "System on Chip"
  },
  {
    question: "Which chip is a direct competitor to Snapdragon 8 Gen 3?",
    options: ["Tensor G3", "Dimensity 9300", "Apple M2", "Helio G99"],
    answer: "Dimensity 9300"
  },
  {
    question: "Which is common in entry-level smartphones?",
    options: ["Dimensity 9300", "Snapdragon 8 Gen 3", "Helio G25", "Exynos 2400"],
    answer: "Helio G25"
  }
];

const quizForm = document.getElementById("quizForm");

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.className = "question";

  const h3 = document.createElement("h3");
  h3.textContent = q.question;
  div.appendChild(h3);

  q.options.forEach(option => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index}`;
    input.value = option;
    label.appendChild(input);
    label.append(` ${option}`);
    div.appendChild(label);
  });

  quizForm.appendChild(div);
});

document.getElementById("submitBtn").addEventListener("click", () => {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  const result = document.getElementById("result");
  result.textContent = `You got ${score} out of ${questions.length} correct.`;
});
