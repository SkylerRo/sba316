const minNumber = 1;
const maxNumber = 10;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1));

let attempts = 3;
let guess;
let running = true;

while(running) {

    guess = window.prompt (`Pick a Number Between ${minNumber} - ${maxNumber}`);
    guess = Number(guess)

    running = false;
    
    if (isNaN(guess)){
        window.alert("Enter a number funny guy");
    } 

    if (guess <= minNumber){
        window.alert("It's definitely more than 1");
    }

    if (guess > maxNumber) {
        window.alert("I said less than 10!");
    }
    else{
        attempts ++;
        if (guess < answer){
            window.alert("Too low! Feel the number, be the number.");
        }
    else if (guess > answer){
        window.alert("Too high! See the number in your mind.");
    }
   else{
    window.alert("Wow, you're intuition is strong! You should trust your gut always.");
   }
   
   
    }

}

