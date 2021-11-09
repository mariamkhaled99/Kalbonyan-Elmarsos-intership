The Modern JavaScript Bootcamp

// guessing game 


let guessingNum=function(num){

    //----------------------------Random Formulla------------------------------
    let min =1
    let max =5
   
    let guessNum= Math.floor(Math.random()*(max-min+1))+min

    //----------------------------another way------------------------------------
   /* if(num===guessNum){
         console.log(` the number is ${num} , the guessing number is ${guessNum}`)
         return true 
     }
     else{
       console.log(` the number is ${num} , the guessing number is ${guessNum}`)
         return false
     }*/


    return num===guessNum
}


let result= guessingNum(2)

console.log(result)
