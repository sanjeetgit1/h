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
  // Add more questions here
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
    <div className="max-w-xl mx-auto p-5 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-center text-2xl font-bold">General Knowledge</h1>
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
    </div>
  );
};

export default Quiz;
