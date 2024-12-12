import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: 1,
    explanation: "New Delhi is the capital of India.",
    images: [
      "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSOg9kPXQnT16Vq1LEQcekBft3WG-4Ar3ZoHDGRbclJ94i825msPy7omTnFnf5B31XxvMea4L9eR7zOY-cqDVoEPcMsrXrIBtWN3eDOxn4",
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRxk3PCaVAIl6NC50O7jKizccgq-aMZbpW3rPq3vmbcuFeUdc85Edhzu4QjWqCMHJ-NzB__WnKn4SeJbI-jJSzxgsdMJzFPwZcsn__xhw",
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg",
    ],
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: 0,
    explanation: "Paris is the capital of France.",
    images: [],
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
    answer: 0,
    explanation: "Tokyo is the capital of Japan.",
    images: [],
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 2,
    explanation: "Jupiter is the largest planet in our solar system.",
    images: [],
  },
  {
    question: "What is the boiling point of water?",
    options: ["100°C", "50°C", "200°C", "150°C"],
    answer: 0,
    explanation: "Water boils at 100°C under standard atmospheric conditions.",
    images: [],
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
    answer: 1,
    explanation: "Albert Einstein developed the theory of relativity.",
    images: [],
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Go", "Pt"],
    answer: 0,
    explanation: "The chemical symbol for gold is Au.",
    images: [],
  },
  {
    question: "Which continent is known as the Dark Continent?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    answer: 1,
    explanation: "Africa was historically referred to as the Dark Continent.",
    images: [],
  },
  {
    question: "What is the speed of light?",
    options: ["3x10^8 m/s", "2x10^8 m/s", "1x10^8 m/s", "4x10^8 m/s"],
    answer: 0,
    explanation: "The speed of light in a vacuum is approximately 3x10^8 m/s.",
    images: [],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
    answer: 0,
    explanation: "William Shakespeare wrote 'Romeo and Juliet'.",
    images: [],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [timer, setTimer] = useState(60);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          setFeedback(`Time's up! Your score is ${score}/${questions.length}`);
        }
        return prevTimer - 1;
      });
    }, 1000);
    setTimerInterval(interval);

    return () => clearInterval(interval);
  }, [score]);

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  };

  const showQuestion = (index) => {
    setFeedback('');
    setCurrentQuestion(index);
    setIsAnswered(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAnswered) return;

    stopTimer();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      const answer = parseInt(selectedOption.value);
      if (answer === questions[currentQuestion].answer) {
        setFeedback('Correct!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setFeedback(`Wrong! The correct answer is ${questions[currentQuestion].options[questions[currentQuestion].answer]}. ${questions[currentQuestion].explanation}`);
      }
      setIsAnswered(true);
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          showQuestion(currentQuestion + 1);
        } else {
          setFeedback(`Quiz Over! Your score is ${score}/${questions.length}`);
        }
      }, 2000);
    } else {
      setFeedback('Please select an option!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <header className="bg-blue-500 text-white p-12 shadow-md text-center">
        <h1 className="text-3xl font-bold">Quiz Master</h1>
      </header>

      <main className="max-w-xl mx-auto p-5 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold">General Knowledge</h2>
        <form id="quiz-form" onSubmit={handleSubmit}>
          <div id="question-container">
            <div className="question mb-5">
              <p id="question-text" className="text-lg mb-2">{questions[currentQuestion].question}</p>
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index} className="flex items-center mb-2 p-2 border rounded cursor-pointer hover:bg-gray-200">
                  <input type="radio" name="option" value={index} className="mr-2" />
                  {questions[currentQuestion].images[index] && (
                    <img src={questions[currentQuestion].images[index]} alt={`Option ${index + 1}`} className="max-w-[50px] mr-2" />
                  )}
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <div className="feedback mt-2 text-lg" id="feedback">{feedback}</div>
          </div>
          <button type="submit" className="block w-full mt-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
        <div className="progress text-center mt-5" id="progress">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="timer text-center mt-2" id="timer">
          {`0${Math.floor(timer / 60)}`.slice(-2)}:{`0${timer % 60}`.slice(-2)}
        </div>
      </main>

      <footer className="bg-blue-500 text-white p-4 text-center">
        <p className="text-sm">© 2024 Quiz Master. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Quiz;
