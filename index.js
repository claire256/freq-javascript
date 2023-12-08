// CHARACTER FREQUENCY FUNCTION FOR A STRING IN AN OBJECT

function calcFrequency(string){
   let frequency = {}
   
   for(let inc=0; inc < string.length; inc++){
    let char = string[inc]
    if(frequency[char]){
       frequency[char]+= 1
       }
    else{
        frequency[char] =1
    }
   }
   return frequency
}
console.log(calcFrequency("Book"))