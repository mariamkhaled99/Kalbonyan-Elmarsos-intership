The Modern JavaScript Bootcamp

let calTips=function(tip_percent=.3,total){
    tip=tip_percent*total
    total+=tip
    
    //return "total="+total+" for tip percent ="+tip_percent + " tip value = "+tip

    return `total= ${total} for tip percent = ${tip_percent }  tip value = ${tip}`
    
    }
    

result=calTips(.2,100)
console.log(result)
