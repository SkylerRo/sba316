
const body = document.body
body.append("How Intuitive Are You?")


const minNumber = 1;
const maxNumber = 10;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1));

let attempts = 2;
let guess;
let running = true;


 setTimeout(()=>{
    while(running) {
 

 
    guess = window.prompt (`Pick a Number Between ${minNumber} - ${maxNumber}`);
    guess = Number(guess)

    
    
    if (isNaN(guess)){
        window.alert("Enter a number funny guy");
    } 

    if (guess == 1){
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
   if(guess === answer){
    window.alert("Wow, you're intuition is strong! You should trust your gut always.");
    
}
   
   if (guess > attempts){
    window.alert("This is not a guessing game. Go hug a tree or touch some grass to connect")
    
} 
;  } } running = false;
},1000)



