const quizQuestions = [
  {
    question: "What year was the U.S. Constitution signed?",
    options: ["1776", "1787", "1789", "1791"],
    correctAnswer: 1,
  },
  {
    question: "How many articles are in the U.S. Constitution?",
    options: ["5", "7", "10", "13"],
    correctAnswer: 1,
  },
  {
    question: "Which of these is NOT a right guaranteed by the First Amendment?",
    options: ["Freedom of speech", "Freedom of religion", "Right to bear arms", "Freedom of the press"],
    correctAnswer: 2,
  },
  {
    question: "Who is considered the 'Father of the Constitution'?",
    options: ["George Washington", "Thomas Jefferson", "James Madison", "Benjamin Franklin"],
    correctAnswer: 2,
  },
  {
    question: "How many amendments are in the Bill of Rights?",
    options: ["5", "10", "15", "20"],
    correctAnswer: 1,
  },
  {
    question: "Which branch of government has the power to declare war?",
    options: ["Executive", "Legislative", "Judicial", "State"],
    correctAnswer: 1,
  },
  {
    question: "What is the minimum age requirement to become President of the United States?",
    options: ["30", "35", "40", "45"],
    correctAnswer: 1,
  },
  {
    question: "Which amendment abolished slavery?",
    options: ["13th", "14th", "15th", "16th"],
    correctAnswer: 0,
  },
  {
    question: "What is the process of adding an amendment to the Constitution called?",
    options: ["Ratification", "Certification", "Modification", "Nullification"],
    correctAnswer: 0,
  },
  {
    question: "Which Supreme Court case established the principle of judicial review?",
    options: ["Roe v. Wade", "Brown v. Board of Education", "Marbury v. Madison", "Plessy v. Ferguson"],
    correctAnswer: 2,
  },
]

let currentQuestion = 0
let score = 0

document.addEventListener("DOMContentLoaded", () => {
  const startQuizButton = document.getElementById("start-quiz")
  const quizIntro = document.getElementById("quiz-intro")
  const quizQuestionsDiv = document.getElementById("quiz-questions")
  const questionContainer = document.getElementById("question-container")
  const answerFeedback = document.getElementById("answer-feedback")
  const nextQuestionButton = document.getElementById("next-question")
  const quizResults = document.getElementById("quiz-results")
  const scoreElement = document.getElementById("score")
  const totalQuestionsElement = document.getElementById("total-questions")
  const scoreBreakdown = document.getElementById("score-breakdown")
  const retryQuizButton = document.getElementById("retry-quiz")

  startQuizButton.addEventListener("click", startQuiz)
  nextQuestionButton.addEventListener("click", loadNextQuestion)
  retryQuizButton.addEventListener("click", retryQuiz)

  function startQuiz() {
    console.log("Starting quiz")
    quizIntro.style.display = "none"
    quizQuestionsDiv.style.display = "block"
    loadQuestion()
  }

  function loadQuestion() {
    console.log("Loading question", currentQuestion)
    if (currentQuestion >= quizQuestions.length) {
      showResults()
      return
    }

    const question = quizQuestions[currentQuestion]
    questionContainer.innerHTML = `
      <h2>Question ${currentQuestion + 1}</h2>
      <p>${question.question}</p>
      <div class="options">
        ${question.options
          .map(
            (option, index) => `
          <button class="option" data-index="${index}">${option}</button>
        `,
          )
          .join("")}
      </div>
    `

    const optionButtons = questionContainer.querySelectorAll(".option")
    optionButtons.forEach((button) => {
      button.addEventListener("click", () => checkAnswer(Number.parseInt(button.dataset.index)))
    })

    answerFeedback.style.display = "none"
    nextQuestionButton.style.display = "none"
  }

  function checkAnswer(selectedIndex) {
    console.log("Checking answer", selectedIndex)
    const question = quizQuestions[currentQuestion]
    const optionButtons = questionContainer.querySelectorAll(".option")

    optionButtons.forEach((button) => (button.disabled = true))

    if (selectedIndex === question.correctAnswer) {
      score++
      answerFeedback.textContent = "Correct!"
      answerFeedback.className = "feedback correct"
    } else {
      answerFeedback.textContent = `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`
      answerFeedback.className = "feedback incorrect"
    }

    answerFeedback.style.display = "block"
    nextQuestionButton.style.display = "block"
  }

  function loadNextQuestion() {
    console.log("Loading next question")
    currentQuestion++
    loadQuestion()
  }

  function showResults() {
    console.log("Showing results")
    quizQuestionsDiv.style.display = "none"
    quizResults.style.display = "block"
    scoreElement.textContent = score
    totalQuestionsElement.textContent = quizQuestions.length

    let breakdownHTML = "<h3>Question Breakdown:</h3><ul>"
    quizQuestions.forEach((question, index) => {
      breakdownHTML += `<li>Question ${index + 1}: ${question.question}<br>Correct Answer: ${question.options[question.correctAnswer]}</li>`
    })
    breakdownHTML += "</ul>"
    scoreBreakdown.innerHTML = breakdownHTML
  }

  function retryQuiz() {
    console.log("Retrying quiz")
    currentQuestion = 0
    score = 0
    quizResults.style.display = "none"
    quizIntro.style.display = "block"
  }
})

