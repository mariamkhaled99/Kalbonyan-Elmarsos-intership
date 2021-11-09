The Modern JavaScript Bootcamp
// define objct with property function

let seatLeft

let restruant={
    name:'stero',
    guestCapcity:75,
    guestCount:0,
    avaliableSeats:function(partySize){

        seatLeft= this.guestCapcity -this.guestCount  // (this) is a way to access the current object
        return partySize<=seatLeft 
        // means return true if partysize is less than left seats that  means there is avaliable seats
    },
    seatParty:function(guestnum){
        if(this.avaliableSeats(guestnum)){
            this.guestCount=this.guestCount+guestnum
            this.avaliableSeats(guestnum)
            
          return ` ${this.name} has capacity of capacity is ${this.guestCapcity} 
           the number of current guests is ${this.guestCount} 
           and the left seat number is ${seatLeft}
           ` 
    
        }else{
            return `sorry there is no seats left for this number of people ${guestnum} only ${seatLeft} seats left
            ` 
        }
    
    },

    
removeParty:function(guestnum){
    if((seatLeft) >0 && seatLeft!=this.guestCapcity){
        this.guestCount=this.guestCount-guestnum
        this.avaliableSeats(guestnum)

        return `  ${this.name} has capacity of ${this.guestCapcity} 
         the number of current guests now is ${this.guestCount} after ${guestnum} just check out
         and the left seat number is ${seatLeft}
         `
    }
    else{
        return `you cannot remove party all seats is alerady avaliable , the left seat number is ${seatLeft}
        `
    }
    
 

}
    
}



//test 1
console.log('test 1')
let result=restruant.seatParty(76)
console.log(result)

result=restruant.removeParty(20)
console.log(result)
console.log('==============================================================================')
//test 2
console.log('test 2')
 result=restruant.seatParty(0)
console.log(result)

result=restruant.removeParty(20)
console.log(result)
console.log('==============================================================================')

//test 3 
console.log('test 3')
 result=restruant.seatParty(40)
console.log(result)

result=restruant.removeParty(20)
console.log(result)
console.log('==============================================================================')
