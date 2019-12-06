var y = document.querySelector(".myBtn");
const guessed = []
let guessesLeft = 7;
y.addEventListener("click", function(){
    if(document.querySelector('input').value.length==1 && guessed.includes(document.querySelector('input').value) !== true){
    guessed.push(document.querySelector('input').value)
    alert("You guessed "+document.querySelector('input').value+" USED LETTERS: "+guessed);
    }
    else alert("try again")
  });