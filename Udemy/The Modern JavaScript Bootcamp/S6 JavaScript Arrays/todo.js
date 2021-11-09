The Modern JavaScript Bootcamp

//<---------------------------------------------------first challange-------------------------------------

// let to_do=[
//     'cleaning the litter box for the cat ',
//     'eating lunch',
//     'finishing the array part',
//     'watering the plants',
//     'talking to my mother'
// ]

// let todos_print = function(to_do){

//     console.log(`you have ${to_do.length}`)
//     console.log(`to dos: ${to_do[0]}`)//first item
//     console.log(`to dos: ${to_do[to_do.length-1]}`)//last item


// }

// todos_print(to_do)





//<---------------------------------------------------second challange-------------------------------------

// let to_do=[
//     'cleaning the litter box for the cat ',
//     'eating lunch',
//     'finishing the array part',
//     'watering the plants',
//     'talking to my mother'
// ]


//delete the 3rd item (splice method)

/*let result =to_do.splice(2,1)
console.log(`you have ${to_do.length}`)
console.log(`to dos: ${to_do}`)
*/
//add new item on the end (push method)
/*result =to_do.push('coding')
console.log(`you have ${to_do.length}`)
console.log(`to dos: ${to_do}`)*/

// remove the first item (shift method)
/*result =to_do.shift()
console.log(`you have ${to_do.length}`)
console.log(`to dos: ${to_do}`)*/
   

//<---------------------------------------------------third challange-------------------------------------

/*let to_do=[
    'cleaning the litter box for the cat ',
    'eating lunch',
    'finishing the array part',
    'watering the plants',
    'talking to my mother'
]*/
//number of item in the array

/*console.log(`to dos: ${to_do.length}`)*/
   
// iterating the items in the array
/*to_do.forEach(function(item,index) {

    console.log(`${index+1}.${item}`)
    
});*/

//<---------------------------------------------------fourth challange-------------------------------------

/*let to_do=[
    'cleaning the litter box for the cat ',
    'eating lunch',
    'finishing the array part',
    'watering the plants',
    'talking to my mother'
]

for(let count=0;count<to_do.length;count++){
    console.log(`${count+1}.${to_do[count]}`)
}*/

//<---------------------------------------------------fifth challange-------------------------------------

// <-------------------------array of objects------------------------------->
/*let to_do=[{
    text:'cleaning the litter box for the cat ',
    complete:true
           }, 

    { 
    text:'watering the plants',
    complete:false
                  },
    { 
    text:'eating lunch',
    complete:true
                   },
    {
    text:'finishing the array part',
    complete:false
                   },
    {
    text:'talking to my mother',
    complete:true
}
    
]*/


/*const deleteTo_do=function(toDO,text){
    const index=toDO.findIndex(function(toDO){
        return toDO.text.toLowerCase()=== text.toLowerCase()

    })
    //console.log(index)

    // when the text doesnot exit it return -1 which case of remove the last item in the array of object
    // that is the benifit of if here.
    if(index>=0){
        return toDO.splice(index,1)
    }
   

}

//test for undefined text 
deleteTo_do(to_do,'cleaning the litter  ')
console.log(to_do)

//test for  defined text 
deleteTo_do(to_do,'cleaning the litter box for the cat ')
console.log(to_do)*/



//<---------------------------------------------------sixth challange-------------------------------------

// <-------------------------filtering use includes method and filter method------------------------------->
/*let to_do=[{
    text:'cleaning the litter box for the cat ',
    complete:true
           }, 

    { 
    text:'watering the plants',
    complete:false
                  },
    { 
    text:'eating lunch',
    complete:true
                   },
    {
    text:'finishing the array part',
    complete:false
                   },
    {
    text:'talking to my mother',
    complete:true
}
    
]*/

//filter method take one only arguments (function) and return an array with the new condition

/*const getThingsToDo= function (to_do ){
    return to_do.filter(function (to_do){
      return to_do.complete===false  // shortcut !to_do.complete  to get the false result

    })
}

console.log(getThingsToDo(to_do))
*/



//<---------------------------------------------------seventh challange-------------------------------------

// <-------------------------sorting use sort method and a< b a should come first -1------------------------------->
let to_do=[{
    text:'cleaning the litter box for the cat ',
    complete:true
           }, 

    { 
    text:'watering the plants',
    complete:false
                  },
    { 
    text:'eating lunch',
    complete:true
                   },
    {
    text:'finishing the array part',
    complete:false
                   },
    {
    text:'talking to my mother',
    complete:true
                 },
  {
    text:'playing games',
    complete:false
                }             

    
]
const sortingTodos=function(to_do){
    to_do.sort(function(a,b){
        if((a.complete===false)&&(b.complete===true)){
            return -1  //< 0 mean if a should come brfore b
        }else if((b.complete===false)&&(a.complete===true)){
                      //>0 mean if b should come brfore a
            return 1
        }else{
            return 0 //keep original order of a and b
        }

    })
}


sortingTodos(to_do)
console.log(to_do)
