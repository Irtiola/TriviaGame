var correctAnswers = 0;    //create var for counting correct questions 
var incorrectAnswers = 0;  //create var for counting incorrect questions 
var unansweredQuestions = 0; //create var for counting unasnswered questions 
var qTime = 10;          //var for setting timer
var counterQ = 0;            //var for switching between questions
var quizQ = [
            {
            question: " Q1 - Which of the following jQuery selector selects all elements available in a DOM?",
            choices: ["$('*')","$('#')","$('?')"],
            correctAnsw: "$('*')"
            },
            {
            question: "Q2 - Which of the following jQuery method removes an attribute from each of the matched elements?",
            choices:["removeAttr(name)","deleteAttr(name)","emptyAttr(name)"],
            correctAnsw: "removeAttr(name)",
            },
            {
            question: "Q3 - Which of the following jQuery method removes all child nodes from the set of matched elements?",
            choices: ["empty()","delete()","remove()"],
            correctAnsw: "empty()"
            },
            {
            question: "Q4 - Can we add more than one ‘document.ready’ function in a page?",
            choices: ["YES","NO","I have no idea!"],
            correctAnsw: "YES"
            },
            {
            question: "Q5 - What are the parameters used for jQuery Ajax method?",
            choices: ["URL&type","Data/Cache","All of the above"],
            correctAnsw: "All of the above"
            },
            {
            question: "Q6- What is CDN?",
            choices: ["Content Distribution Network","Classic DOM Network","Content Delta Network"],
            correctAnsw: "Content Distribution Network"
            },
            {
            question: "Q7 - Which symbol is used for single line comments in Javascript?",
            choices: ["//","/* */","/"],
            correctAnsw: "//"
            },
            {
            question: "Q8 - What would be the result of 5+1+'7'?",
            choices: ["13","14","67"],
            correctAnsw: "67"
            },
            {
            question: "Q9 - What are JavaScript Cookies?",
            choices: ["a small sweet cake, typically round, flat, and crisp","Cookies are the small test files stored in a computer and it gets created when the user visits the websites to store information that they need.","a person of a specified kind(tought cookie)"],
            correctAnsw: "Cookies are the small test files stored in a computer and it gets created when the user visits the websites to store information that they need."
            },
            {
            question: "Q10 - Which built-in method returns the length of the string?",
            choices: ["length()","index()","None of the above"],
            correctAnsw: "length()"
            },

            ,];

            // function that creates card with questions and answer buttons      
    function showQuizCard(){
        $("h3").text(quizQ[counterQ].question);
        for (var i = 0; i < quizQ[counterQ].choices.length; i++){
        $("div").append("<button>");
        // $("div").add("<p id ='time'>");
        $("div button:last-child").text(quizQ[counterQ].choices[i]);
        $("div button:last-child").attr("value", quizQ[counterQ].choices[i]);
        $("div button:last-child").attr("disabled", false);
        $("div").prepend("<p id='time'>")
        }
    };

// function is responsible for what happens after button start clicked
    $('#start').on('click', function() {
            correctAnswers = 0;
            incorrectAnswers = 0;
            unansweredQuestions = 0;
            counterQ = 0;
            qTime = 10;
            $("div").empty();
            // $("div").append("<h1>");
            // $("h1").text("Javascript & Jquery quiz");
            $("div").append("<h3>");
            showQuizCard();
            
           
        })
        
    function countBackwards(){
        qTime--;
        $("#time").text("Time:  " + qTime);
        if (qTime==0){
            $("#time").after("<p id='result'>");
            $("#result").text("Time is out! Correct answer is: " + quizQ[counterQ].correctAnsw);
            unansweredQuestions+=1;
                $("#result").after('<button type="next">');
                $("button[type='next']").text("Next");
                clearInterval(timeOut);
                
                
        }
        
	}
    var timeOut = setInterval(countBackwards, 1*1000);

    function guessTheAnswer(){
        var userCh = $(this).val();
        console.log(userCh);
        if(userCh == quizQ[counterQ].correctAnsw){
        $("#result").text("Nice job! Correct answer is: " + quizQ[counterQ].correctAnsw);
        correctAnswers+=1;
        }
    }
//  $("button[type='next']").on("click", function(){
//     $("div").empty();
//     $("div").append("<h1>");
//     $("h1").text("Javascript & Jquery quiz");
//     $("div").append("<h3>");
//      showQuizCard();
//  })