// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {


  function substitution(input, alphabet, encode = true) {
    let message ="";
    let letterStr = "abcdefghijklmnopqrstuvwxyz";
 if(encode)
    {if(alphabet === undefined){
      return false;
    }
        if(alphabet.length!=26){
      return false;
    }
    let isUnique = true;
    let arr =[];
    for (let i=0;i<alphabet.length;i++){
        if (arr[alphabet[i].charCodeAt(0)]==true){
           isUnique = false;
          break;
        }
       arr[alphabet[i].charCodeAt(0)]=true;
    }
    if(!isUnique){
      return false;
    }
    
   for( let i=0; i< input.length; i++)
   {
     if(input[i]===" "){
       message+=" ";
     }else{
        let findInletterStr =letterStr.indexOf(input[i]);
        message+=alphabet[findInletterStr];
     }
   }
    }else{
     for( let i=0; i< input.length; i++)
   {
     if(input[i]===" "){
       message+=" ";
     }else{
        let findInletterStr =alphabet.indexOf(input[i]);
        message+=letterStr[findInletterStr];
     }
   }
     
   }
    
    
        return  message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
