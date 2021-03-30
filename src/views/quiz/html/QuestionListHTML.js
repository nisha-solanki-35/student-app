const QuestionListHTML = [
    {
        question : "HTML stands for -",
        options : ["HighText Machine Language","HyperText and links Markup Language", "HyperText Markup Language", "None of these"] ,
        CorrectAnswer : "HyperText Markup Language",
        questionID : 1,
    },
    {
        question : "The correct sequence of HTML tags for starting a webpage is ",
        options : ["Head, Title, HTML, body","HTML, Body, Title, Head","HTML, Title, Head, body", "HTML, Head, Title, Body"],
        CorrectAnswer : "HTML, Head, Title, Body",
        questionID : 2
    },
    {
        question : "Which of the following tag is used for inserting the largest heading in HTML?",
        options : ["<h3>","<h1>","<h5>","<h6>"],
        CorrectAnswer : "<h1>" ,
        questionID : 3
    },
    {
        question : "Which of the following tag is used to insert a line-break in HTML?",
        options : ["<br>","<p>","<pre>","<b>"],
        CorrectAnswer : "<br>",
        questionID : 4
    },
    {
        question : "How to create an unordered list (a list with the list items in bullets) in HTML?",
        options : ["<ul>","<ol>","<li>","<i>"],
        CorrectAnswer : "<ul>",
        questionID : 5
    },
    {
        question : "How to create a hyperlink in HTML?",
        options : ['<a href = "www.javatpoint.com"> javaTpoint.com </a>', '<a url = "www.javatpoint.com" javaTpoint.com /a>', '<a link = "www.javatpoint.com"> javaTpoint.com </a>', '<a> www.javatpoint.com <javaTpoint.com /a>'],
        CorrectAnswer : '<a href = "www.javatpoint.com"> javaTpoint.com </a>',
        questionID : 6
    },
    {
        question : "How to create an ordered list (a list with the list items in numbers) in HTML?",
        options : ["<ul>","<ol>","<li>","<i>"],
        CorrectAnswer : "<ol>",
        questionID : 7
    },
    {
        question : "How to insert an image in HTML?",
        options : ['<img href = "jtp.png" />', '<img url = "jtp.png" />', '<img link = "jtp.png" />', '<img src = "jtp.png" /'],
        CorrectAnswer : '<img src = "jtp.png" />',
        questionID : 8
    },
    {
        question : 'How to add a background color in HTML?',
        options : ['<marquee bg color: "red">', '<marquee bg-color = "red">', '<marquee bgcolor = "red">', '<marquee color = "red">'],
        CorrectAnswer : '<marquee bgcolor = "red">',
        questionID : 9
    },
    {
        question : "<input> is -",
        options : ["a format tag", "an empty tag", "All of the above", "None of the above"],
        CorrectAnswer : "an empty tag",
        questionID : 10
    }

]

export default () =>
Promise.resolve(QuestionListHTML);