var correctAnswers = 0;    //create var for counting correct questions 
        var incorrectAnswers = 0;  //create var for counting incorrect questions 
        var unansweredQuestions = 0; //create var for counting unasnswered questions 
        var qTime = 10;          //var for setting timer
        var counterQ = 0;            //var for switching between questions
        var quizQ = [
            {
            question: "Which of the following jQuery selector selects all elements available in a DOM?",
            optionsOfAnswers: ["$('*')","$('#')","$('?')"],
            correctAnsw: "$('*')"
            },
            {
            question: "Which of the following jQuery method removes an attribute from each of the matched elements?",
            optionsOfAnswers:["deleteAttr( name )","removeAttr( name )","removeAttribute( name )"],
            correctAnsw: "removeAttr( name )"
            },];

            // function that creates card with questions and answer buttons      
    function showQuizCard(){
        $("h3").text(quizQ[counterQ].question);
        for (var i = 0; i < quizQ[counterQ].optionsOfAnswers.length; i++){
        $("div").append("<button>");
        // $("div").add("<p id ='time'>");
        $("div button:last-child").text(quizQ[counterQ].optionsOfAnswers[i]);
        $("div button:last-child").attr("value", quizQ[counterQ].optionsOfAnswers[i]);
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