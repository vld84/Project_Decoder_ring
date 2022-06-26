// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let messageToReturn="";
    let inputLower=input.toLowerCase();
    //If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false
    if(shift===0 || shift<=-25 || shift>=25)
      return false;

    //A positive number means shifting to the right && encode = true
    if(shift>0 && encode)
      {   console.log("Positive======>"+shift)
       
        for(let i=0; i<inputLower.length; i++) {
          //Spaces should be maintained throughout, as should other nonalphabetic symbols.
           if(inputLower.charCodeAt(i)<97||inputLower.charCodeAt(i)>122){
              messageToReturn+=inputLower[i];
          }
          else if(inputLower.charCodeAt(i)+shift<=122){
            messageToReturn+=String.fromCharCode(inputLower.charCodeAt(i)+shift);
            console.log("Positive= messageToReturn=====>"+ messageToReturn);
             }else{
              
                 messageToReturn+=String.fromCharCode(inputLower.charCodeAt(i)+shift-26);
                 console.log("Positive= greater 122=====>"+  messageToReturn);
             }
        }
      
      }
  
    //a negative number means shifting to the left && encode = true
     if(shift<0 && encode)
      {  
      
       for(let i=0; i<inputLower.length; i++) {
        // Spaces should be maintained throughout, as should other nonalphabetic symbols.
         if(inputLower.charCodeAt(i)<97||inputLower.charCodeAt(i)>122){
              messageToReturn+=inputLower[i];
          }
          else if(inputLower.charCodeAt(i)+shift>=97){
            messageToReturn+=String.fromCharCode(inputLower.charCodeAt(i)+shift);
           
             }else{
                messageToReturn+=String.fromCharCode(123-(97-inputLower.charCodeAt(i)-shift));
              
              
             }
        }
      
      }
    
    
    
    
    
     //A positive number means shifting to the right && encode = false
    if(shift>0 && !encode)
      {  
       
        for(let i=0; i<inputLower.length; i++) {
          //Spaces should be maintained throughout, as should other nonalphabetic symbols.
           if(inputLower.charCodeAt(i)<97||inputLower.charCodeAt(i)>122){
              messageToReturn+=inputLower[i];
          }
          else if(inputLower.charCodeAt(i)-shift>96 && inputLower.charCodeAt(i)-shift<122){
            messageToReturn+=String.fromCharCode(inputLower.charCodeAt(i)-shift); }else{
              
                 messageToReturn+=String.fromCharCode(inputLower.charCodeAt(i)-shift+26);
                
             }
        }
      
      }   
    //a negative number means shifting to the left && encode = false
     if(shift<0 && !encode)
      {   console.log("last case"+ messageToReturn);
      
       for(let i=0; i<inputLower.length; i++) {
        // Spaces should be maintained throughout, as should other nonalphabetic symbols.
         if(inputLower.charCodeAt(i)<97||inputLower.charCodeAt(i)>122){
              messageToReturn+=inputLower[i];
          }//if ==97, then 122+shift
          else if(inputLower.charCodeAt(i)===97){
            messageToReturn+=String.fromCharCode(122+shift);
           
             }// if =122, then 97-shift
          else if(inputLower.charCodeAt(i)===122){
            messageToReturn+=String.fromCharCode(97-shift);
           
             }
          else if(inputLower.charCodeAt(i)+shift<97){
            messageToReturn+=String.fromCharCode(inputLower.charCodeAt(i)-shift);
         
             } else if(inputLower.charCodeAt(i)-shift>122){
            messageToReturn+=String.fromCharCode(96+((inputLower.charCodeAt(i)-shift)-122));
          
             }
         else{
                messageToReturn+=String.fromCharCode(inputLower.charCodeAt(i)-shift);
                 
               
              
             }
 }
      
      }

   
    return  messageToReturn;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
