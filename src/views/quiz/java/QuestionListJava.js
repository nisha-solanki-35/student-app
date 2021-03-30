const QuestionListJava = [
    {
        question : "Which of the following is a valid declaration of an object of class Box?",
        options : ["Box obj = new Box();","Box obj = new Box;", "obj = new Box();", " new Box obj;"] ,
        CorrectAnswer : "Box obj = new Box();",
        questionID : 1,
    },
    {
        question : "Which of these operators is used to allocate memory for an object?",
        options : ["malloc", "alloc", "new", "give"],
        CorrectAnswer : "new",
        questionID : 2,
    },
    {
        question : "Which of the following is not a Java features?",
        options : ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
        CorrectAnswer : "Use of pointers",
        questionID : 3,
    },
    {
        question : "What is the return type of Constructors?",
        options : ["int", "float", "void", " none of the mentioned"],
        CorrectAnswer : "none of the mentioned",
        questionID : 4,
    },
    {
        question : "Which function is used to perform some action when the object is to be destroyed?",
        options : ["finalize()", "delete()", "main()", "none of the mentioned"],
        CorrectAnswer : "finalize()",
        questionID : 5,
    },
    {
        question : " Which of the following statements are incorrect?",
        options : ["default constructor is called at the time of object declaration",
         "constructor can be parameterized", "finalize() method is called when a object goes out of scope and is no longer needed",
          "finalize() method must be declared protected"],
        CorrectAnswer : "finalize() method is called when a object goes out of scope and is no longer needed",
        questionID : 6,
    },
    {
        question : "Which of these is used to access a member of class before object of that class is created?",
        options : ["public", "private", "static", "protected"],
        CorrectAnswer : "static",
        questionID : 7,
    },
    {
        question : "What is used to find and fix bugs in the Java programs",
        options : ["JVM", "JRE", "JDK", "JDB"],
        CorrectAnswer : "JDB",
        questionID : 8,
    },
    {
        question : "What is the return type of the hashCode() method in the Object class?",
        options : ["Object", "int", "long", "void"],
        CorrectAnswer : "int",
        questionID : 9,
    },
    {
        question : "Which of the following is a valid long literal?",
        options : ["ABH8097", "L990023", "904423", "0xnf029L"],
        CorrectAnswer : "",
        questionID : 10,
    }
]

export default () =>
Promise.resolve(QuestionListJava);