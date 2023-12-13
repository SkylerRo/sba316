const minNumber = 1;
const maxNumber = 10;
const answer = Math.random()

let attempts = 3;
let guess
let running = true

while(running) {

    guess = window.prompt (`Pick a Number Between ${minNumber} - ${maxNumber}`);

    running = false;

    if (guess < minNumber){
        window.alert("It's definitely more than 1");
    }

    if (guess > maxNumber) {
        window.alert("I said less than 10!");
    }
  
    if (isNaN(guess)){
        window.alert("Enter a number funny guy");
    } 
    else{
        attempts ++;
        if (guess < answer){
            window.alert("Too low and one guess left to go");
        }
    else if (guess > answer){
        window.alert("Too high, one more try");
    }
   else{
    window.alert("Wow, you're intuition is strong! Here is a cute baby animal");
   }
   
   
    }

    const animalList = [
        {
            
            imgSrc: 'https://justsweetdesigns.com/cdn/shop/products/Happyducklingwatermarked.png?v=1683265905&width=1946'
        },
        {
            
            imgSrc: 'https://cloudfront-us-east-1.images.arcpublishing.com/cmg/2CKDVFHLSZU3GQ53PUJYELEFEE.jpg'
        },
        {
           
            imgSrc: 'https://static.wixstatic.com/media/93cf71_095dac45aedb46d6aaf1c7f88f8a79d8~mv2.jpg/v1/fill/w_640,h_732,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93cf71_095dac45aedb46d6aaf1c7f88f8a79d8~mv2.jpg'
        }
    
    ]
}

