The Modern JavaScript Bootcamp

// define function with return object
let FahernheitTocellusis=function(Fahern){

    let celiusisRes=(Fahern-32)*(5/9)
    let  kelvinRes=(Fahern+459.67)*(5/9)

    
    return {
        //value does not need to be inside `` EX instead of doing the operation out of the object and passing the variable in a templete string 
        // you can just do it directly
        /*
        Fahernheit:Fahern,
        celiusis:(Fahern-32)*(5/9),
        kelvin: (Fahern+459.67)*(5/9)
        */ 
        Fahernheit:`${Fahern}`,
        celiusis:`${celiusisRes}`,
        kelvin: `${kelvinRes}`
    }

}

// set value (arguments)
let result =FahernheitTocellusis(0)
// the object , in this case result become the object
console.log(result)
// the fahernhite value
console.log(`this is the fahernheit value ${result.Fahernheit}`)
// the kelvin value
console.log(`this is the kelvin value ${result.kelvin}`)

// print the three value

console.log(`fahernheit :${result.Fahernheit} - kelvin :${result.kelvin} - celiusis:${result.celiusis} `)
