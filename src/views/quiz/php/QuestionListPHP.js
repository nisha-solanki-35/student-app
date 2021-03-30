const QuestionListPHP = [
    {
        question : "Which of the following is correct about PHP?",
        options : ["PHP can access cookies variables and set cookies.", "Using PHP, you can restrict users to access some pages of your website.", "It can encrypt data.", "All of the above"],
        CorrectAnswer : "All of the above",
        questionID : 1,
    },
    {
        question : "A package is a set of related ",
        options : ["Classes", "Objects", "Programs", "Functions"],
        CorrectAnswer : "Classes",
        questionID : 2,
    },
    {
        question : "Till which version of PHP, developers were forced to name their files in a global context?",
        options : ["PHP 4", "PHP 5", "PHP 5.2", "PHP 5.3"],
        CorrectAnswer : "PHP 5.3",
        questionID : 3,
    },
    {
        question : "Which one of the following is the correct way of declaring a namespace?",
        options : ["namespace my;", "namespace my();", "my namespace;", "namespace(my);"],
        CorrectAnswer : "namespace my;",
        questionID : 4,
    },
    {
        question : "Which one of the following statements is true for include_once() and require_once()?",
        options : ["Both are exactly the same", "include_once is used for files where as require_once() is not", "Both Handle the errors in the same way", "Both do not handle the errors in the same way"],
        CorrectAnswer : "Both do not handle the errors in the same way",
        questionID : 5,
    },
    {
        question : "Which of the following type of variables are instances of programmer-defined classes?",
        options : ["Strings", "Arrays", "Objects", "Resources"],
        CorrectAnswer : "Objects",
        questionID : 6,
    },
    {
        question : "Which of the following magic constant of PHP returns class method name?",
        options : ["_METHOD_", "_FILE_", "_FUNCTION_", "_CLASS_"],
        CorrectAnswer : "_METHOD_",
        questionID : 7,
    },
    {
        question : "Which of the following can be used to get information sent via get/post method in PHP?",
        options : ["$_REQUEST", "$REQUEST", "$REQUEST_PAGE", "None of the above"],
        CorrectAnswer : "$_REQUEST",
        questionID : 8,
    },
    {
        question : "Which of the following is used to set cookies?",
        options : ["setcookie() function", "$_COOKIE variable", "$HTTP_COOKIE_VARS variable", "isset() function"],
        CorrectAnswer : "setcookie() function",
        questionID : 9,
    },
    {
        question : "Which of the following is used to destroy the session?",
        options : ["session_start() function", "$_SESSION[]", "$_SESSION[]", "session_destroy() function"],
        CorrectAnswer : "session_destroy() function",
        questionID : 10,
    }
]


export default () =>
Promise.resolve(QuestionListPHP);