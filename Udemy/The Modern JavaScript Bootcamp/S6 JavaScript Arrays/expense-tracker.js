The Modern JavaScript Bootcamp
const account={

    name: 'mariam khaled',
    expenses: [],
    income: [],
    getAccountSummary:function(){
        //get the total expense
     let totalExpense =0

     this.expenses.forEach(function(expense){// argument is used to access the expense
        totalExpense=totalExpense+expense.amount
     })

     let salary=0
     this.income.forEach(function(income){
        salary=salary+income.amount
    })
    let accountBalance =0
    accountBalance =salary-totalExpense

  return `${this.name} has $${totalExpense} in expense her salary is $${salary}  and the account balance is $${accountBalance}`
    },
    addExpense:function(description,amount){
        return this.expenses.push({description,amount})

    },
    addIncome:function(description,amount){
        return this.income.push({description,amount})

    },

}
account.addIncome('driving',2000)
account.addExpense('Rent',200)
account.addExpense('Food',300)
console.log(account.expenses)
console.log(account.getAccountSummary())


