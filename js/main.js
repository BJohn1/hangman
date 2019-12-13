var y = document.querySelector(".myBtn");
var z = document.querySelector(".restart")
let word = prompt("Enter a word for someone else to guess! Feel free to give them hints").toUpperCase();
let wordsplit = word.split("")
const guessed = []
const correct = []
let right = 0
let guessesLeft = 7;

let num = wordsplit.length;
let blanks = document.createElement("h4");
let used = document.createElement("h5");
let text = []
document.querySelector("Header").appendChild(used)
document.querySelector("Header").appendChild(blanks)

function putBlanks(){
  for(i=0; i<num; i++){
      text.push("_")
  }
  blanks.innerText=text.join(' ')
}

function duplicates(){
    for(i=0;i<wordsplit.length;i++){
        if(wordsplit[i]===guessed[guessed.length-1]){
            text[i]=guessed[guessed.length-1]
            correct.push(guessed[guessed.length-1])
        }
    }
    document.querySelector("h4").innerText=text.join(' ') //update blanks
    document.querySelector("h5").innerText="Used Letters: "+guessed.join(',')
}
 

putBlanks()
y.addEventListener("click", function(){
    if(document.querySelector('input').value.toUpperCase().length==1 && guessed.includes(document.querySelector('input').value.toUpperCase()) !== true){
    guessed.push(document.querySelector('input').value.toUpperCase())
    if(wordsplit.includes(guessed[guessed.length-1])){
        //correct.push(guessed[guessed.length-1])
        duplicates()
        right += 1
        //var a = wordsplit.indexOf(guessed[guessed.length-1])
        //text[a]= guessed[guessed.length-1]//update blanks
        //document.querySelector("h4").innerText=text.join(' ') //update blanks
       // document.querySelector("h5").innerText="Used Letters: "+guessed.join(',')
        if(text.includes('_')!==true){
        alert('NICE. You beat the game! Answer: '+word)
        location.reload()
        }
        else alert('NICE. Correct Letters: ' + correct)
    }else{
        guessesLeft-=1
        if(guessesLeft>0){
        changeImage() 
        document.querySelector(".guesses").innerText = "Guesses Remaining: "+guessesLeft
        document.querySelector("h5").innerText="Used Letters: "+guessed.join(',')
        alert('WRONG. Guesses Left: '+guessesLeft)
        }
        else if(guessesLeft===0){
            changeImage()
            alert('Game Over')
            location.reload()
        }
    }
    alert("You guessed "+document.querySelector('input').value.toUpperCase()+" USED LETTERS: "+guessed);
    document.getElementById('input').value = ''
    }
    else alert("TRY AGAIN")
  });
// alerts and button and game play^^^^

z.addEventListener("click",function(){
    location.reload()
})

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
  
