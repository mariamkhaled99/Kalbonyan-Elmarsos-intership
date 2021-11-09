The Modern JavaScript Bootcamp


let grade_calc= function(student_score,total=100){
    let percentage=(student_score/total)*100
    let letter='' // declare here to use it with return 
    if(percentage>=90){
        letter='A'
    }else if(percentage>=80){
        letter='B'
    }else if(percentage>=70){
        letter='C'
    }else if(percentage>=60){
        letter='D'
    }else{
        letter='f'
    }

    return `You got a ${letter} (${percentage}%) !`
}

// tests

let result=grade_calc(80,100)
console.log(result)

 result=grade_calc(30)
console.log(result)

 result=grade_calc(98,100)
console.log(result)
