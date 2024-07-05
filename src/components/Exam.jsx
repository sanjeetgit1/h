import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import moment from "moment";
import logo from "../components/logo.png"; // Import your logo or image here

const Exam = () => {
    const location = useLocation();
    const { questions } = location.state;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [userName, setUserName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [timeLeft, setTimeLeft] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const navigate = useNavigate();

    // Timer settings
    const examDurationMinutes = 30; // Adjust as needed
    const examEndTime = moment().add(examDurationMinutes, 'minutes');

    useEffect(() => {
        if (timerRunning) {
            const interval = setInterval(() => {
                const secondsLeft = examEndTime.diff(moment(), 'seconds');
                if (secondsLeft <= 0) {
                    clearInterval(interval);
                    handleTimeUp();
                } else {
                    setTimeLeft(secondsLeft);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [timerRunning, examEndTime]);

    const startTimer = () => {
        setTimerRunning(true);
    };

    const handleAnswerChange = (e) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestion]: e.target.value
        });
    };

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
    };

    const handleSubmit = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.answer) {
                newScore++;
            }
        });
        setScore(newScore);
        setShowResults(true);
    };

    const generateCertificate = () => {
        const doc = new jsPDF();

        // Adding course name and logo/image
        const courseName = "React Certification Exam"; // Replace with your course name
        const imgData = logo; // Replace with your logo or image import

        // Certificate layout
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, 210, 297, 'F');
        doc.setDrawColor(255, 255, 0); // Yellow border color
        doc.setLineWidth(10); // Border width
        doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'D');

        doc.setTextColor(41, 128, 185); // Dark blue text color
        doc.setFontSize(30);
        doc.text("Certificate of Completion", 105, 40, { align: "center" });

        doc.setTextColor(0); // Reset text color to black
        doc.setFontSize(18);
        doc.text("This is to certify that", 105, 80, { align: "center" });

        doc.setTextColor(231, 76, 60); // Red text color
        doc.setFontSize(24);
        doc.text(userName, 105, 100, { align: "center" });

        doc.setTextColor(0); // Reset text color to black
        doc.setFontSize(18);
        doc.text("has successfully completed the", 105, 120, { align: "center" });

        doc.setTextColor(41, 128, 185); // Dark blue text color
        doc.setFontSize(24);
        doc.text(courseName, 105, 140, { align: "center" });

        doc.setFontSize(18);
        doc.text("exam.", 105, 160, { align: "center" });

        // Inserting image/logo
        doc.addImage(imgData, 'PNG', 80, 170, 50, 50); // Adjust image dimensions and position

        doc.save("certificate.pdf");
    };

    const handleFeedbackSubmit = () => {
        const feedbackData = {
            userName,
            feedback,
            score
        };
        console.log(feedbackData);  // You can replace this with an API call to send the feedback to your server
        alert("Feedback submitted!");
    };

    const handleTimeUp = () => {
        setTimerRunning(false);
        handleSubmit();
    };

    if (showResults) {
        return (
            <div className="bg-cream-100 min-h-screen w-full flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">Your Score: {score} / {questions.length}</h2>
                {score >= 6 && (
                    <>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            value={userName} 
                            onChange={(e) => setUserName(e.target.value)} 
                            className="mb-4 p-2 border rounded"
                        />
                        <button 
                            className="mt-4 bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700" 
                            onClick={generateCertificate}
                        >
                            Download Certificate
                        </button>
                    </>
                )}
                <textarea 
                    placeholder="Enter your feedback" 
                    value={feedback} 
                    onChange={(e) => setFeedback(e.target.value)} 
                    className="mt-4 p-2 border rounded w-full max-w-xl"
                />
                <button 
                    className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700" 
                    onClick={handleFeedbackSubmit}
                >
                    Submit Feedback
                </button>
                <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700" onClick={() => navigate("/")}>
                    Back to Courses
                </button>
            </div>
        );
    }

    return (
        <div className="bg-cream-100 min-h-screen w-full flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
                <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1} / {questions.length}</h2>
                <p className="mb-4">{questions[currentQuestion].question}</p>
                {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="mb-2">
                        <label>
                            <input 
                                type="radio" 
                                name={`question-${currentQuestion}`} 
                                value={option} 
                                checked={userAnswers[currentQuestion] === option} 
                                onChange={handleAnswerChange} 
                            />
                            {option}
                        </label>
                    </div>
                ))}
                <div className="mt-4 flex justify-between">
                    <button 
                        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400" 
                        onClick={handlePreviousQuestion} 
                        disabled={currentQuestion === 0}
                    >
                        Previous
                    </button>
                    {currentQuestion < questions.length - 1 ? (
                        <button 
                            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700" 
                            onClick={handleNextQuestion}
                        >
                            Next
                        </button>
                    ) : (
                        <button 
                            className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700" 
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
            {timerRunning && (
                <div className="fixed bottom-4 right-4 bg-white p-2 rounded-md shadow-md">
                    <p>Time Left: {moment.utc(timeLeft * 1000).format('mm:ss')}</p>
                </div>
            )}
            {!timerRunning && (
                <div className="fixed bottom-4 right-4 bg-white p-2 rounded-md shadow-md">
                    <p>Exam completed!</p>
                </div>
            )}
            
        </div>
    );
};

export default Exam;
