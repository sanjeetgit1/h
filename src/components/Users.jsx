import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const courses = [
        {
            id: 1,
            name: "C++",
            level: "Beginner",
            description: "Learn the basics of C++ programming.",
            questions: [
                { id: 1, question: "What is a pointer?", options: ["A variable", "A function", "A data type", "None of the above"], answer: "A variable" },
                { id: 2, question: "What is the correct syntax to declare an integer variable in C++?", options: ["int var;", "integer var;", "var int;", "var integer;"], answer: "int var;" },
                { id: 3, question: "Which of the following is a correct identifier in C++?", options: ["$var_name", "VAR_NAME", "varName", "var-name"], answer: "varName" },
                { id: 4, question: "What is the size of 'int' data type in C++?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], answer: "4 bytes" },
                { id: 5, question: "Which operator is used to allocate memory dynamically in C++?", options: ["new", "malloc", "alloc", "allocate"], answer: "new" },
                { id: 6, question: "What is the default access specifier in C++?", options: ["public", "private", "protected", "None of the above"], answer: "private" },
                { id: 7, question: "What is the use of 'virtual' keyword in C++?", options: ["To define a virtual function", "To create a virtual memory", "To define a virtual class", "None of the above"], answer: "To define a virtual function" },
                { id: 8, question: "What is the correct way to declare a constant in C++?", options: ["const int var;", "constant int var;", "final int var;", "const var int;"], answer: "const int var;" },
                { id: 9, question: "What is the output of 'cout << 5 % 2;'?", options: ["0", "1", "2", "5"], answer: "1" },
                { id: 10, question: "What is the use of the 'delete' operator in C++?", options: ["To delete a file", "To delete a variable", "To deallocate memory", "To terminate a program"], answer: "To deallocate memory" },
            ]
        },
        {
            id: 2,
            name: "Java",
            level: "Intermediate",
            description: "Enhance your Java programming skills.",
            questions: [
                { id: 1, question: "What is the size of int data type in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], answer: "4 bytes" },
                { id: 2, question: "Which of the following is not a Java feature?", options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic"], answer: "Use of pointers" },
                { id: 3, question: "Which of these cannot be used for a variable name in Java?", options: ["identifier", "keyword", "variable", "constant"], answer: "keyword" },
                { id: 4, question: "Which method is used to start a thread in Java?", options: ["run()", "start()", "init()", "resume()"], answer: "start()" },
                { id: 5, question: "Which of these packages contains the exception class?", options: ["java.io", "java.util", "java.lang", "java.net"], answer: "java.lang" },
                { id: 6, question: "Which keyword is used for accessing the features of a package?", options: ["package", "import", "extends", "export"], answer: "import" },
                { id: 7, question: "Which of the following is a reserved keyword in Java?", options: ["object", "strictfp", "main", "system"], answer: "strictfp" },
                { id: 8, question: "Which method can be defined only once in a program?", options: ["main method", "finalize method", "static method", "private method"], answer: "main method" },
                { id: 9, question: "What is the return type of the hashCode() method in the Object class?", options: ["Object", "int", "long", "void"], answer: "int" },
                { id: 10, question: "Which of the following is a marker interface?", options: ["Runnable interface", "Remote interface", "Readable interface", "Result interface"], answer: "Remote interface" },
            ]
        },
        {
            id: 3,
            name: "Python",
            level: "Advanced",
            description: "Master Python for advanced applications.",
            questions: [
                { id: 1, question: "What is the output of print(2 ** 3)?", options: ["6", "8", "9", "12"], answer: "8" },
                { id: 2, question: "Which of the following is a Python tuple?", options: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "{'a': 1, 'b': 2}"], answer: "(1, 2, 3)" },
                { id: 3, question: "What does the 'len' function do?", options: ["Adds two numbers", "Finds the length of a string", "Finds the length of a list", "Both b and c"], answer: "Both b and c" },
                { id: 4, question: "Which of the following is not a keyword in Python?", options: ["pass", "eval", "assert", "nonlocal"], answer: "eval" },
                { id: 5, question: "What is the output of print(0.1 + 0.2 == 0.3)?", options: ["True", "False", "None", "Error"], answer: "False" },
                { id: 6, question: "Which of these is not a core data type?", options: ["Lists", "Dictionary", "Tuples", "Class"], answer: "Class" },
                { id: 7, question: "Which keyword is used for function in Python?", options: ["fun", "define", "function", "def"], answer: "def" },
                { id: 8, question: "What is the maximum possible length of an identifier in Python?", options: ["16", "32", "64", "None of these above"], answer: "None of these above" },
                { id: 9, question: "Which of the following is used to define a block of code in Python?", options: ["Indentation", "Brackets", "Parentheses", "Quotes"], answer: "Indentation" },
                { id: 10, question: "Which of the following functions checks if all characters in a string are digits?", options: ["isdigit()", "isalnum()", "isdecimal()", "isnumeric()"], answer: "isdigit()" },
            ]
        },
        {
            id: 4,
            name: "HTML",
            level: "Beginner",
            description: "Understand the fundamentals of HTML.",
            questions: [
                { id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"], answer: "Hyper Text Markup Language" },
                { id: 2, question: "Who is the father of HTML?", options: ["Rasmus Lerdorf", "Tim Berners-Lee", "Brendan Eich", "Sergey Brin"], answer: "Tim Berners-Lee" },
                { id: 3, question: "What does <a> tag stand for?", options: ["Anchor", "Array", "Alpha", "None of these"], answer: "Anchor" },
                { id: 4, question: "Which of the following is the correct syntax to comment out something in HTML?", options: ["<!-- This is a comment -->", "// This is a comment", "'This is a comment'", "/* This is a comment */"], answer: "<!-- This is a comment -->" },
                { id: 5, question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<img>", "<h1>", "<p>"], answer: "<a>" },
                { id: 6, question: "What is the use of the <br> tag in HTML?", options: ["To break a line", "To break a paragraph", "To break a sentence", "None of these"], answer: "To break a line" },
                { id: 7, question: "Which attribute is used to provide a unique name to an HTML element?", options: ["id", "class", "type", "name"], answer: "id" },
                { id: 8, question: "Which of the following HTML Elements is used for making any text bold?", options: ["<p>", "<i>", "<b>", "<u>"], answer: "<b>" },
                { id: 9, question: "How can you make a bulleted list with numbers?", options: ["<ul>", "<ol>", "<li>", "<dl>"], answer: "<ol>" },
                { id: 10, question: "Which HTML tag is used to display the power in expression (A^B)?", options: ["<sup>", "<sub>", "<superscript>", "<super>"], answer: "<sup>" },
            ]
        },
        {
            id: 5,
            name: "DBMS",
            level: "Beginner",
            description: "Understand the fundamentals of DBMS.",
            questions: [
                { id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"], answer: "Hyper Text Markup Language" },
                { id: 2, question: "Who is the father of HTML?", options: ["Rasmus Lerdorf", "Tim Berners-Lee", "Brendan Eich", "Sergey Brin"], answer: "Tim Berners-Lee" },
                { id: 3, question: "What does <a> tag stand for?", options: ["Anchor", "Array", "Alpha", "None of these"], answer: "Anchor" },
                { id: 4, question: "Which of the following is the correct syntax to comment out something in HTML?", options: ["<!-- This is a comment -->", "// This is a comment", "'This is a comment'", "/* This is a comment */"], answer: "<!-- This is a comment -->" },
                { id: 5, question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<img>", "<h1>", "<p>"], answer: "<a>" },
                { id: 6, question: "What is the use of the <br> tag in HTML?", options: ["To break a line", "To break a paragraph", "To break a sentence", "None of these"], answer: "To break a line" },
                { id: 7, question: "Which attribute is used to provide a unique name to an HTML element?", options: ["id", "class", "type", "name"], answer: "id" },
                { id: 8, question: "Which of the following HTML Elements is used for making any text bold?", options: ["<p>", "<i>", "<b>", "<u>"], answer: "<b>" },
                { id: 9, question: "How can you make a bulleted list with numbers?", options: ["<ul>", "<ol>", "<li>", "<dl>"], answer: "<ol>" },
                { id: 10, question: "Which HTML tag is used to display the power in expression (A^B)?", options: ["<sup>", "<sub>", "<superscript>", "<super>"], answer: "<sup>" },
            ]
        },
        {
            id: 6,
            name: "DEEP LEARNING",
            level: "Beginner",
            description: "Understand the fundamentals of DEEP LEARNING.",
            questions: [
                { id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"], answer: "Hyper Text Markup Language" },
                { id: 2, question: "Who is the father of HTML?", options: ["Rasmus Lerdorf", "Tim Berners-Lee", "Brendan Eich", "Sergey Brin"], answer: "Tim Berners-Lee" },
                { id: 3, question: "What does <a> tag stand for?", options: ["Anchor", "Array", "Alpha", "None of these"], answer: "Anchor" },
                { id: 4, question: "Which of the following is the correct syntax to comment out something in HTML?", options: ["<!-- This is a comment -->", "// This is a comment", "'This is a comment'", "/* This is a comment */"], answer: "<!-- This is a comment -->" },
                { id: 5, question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<img>", "<h1>", "<p>"], answer: "<a>" },
                { id: 6, question: "What is the use of the <br> tag in HTML?", options: ["To break a line", "To break a paragraph", "To break a sentence", "None of these"], answer: "To break a line" },
                { id: 7, question: "Which attribute is used to provide a unique name to an HTML element?", options: ["id", "class", "type", "name"], answer: "id" },
                { id: 8, question: "Which of the following HTML Elements is used for making any text bold?", options: ["<p>", "<i>", "<b>", "<u>"], answer: "<b>" },
                { id: 9, question: "How can you make a bulleted list with numbers?", options: ["<ul>", "<ol>", "<li>", "<dl>"], answer: "<ol>" },
                { id: 10, question: "Which HTML tag is used to display the power in expression (A^B)?", options: ["<sup>", "<sub>", "<superscript>", "<super>"], answer: "<sup>" },
            ]
        },
    ];

    const navigate = useNavigate();

    const handleStartExam = (course) => {
        navigate(`/exam/${course.id}`, { state: { questions: course.questions } });
    };

    return (
        <div className="absolute left-0 z-[-20]">
            	  <div className="  w-[100vw] h-[100vh]  bg-[#003e33f1] font-sans">
        <div className="firstpage w-full h-full flex ">
           <img className=" w-[20vw] absolute -inset-9 rotate-[-10deg] mt-[10vw]" src="https://craftohtml.themezaa.com/images/demo-elearning-01.png" alt="" />
          <div className="leftside  w-[40vw]  flex justify-center items-center">
           
            <div className=" w-[100vw] h-[100vh] z-50 flex justify-center items-center text-white  ">
              <div>
			  <h1 className="text-[3.4vw] ml-[10vw] font-bold text-yellow-500">Certification Courses</h1>
              <h1 className="text-[3vw] ml-[10vw] font-bold  leading-10 ">We'd love to hear</h1>
              <h1 className="text-[3vw] ml-[10vw] font-bold ">from your side</h1>
              <p className="w-[28vw] ml-[10vw] text-[1.4vw] opacity-50 ">Online courses from the world's leading experts. Join 17 million learners today.</p>
        
              
              </div>
           

            </div>
           
          </div>
          <div className="rightside  w-[60vw]   flex justify-center relative overflow-hidden ">
            <img
              className="w-[45vw] absolute mt-[5vw]   "
              src="https://craftohtml.themezaa.com/images/demo-elearning-testimonials-01.png"
              alt=""
            />
            <img
              className="w-[43vw] absolute ml-5 "
              src="https://craftohtml.themezaa.com/images/demo-elearning-hero-banner-02.png"
              alt=""
            />
          </div>
        </div>
      </div>
        <div className="bg-cream-100 min-h-screen mt-10 w-full overflow-x-hidden flex flex-col">
            <header className="text-white p-4 w-full">
            </header>
            <div className="flex-grow p-4 w-full overflow-x-hidden">
                <h2 className="text-3xl font-bold mb-8 text-center">Certification Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-screen-lg">
                    {courses.map(course => (
                        <div 
                            key={course.id} 
                            className="rounded-lg shadow-md p-4 flex flex-col justify-between bg-opacity-70"
                            style={{ backgroundColor: "#00483C" }}
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{course.name}</h3>
                                <p className="text-sm text-white mb-4">{course.description}</p>
                                <p className="text-sm text-white mb-4">Level: {course.level}</p>
                            </div>
                            <button 
                                className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200"
                                onClick={() => handleStartExam(course)}
                            >
                                Take Exam
                            </button>
                        </div>
                    ))}
                </div>
                <footer className="bg-gray-900 mt-20 text-gray-300 p-8 w-full absolute top-90 left-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                        <div>
                            <h3 className="text-xl font-bold mb-4">KASS</h3>
                            <p>We are providing high-quality courses for about ten years.</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-gray-400">Fb.</a>
                                <a href="#" className="text-gray-400">Ig.</a>
                                <a href="#" className="text-gray-400">Tw.</a>
                                <a href="#" className="text-gray-400">Be.</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Popular Courses</h3>
                            <ul>
                                <li><a href="#" className="text-gray-400 hover:text-white">Business Finance</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Advanced Design</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Data Visualization</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                            <p>Call us directly: <span className="text-yellow-400">+91 6263478403</span> (Free)</p>
                            <p>Email support: <a href="kuldeepdhakad153@.com" className="text-yellow-400">help@domain.com</a></p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
                            <form className="flex flex-col">
                                <input type="email" placeholder="Enter your email" className="p-2 rounded-md mb-2" />
                                <button type="submit" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-md">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p>&copy; 2024 E-Learning Platform. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
        </div>
    );
};

export default Users;
