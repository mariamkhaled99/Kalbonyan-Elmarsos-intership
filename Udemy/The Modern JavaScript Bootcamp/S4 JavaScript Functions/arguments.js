The Modern JavaScript Bootcamp


let calTips=function(tip_percent=.3,total){
tip=tip_percent*total
total+=tip

return "total="+total+" for tip percent ="+tip_percent + " tip value = "+tip

}

// for undefined value
let result=calTips()
console.log(result)

// for defined value total 100 ,tips .2

result=calTips(.2,100)
console.log(result)

// for undefined tip (default value), defined total 100

result=calTips(undefined,100)
console.log(result)
