//ar rectangle = $("#Rectangle");
//var speechBubble = $("#SpeechBubble");
//var btnAsk = $("#btnAsk");
//var questionBox = $("#question");
var rectangle = document.querySelector("#Rectangle");
var speechBubble = document.querySelector("#SpeechBubble");
var wiseCrack = document.querySelector("#WiseCrack");
var btnAsk = document.querySelector("#btnAsk");
var questionBox = document.querySelector("#question");
var questionAsked="";

// The the user hovers the mouse over
// the rectangle the "expand-bounce"
//animation is called and the duration
// is set to 250 miliseconds.
// When the user moves the mouse away
// the "shrink" animation gets called
// and the duration is set to 100
// miliseconds.

/*
rectangle.hover(
  function() {
    speechBubble.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechBubble.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);
*/

var answers = ["It is certain",
               "It is decidedly so",
               "Without a doubt",
               "Yes – definitely",
               "You may rely on it",
               "As I see it, yes",
               "Most likely",
               "Outlook good",
               "Signs point to yes",
               "Yes",
               "Reply hazy", 
               "try again",
               "Ask again later",
               "Better not tell you now",
               "Cannot predict now",
               "Concentrate and ask again",
               "Don't count on it",
               "My reply is no",
               "My sources say no",
               "Outlook not so good" ,
               "Very doubtful"
              ];


var wiseCracks = ["If Barbie is so popular, why do you have to buy her friends?",
                  "My Butt Itches...",
                  "Dude, there is seriously something wrong with you",
                  "You're so cool, how are you still single?",
                  "I love that I don't have to try around you",
                  "I understand. I just don't care.",
                  "Hey, if you're gonna be dumb you gotta be tough",
                  "It isn't that I'm not a people person, I'm jsut not a stupid people person",
                  "Buenos Nachos Amigo",
                  "Unless you are a pizza, the answer is yes, I can live without you.",
                  "I’m actually not funny. I’m just mean and people think I’m joking.",
                  "If Cinderella’s shoe fit perfectly, then why did it fall off?",
                  "Sometimes I wish I was a bird… so I could fly over certain people and shit on their heads.",
                  "If you ran as much as you ran your mouth, you’d be in great shape",
                  "Do you take all your advice from an Avocado?",
                  "Everyone seems normal until you get to know them.",
                  "I don’t have the energy to pretend to like you today.",
                  "My imaginary friend says that you need a therapist.",
                  "Just keep talking, I yawn when I’m interested.",
                  "I’ve got a good heart but this mouth…",
                  "My friends are so much cooler than yours. They’re invisible."
                 ];


btnAsk.addEventListener("click",function() {
    questionAsked = questionBox.value;
    answerQuestion(questionAsked)
    

} )



questionBox.addEventListener("keyup",
    function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            btnAsk.click();
        }
    }
    );

    questionBox.addEventListener("change",
    function(event) {
        console.log("Text Changed");
        }
    
    );

    questionBox.addEventListener("click",
    function(event) {
        questionBox.value="";
        if (speechBubble.style.animationName === "expand-bounce"){
            speechBubble.style.animationName = "shrink";
            speechBubble.style.animationDuration = "0.1s";
            wiseCrack.style.animationName = "shrink";
            wiseCrack.style.animationDuration = "0.2s";
        }

    }
    
    );


function answerQuestion(questionAsked) {

       
        if (questionAsked === "") {
            speechBubble.textContent = "Ask a question first!";
            wiseCrack.textContent = "Yeah, what she said bub!";
        }

        else {
            speechBubble.textContent = pickAnswer();
            wiseCrack.textContent = pickWisecrack();
        }
            
        
        speechBubble.style.animationName = "expand-bounce";
        speechBubble.style.animationDuration = "0.25s";
        wiseCrack.style.animationName = "expand-bounce";
        wiseCrack.style.animationDuration = "0.5s";

        
    //    setTimeout(
    //     function() {
    //         speechBubble.style.animationName = "shrink";
    //         speechBubble.style.animationDuration = "0.1s";
    //       }, 3000
    //    ); 
    
}

function pickAnswer() {
    var random = Math.floor(Math.random() * answers.length);
    return answers[random];
}

function pickWisecrack() {
    var random = Math.floor(Math.random() * wiseCracks.length);
    return wiseCracks[random];
}