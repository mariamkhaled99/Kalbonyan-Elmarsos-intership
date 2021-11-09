The Modern JavaScript Bootcamp
// create the object
let myAccount={
    name:'mariam',
    expense:0,
    income:0
}


// -------------------------------------------------manipulting the object by functions-------------------------------------

let addIncome=function(accountObj,amount){

    accountObj.income=accountObj.income+amount
    //console.log(accountObj)
}


//---------------------------------------------------------------------------------------------------------------------------
// add an expense 
let addExpense= function(accountObj,amount){
    accountObj.expense=accountObj.expense+amount
    //accountObj.income=accountObj.income-accountObj.expense
   // console.log(accountObj)

}
 

//---------------------------------------------------------------------------------------------------------------------------
// use to get information name ,income after calculate the expense , expense , income
let getAccountSummary=function(accountObj){

    //let balance=accountObj.income-accountObj.expense
    // we can use return value to return the string below instead of console.log
    console.log(` ${accountObj.name} has $${accountObj.income-accountObj.expense} . after $${accountObj.expense} from her total $${accountObj.income}` )

}


//---------------------------------------------------------------------------------------------------------------------------
// return all income and expense to zero
let reset=function(accountObj){
    accountObj.expense=0
    accountObj.income=0
}
addIncome(myAccount,2000)
addExpense(myAccount,2.5)
addExpense(myAccount,160)
getAccountSummary(myAccount)
reset(myAccount)
getAccountSummary(myAccount)
