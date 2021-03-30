const QuestionListPython = [
    {
        question : "What is the maximum possible length of an identifier?",
        options : ["16","32","64", "None of these"],
        CorrectAnswer : "None of these",
        questionID : 1,
    },
    {
        question : "Who developed the Python language?",
        options : ["Zim Den", "Guido van Rossum", "Niene Stom", "Wick van Rossum"],
        CorrectAnswer : "Guido van Rossum",
        questionID : 2,
    },
    {
        question : "In which language is Python written?",
        options : ["English", "C", "PHP", "None"],
        CorrectAnswer : "C",
        questionID : 3,
    },
    {
        question : "What is the use of duck typing?",
        options : ["More restriction on the type values that can be passed to a given method", 
        "No restriction on the type values that can be passed to a given method",
         "Less restriction on the type values that can be passed to a given method",
          "Makes the program code smaller"],
        CorrectAnswer : "Less restriction on the type values that can be passed to a given method",
        questionID : 4,
    },
    {
        question : "Methods of a class that provide access to private members of the class are called as ______ and ______",
        options : ["getters/setters", "__repr__/__str__", "user-defined functions/in-built functions", "	__init__/__del__"],
        CorrectAnswer : "getters/setters",
        questionID : 5,
    },
    {
        question : "Which of the following is false about protected class members?",
        options : ["They begin with one underscore", "They can be accessed by subclasse", "They can be accessed by name mangling method", "They can be accessed within a class"],
        CorrectAnswer : "They can be accessed by name mangling method",
        questionID : 6,
    },
    {
        question : "What do we use to define a block of code in Python language?",
        options : ["Key", "Brackets", "Indentation", "None of these"],
        CorrectAnswer : "Indentation",
        questionID : 7,
    },
    {
        question : "Why does the name of local variables start with an underscore discouraged?",
        options : ["To identify the variable", "It confuses the interpreter", "It indicates a private variable of a class", "None of these"],
        CorrectAnswer : "It indicates a private variable of a class",
        questionID : 8,
    },
    {
        question : "Which of the following declarations is incorrect in python language?",
        options : ["xyzp = 5,000,000", "x y z p = 5000 6000 7000 8000", "x,y,z,p = 5000, 6000, 7000, 8000", "x_y_z_p = 5,000,000"],
        CorrectAnswer : "x y z p = 5000 6000 7000 8000",
        questionID : 9,
    },
    {
        question : "Which of the following precedence order is correct in Python?",
        options : ["Parentheses, Exponential, Multiplication, Division, Addition, Subtraction", 
        "Multiplication, Division, Addition, Subtraction, Parentheses, Exponential",
         "Division, Multiplication, Addition, Subtraction, Parentheses, Exponential",
          "Exponential, Parentheses, Multiplication, Division, Addition, Subtraction"],
        CorrectAnswer : "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
        questionID : 10,
    }
]

export default () =>
Promise.resolve(QuestionListPython);