/*
-make skeleton html/css with classes
-gather questions/answers (data)
-build architecture of questions/answers (radio buttons)
-establish variables of 
    ~questions, questionsTotal, correctAnswer, incorrectAnswer, correct/incorrect counters
-questions vs correctAnswer = win; correctAnswer < questions = loss
-setTimer for page
-create questionArray with all Questions
-create answerArray with all Answers
-create correctAnswerArray with the correct answers */
var game = {
    correct: 0,
    incorrect: 0,
    counter: 150,

    clock: function() {
        game.counter--;
        $('#counter').html(game.counter);

        if (game.counter === 0) {
            alert("Game over!");
            // game.done();
        }
    },
    start: function() {
        game.start;
    },
}

var questionOne = {
    question: "I: Who is the Luke's Father in Star Wars?",
    answer: ["Darth Vader", "Darth Maul", "Darth Plagus", "Kylo Ren"],
    correctAnswer: 0,
};

var questionTwo = {
    question: "II: What is Iron Man's real name?",
    answer: ["Steve", "Tony", "Bruce", "Clint"],
    correctAnswer: 1,
};

var questionThree = {
    question: "III: Magneto's power is what?",
    answer: ["Telekinesis", "Magnetism", "Healing", "Super Strength"],
    correctAnswer: 1,
};

var questionFour = {
    question: "IV: What weapon does Thor weild?",
    answer: ["Sword", "Axe", "Hammer", "Bow"],
    correctAnswer: 2,
};

var questionFive = {
    question: "V: Complete the move name: _____ Civil War",
    answer: ["Spider Man", "Iron Man", "Captain America", "Wolverine"],
    correctAnswer: 2,
};

var questionSix = {
    question: "VI: Which of the following is NOT a DC character?",
    answer: ["Batman", "Ant Man", "Super Man", "Wonder Woman"],
    correctAnswer: 1,
};

var questionSeven = {
    question: "VII: Where is Black Panther from?",
    answer: ["Transia", "Latveria", "Bagalia", "Wakanda"],
    correctAnswer: 3,
};

var questionEight = {
    question: "VIII: What is Wolverine's claws made of?",
    answer: ["Adamantium", "Vibranium", "Adamantine", "Uru"],
    correctAnswer: 0,
};

var questionNine = {
    question: "IX: Batman is from what city?",
    answer: ["Central City", "Star City", "Metropolis", "Gotham City"],
    correctAnswer: 3,
};

var questionTen = {
    question: "X: What super power does The Flash have",
    answer: ["Super Strength", "Super Speed", "X-Ray Vision", "Flying"],
    correctAnswer: 1,
}

var questions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen,
];

$(document).ready(function() {

    $('.startButton').on('click', function() {
        $('.startWindow').addClass('invisible');
        $('.questionArea').removeClass('invisible');
        // $('.finalgif').addClass('invisible');

        var submitButton = $('<button>');
        submitButton.addClass('submit');
        submitButton.text('Submit');
        $('.wrapper').append(submitButton);

        $('.submit').on('click', function() {
            $('.questionArea').hide();
            submitButton.remove();
            $('.music').remove();
            $('#counter').remove();
            clearInterval(timer);


            function checkAnswer() {
                console.log('hello');
                $('.input:checked').each(function() {
                    if ($(this).attr('data-correct') === 'true') {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
            };
            checkAnswer();
            var scoreArea = $('<div>');
            scoreArea.addClass('scoring');
            scoreArea.text("You guessed " + game.correct + " correct and " + game.incorrect + " wrong!");
            $('.wrapper').append(scoreArea)
            $('.finalgif').show();


            var refreshButton = $('<button>');
            refreshButton.addClass('refresh');
            refreshButton.text('Play Again!');
            $('.wrapper').append(refreshButton);

            $('.refresh').click(function() {
                location.reload();
            })

        });

        //game.start();
        timer = setInterval(game.clock, 1000)
        $('.questionArea').prepend("Time remaining: <span id='counter'>150</span> Seconds");
        for (var i = 0; i < questions.length; i++) {
            var showQuestion = $('<div class="question">');
            var questionText = $('<div class="question-text">');
            questionText.html(questions[i].question);
            showQuestion.append(questionText);


            var answerGroup = $('<form class="answers">');
            showQuestion.append(answerGroup);


            for (var j = 0; j < questions[i].answer.length; j++) {
                var showAnswer = $('<div class="answer"></div>');
                var input = $('<input type="radio" name="radio" class="input">');
                input.attr('data-correct', questions[i].correctAnswer === j);
                showAnswer.append(input);
                showAnswer.append(questions[i].answer[j]);
                answerGroup.append(showAnswer);
            }



            $('.questionArea').append(showQuestion);

        }

    });
    /*  result: function() {
          clearInterval(timer);
          $('.questionArea').remove();
          $('.questionArea').html("Finished!")
          $('.questionArea').append("Correct Answers: " + this.correct);
          $('.questionArea').append("Incorrect Answers: " + this.incorrect);
      }; */
    // <div class="question">
    //   <div class="question-text"></div>
    //   <div class="options"></div>
    /*  done: function() {
          $.each($'input[name="questionOne":checked');
          if ($(this).val()===questionOne.correctAnswer) {
              game.correct++;
          } else {
              game.incorrect++;
          };
      }; */

    //  $('.questionArea').html(questionOne.question);
    // $('.questionArea').append('<div>hello world</div>');

    //HOW DO I ADD ALL QUESTIONS TO THE PAGE??
    //HOW DO I: build content of form in jQuery (input type = "radio"...)??
    //HOW DO I: add submit button??

    /* function displayQuestion() {
         for (i = 0; i < questions.length; i++) {
             
         }
     } */
});