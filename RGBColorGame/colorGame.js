var numberOfSquares = 6;
var colors = new Array();//generateRandomColors(numberOfSquares);
var pickedColor = "";

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector(".mainHeading");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

    for (var i = 0; i < modeButtons.length; i++) {

        modeButtons[i].addEventListener("click", 
            function(){
                
                var btnList = document.getElementsByClassName("mode");
                for (let btn of btnList) {
                    btn.classList.remove("selected");;
                }
                
                this.classList.add("selected");
            
                this.textContent.toUpperCase() === "HARD"?numberOfSquares = 6:numberOfSquares = 3;
                reset();
                    
            })
    
    }


    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    
        squares[i].addEventListener("click", 
        function () {
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                // var chaChing = new Audio('/sounds/ChaChing.mp3');
                // chaChing.play();
                var sound = new Howl({
                    src: ['/sounds/ChaChing.mp3']
                  });
                  
                  sound.play();
                
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
                var boom = new Audio('/sounds/Bomb.mp3');
                boom.play();
            }
        });
    }
    reset();
}


function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.replace("rgb","RGB");

    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }

        else {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";

    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

}

resetButton.addEventListener("click", reset);

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    } 
    h1.style.backgroundColor = color;
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num) {
    //mak an array
    var arr = []

    for (var i = 0; i < num ; i ++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green =  Math.floor(Math.random() * 256);
    var blue =  Math.floor(Math.random() * 256);

    var colorString = 'rgb(' + red +', '+ green + ', ' + blue + ')';

    return colorString
}