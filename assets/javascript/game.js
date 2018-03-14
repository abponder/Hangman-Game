

// List of Words only

var validGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var title = ("Psy's Favorite Korean Foods");
document.getElementById("demo0").innerHTML = title;

var score = 0;
var guesses = 3;
var guessesTaken = 0;
var guessesLine = ("Starting Guesses = " + guesses)
document.getElementById("demo8").innerHTML = "hit a letter key to start";
document.getElementById("demo1").innerHTML = guessesLine;

var words = ["Kimchi","Bibimbap","Bulgogo","Japchae","Hoeddeok",
                "Ddukbokkie","Samgyeopsal","Chimaek","Tteokbokki"]
var wordCount = words.length;
document.getElementById("demo2").innerHTML = "You choose from this many words: " + wordCount;
document.getElementById("demo3").innerHTML = "Your word choices are: " + words;

// get random Number
       var randNum =  Math.floor(Math.random() * words.length);
document.getElementById("demo4").innerHTML = "Random # based on word count: " + (randNum + 1);

// get random word from Words list array
var randomWord = words[randNum]
document.getElementById("demo5").innerHTML = "Random word based on Words list: " + randomWord;

// get count of letters in random word
var wordLettercount = randomWord.length;
document.getElementById("demo6").innerHTML = "Random word length is: " + wordLettercount;

// starting word dashes
var dashes = "";
for (i = 0; i < randomWord.length; i++) {
  if (randomWord.charAt(i) == " ") {
    dashes += " ";
  } else {
    dashes += "-"; // replace every letter of the word with a dash
  }
}
document.getElementById("demo7").innerHTML = "Random word dashes are:  " + dashes;


// FUNCTIONS
// ==============================================================================

// Check to see if the game should continue
    function checkScore() {
        if(guessesTaken < guesses) {
        document.getElementById("demo9").innerHTML = "Game On! and " + (guesses - guessesTaken) + " guesses remaining";
        }
        else {
            document.getElementById("demo9").innerHTML = "Game Over!";
            document.getElementById("demo10").innerHTML = "Final Score: " + score + " out of " + guesses;
        }
    }
// Function that updates the score...
      function updateScore() {
        document.getElementById("demo9").innerHTML = "Score: " + score;
      }


// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game. question-game-solved.html Class-Content\03-javascript\34-QuestionGame
      checkScore();
      updateScore();

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // If there are no more questions, stop the function.
       // if (questionIndex === questionsArray.length) {
        if (guessesTaken === guesses) {
          return;
        }

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = String.fromCharCode(event.which).toLowerCase();


        // sets count to the number of occurrences of the letter in the string str:
            var str = randomWord.toLowerCase();
            var count = 0;
            var pos = str.indexOf(userInput);
            
            while (pos !== -1) {
              count++;
              pos = str.indexOf(userInput, pos + 1);
            }
            document.getElementById("demo11").innerHTML = "Player hit this letter key: " + userInput;
            document.getElementById("demo12").innerHTML = "the letter shows up '"+ count  +"' times in the word";
            //document.getElementById("demo13").innerHTML = "the word is :" + randomWord;
            
            console.log(count); // displays 2

        // Only run this code if "t" or "f" were pressed.
       // if (userInput === "t" || userInput === "f") {

          // If they guess the correct answer, increase and update score, alert them they got it right.
          //if (userInput === "t" || userInput === "f")  {
          if (count > 0)  {
            alert("Correct!");
            score++;
            updateScore();
          }
          // If wrong, alert them they are wrong.
          else {
            alert("Wrong!");
          }

          // Increment the questionIndex variable and call the renderQuestion function.
          //questionIndex++;
          guessesTaken++;
          checkScore();

        //}

      };













// Determine which key was pressed, make it lowercase, and set it to the userInput variable.
//       var userInput = String.fromCharCode(event.which).toLowerCase();

// This function is run whenever the user presses the first key.
//    document.onkeyup = function(event) {

    // Determines which key was pressed.
 //       var userGuess = event.key;

    // Generate random number limited by word array length
    //    var randNum = Math.floor(Math.random() * words.length); // not with +1 like: var randNum = Math.floor(Math.random() * words.length) + 1;

    // Use random number as item number in word array to select the actual word
    //   var computerGuess = words[randNum];

    // Set up the answer array
    // var WordAnswerDashes = [];
    // for (var i = 0; i < computerGuess.length; i++) {
    //     WordAnswerDashes[i] = "_";
    // }
    // var LettersToGuess = computerGuess.length;

    //     console.log(LettersToGuess);
    //     console.log(WordAnswerDashes);

    // // send output to html id tags NOT PART OF FINAL VERSION!
    // document.getElementById("demo0").innerHTML = userGuess;
    // document.getElementById("demo1").innerHTML = randNum;
    // document.getElementById("demo2").innerHTML = computerGuess;

    // var html =
    // "<hr>" +
    // "<p>Wins: " + wins + "</p>" +
    // "<p>Losses: " + losses + "</p>" +
    // "<hr>" +
    // "<p>You chose: " + userGuess + "</p>" +
    // "<hr>" +
    // "<p>The computer chose: </p>" +
    // "<p>Take a guess >>: " + WordAnswerDashes + "</p>" +
    // "<hr>" +
    // "<p>misses: " + misses + "</p>";
  
    //       // Set the inner HTML contents of the #game div to our html string
    //       document.querySelector("#game").innerHTML = html;

  
     //   };

  



