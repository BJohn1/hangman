var y = document.querySelector(".myBtn");
let word = prompt("Enter a word to start a new game");
let wordsplit = word.split("")
const guessed = []
const correct = []
let right = 0
let guessesLeft = 7;

y.addEventListener("click", function(){
    if(document.querySelector('input').value.length==1 && guessed.includes(document.querySelector('input').value) !== true){
    guessed.push(document.querySelector('input').value)
    if(wordsplit.includes(guessed[guessed.length-1])){
        correct.push(guessed[guessed.length-1])
        right += 1
        if(right===wordsplit.length){
        alert('NICE. You beat the game! Answer: '+word)
        location.reload()
        }
        else alert('NICE. Correct Letters: ' + correct)
    }else{
        guessesLeft-=1
        if(guessesLeft>0){
        changeImage() 
        document.querySelector(".guesses").innerText = "Guesses Remaining: "+guessesLeft
        alert('WRONG. Guesses Left: '+guessesLeft)
        }
        else if(guessesLeft===0){
            changeImage()
            alert('Game Over')
            location.reload()
        }
    }
    alert("You guessed "+document.querySelector('input').value+" USED LETTERS: "+guessed);
    }
    else alert("try again")
  });
// alerts and button and game play^^^^


  var image = document.createElement("img");
  image.id = "id";
  image.className = "class";
  image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/0.jpg"  
  image.alt="Body" 
  image.height="500" 
  image.width="500";           
  document.querySelector("body").appendChild(image)
  function changeImage(){
   if(guessesLeft===6){
        image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/4.jpg"
    }
    if(guessesLeft===5){
        image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/5.jpg"
    }
    if(guessesLeft===4){
        image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/6.jpg"
    }
    if(guessesLeft===3){
        image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/7.jpg"
    }
    if(guessesLeft===2){
        image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/8.jpg"
    }
    if(guessesLeft===1){
        image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/9.jpg"
    }
    if(guessesLeft===0){
        image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/10.jpg"
    }
  }
  //changes hangman image^^^^