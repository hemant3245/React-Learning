const radius = [3,2,1,4]

const area = (radius)=>{
    return Math.PI * radius * radius
}

const calculate = function(radius){
    const output = [];
    for(let i = 0; i<radius.length; i++)
    {
        output.push();
    }
    return output;
}

const calArea = function(radius){
    const output = []; // empty array
    for(let i = 0; i<radius.length; i++)
    {
        output.push(Math.PI * radius[i] * radius[i]); //pushing values into empty array
    }
    return output; //outputing array
}
console.log(calArea(radius));

const calCircumference = function(radius){
    const output = [];
    for(let i = 0; i<radius.length; i++)
    {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calCircumference(radius));

const calDiameter = function(radius){
    const output = [];
    for(let i = 0; i<radius.length; i++)
    {
        output.push(2 *radius[i]);
    }
    return output;
}
console.log(calDiameter(radius));