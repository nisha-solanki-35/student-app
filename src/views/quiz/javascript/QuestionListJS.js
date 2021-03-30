const QuestionListJS = [
    {
        question : "Which type of JavaScript language is",
        options : ["Object-Oriented","Object-Based", "Assembly-language", "High-level"] ,
        CorrectAnswer : "Object-Based",
        questionID : 1,
    },
    {
        question : "In JavaScript, what is a block of statement?",
        options : ["Conditional block", "block that combines a number of statements into a single compound statement","both conditional block and a single statement", "block that contains a single statement"],
        CorrectAnswer : "block that combines a number of statements into a single compound statement",
        questionID : 2,
    },
    {
        question : "When interpreter encounters an empty statements, what it will do:",
        options : ["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"],
        CorrectAnswer : "Ignores the statements",
        questionID : 3,
    },
    {
        question : "'function' and 'var' are known as:",
        options : ['Keywords','Data types','Declaration statements','Prototypes'],
        CorrectAnswer : 'Declaration statements',
        questionID : 4,
    },
    {
        question : "Which of the following variables takes precedence over the others if the names are the same?",
        options : ["Global variable","The local element","The two of the above","None of the above"],
        CorrectAnswer : "The local element",
        questionID : 5,
    },
    {
        question : "Which one of the following is the correct way for calling the JavaScript code?",
        options : ["Preprocessor","Triggering Event","RMI","Function/Method"],
        CorrectAnswer : "Function/Method",
        questionID : 6,
    },
    {
        question : "Which of the following type of a variable is volatile?" ,
        options : ["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],
        CorrectAnswer : "Mutable variable",
        questionID : 7,
    },
    {
        question : "Which of the following option is used as hexadecimal literal beginning? ",
        options : ["00","0x","0X","Both 0x and 0X"],
        CorrectAnswer : "Both 0x and 0X",
        questionID : 8,
    },
    {
        question : "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        options : ["Prints an exception error","Prints an overflow error","Displays 'Infinity'","Prints the value as such"],
        CorrectAnswer : "Displays 'Infinity'",
        questionID : 9,
    },
    {
        question : "In the JavaScript, which one of the following is not considered as an error:",
        options : ["Syntax error","Missing of semicolons","Division by zero","Missing of Bracket"],
        CorrectAnswer : "Division by zero",
        questionID : 10,
    }
]

export default () =>
Promise.resolve(QuestionListJS);