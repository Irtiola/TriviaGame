var correctA = 0;    
var incorrectA = 0;  
var skipped = 0; 
var qTime = 10;     
var counterQ = 0;  //var for switching between questios
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
            question: "Q4 - Can we add more than one document.ready function in a page?",
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
            question: "Q9 - Do you like Javascript?",
            choices: ['Love it!','Not bad','Hate it!'],
            correctAnsw: "Hate it!"
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
        for (var i = 0; i < quizQ[counterQ].choices.length; i++) {
            $("div").append("<button>");
            $("div button:last-child").text(quizQ[counterQ].choices[i]);
            $("div button:last-child").attr("value", quizQ[counterQ].choices[i]);
            $("div button:last-child").attr("class", "choices");
            }
            $("div").append("<p id='time'>");
            $("#time").after("<p id='result'>");
            $("#result").after('<button id="next">');
            $("button[id='next']").text("Next");
    };

// function is responsible for what happens after button start clicked --> clears all scores
//and showing first question
    $('#start', '#again').on('click', function() {
        correctA = 0;
        incorrectA = 0;
        unansweredQ = 0;
        counterQ = 0;
        qTime = 10;
        $("div").empty();
        $("div").append("<h3>");
        showQuizCard();   
        })

//showing timer in sec backwards + informing user if time is out
    function showingTimer(){
        qTime--;
        $("#time").text("Time:  " + qTime);
        if (qTime==0){
            $("#result").text("Time is out! Correct answer is: " + quizQ[counterQ].correctAnsw);
            skipped+=1;
            clearInterval(timeOut);
            $("div button[class='choices']").attr("disabled", true);    
        }      
	};
    var timeOut = setInterval(showingTimer, 1*1000);

//when user chooses the answer it is comparing with the right answer and informing user
    $(document).on("click", '.choices', function(){
        var userCh = $(this).val();
        clearInterval(timeOut);
        $("div button[class='choices']").attr("disabled", true);
        if(userCh == quizQ[counterQ].correctAnsw){
            $("#result").text("Nice job! Correct answer is: " + quizQ[counterQ].correctAnsw);
            correctA+=1;
            clearInterval(timeOut);

        } else {     
            $("#result").text("Sorry, not this time! Correct answer is: " + quizQ[counterQ].correctAnsw);
            incorrectA+=1;
            clearInterval(timeOut);
        }
    });
// functionality for button Next -- moving to the next question
    $(document).on("click","#next", function(){
        $("div").empty();
        $("div").append("<h3>");
        showQuizCard();
        $("button").remove();
        nextQuestion();
               
    });
//switching from one q to another one by one   
    function nextQuestion() {
        if (counterQ == quizQ.length-1) {
            showFinalScore();
        } else {
            qTime = 10;
            counterQ += 1;
            qTime = 10;
            timeOut = setInterval(showingTimer, 1*1000);
            $("div").empty();
            $("div").append("<h3>");
            showQuizCard();
            showingTimer();
        }
    }
 //used in case when all q were answered and offer to try again.   
    function showFinalScore(){
    $("h3").remove();
    $("#time").remove();
    $("#result").remove();
    $("button").remove();
    $("h2").text("Final score:");
    $("div").append("<p>");
    $("div p:last-child").text("Correct answers: " + correctA);
    $("div").append("<p>");
    $("div p:last-child").text("Incorrect answers: " + incorrectA);
    $("div").append("<p>");
    $("div p:last-child").text("Unanswered: " + skipped);
    $("div").append("<button id='again'>");
    $("button").attr("id", "again").text("Do it again")
    
    };
        
    