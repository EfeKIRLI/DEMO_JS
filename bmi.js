
function calcBMI(weight,height) { 
   
    // let weight = parseFloat(prompt("Please Weight(kg)"))   
    // let height = parseFloat(prompt("Please height(kg)"))
   
    let bmi = (weight / height**2)
    return Math.round(bmi);

}

console.log(calcBMI(65,1.8))


