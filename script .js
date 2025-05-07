const questions = [
  {
    question: "1. Which of these is a Qualcomm processor?",
    options: ["Snapdragon", "Exynos", "A17 Bionic", "Tensor"],
    answer: "Snapdragon"
  },
  {
    question: "2. Who manufactures the Exynos chip?",
    options: ["MediaTek", "Qualcomm", "Samsung", "Apple"],
    answer: "Samsung"
  },
  {
    question: "3. Which processor is developed by Apple?",
    options: ["Snapdragon 8 Gen 2", "A17 Bionic", "Dimensity 9200", "Exynos 2200"],
    answer: "A17 Bionic"
  },
  {
    question: "4. The Dimensity line is created by which company?",
    options: ["Qualcomm", "MediaTek", "Samsung", "Google"],
    answer: "MediaTek"
  },
  {
    question: "5. What's the main focus of Google's Tensor chips?",
    options: ["Raw performance", "3D Gaming", "Artificial Intelligence", "Battery life"],
    answer: "Artificial Intelligence"
  },
  {
    question: "6. What technology is used to produce the A17 chip?",
    options: ["10nm", "7nm", "5nm", "3nm"],
    answer: "3nm"
  },
  {
    question: "7. Which company physically manufactures Apple chips?",
    options: ["Intel", "Samsung", "TSMC", "Foxconn"],
    answer: "TSMC"
  },
  {
    question: "8. What does SoC stand for?",
    options: ["System of Chips", "System on Chip", "Secure on Chip", "Software on Chip"],
    answer: "System on Chip"
  },
  {
    question: "9. What's the main competitor to the Snapdragon 8 Gen 2?",
    options: ["A17 Bionic", "Exynos 1280", "Dimensity 9300", "Tensor G2"],
    answer: "Dimensity 9300"
  },
  {
    question: "10. Which is most common in entry-level smartphones?",
    options: ["Snapdragon 8 Gen 3", "Apple M1", "MediaTek Helio G25", "Exynos 2200"],
    answer: "MediaTek Helio G25"
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
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `q${index + 1}`;
    radio.value = option;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + option));
    div.appendChild(label);
  });

  quizForm.appendChild(div);
});

document.getElementById("submitBtn").addEventListener("click", () => {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  const result = document.getElementById("result");
  result.textContent = `You got ${score} out of ${questions.length} correct.`;
});
