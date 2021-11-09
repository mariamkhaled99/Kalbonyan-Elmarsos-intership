The Modern JavaScript Bootcamp

let isValidPassword=function(pass){
    /*if((pass.length>=8) && !(pass.includes('password'))){
        return true
    }
    else{
        return false
    }*/

    //another way to use if else statments if the return value is true or false .
    // in this case you should only write your only true condition after return

    return (pass.length>=8) && !(pass.includes('password'))
}

//suppose to fail because of short length
console.log(isValidPassword('ghsj'))
//suppose to success
console.log(isValidPassword('ghsjhhjjgh'))
//suppose to fail because of password word
console.log(isValidPassword('ghsjpassword'))
