const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');
    
    function go(currentStep,nextStep)
        {
            let dNone, dBlock;
            if(currentStep == 1)
            {
                dNone = firstDiv;
            }
            else if(currentStep == 2)
            {
                dNone = secondDiv;
            }
            else
            {
                dNone = finalDiv;
            }
            dNone.style.display = 'none';

            if(nextStep == 1)
            {
                dBlock = firstDiv;
            }
            else if(nextStep == 2)
            {
                dBlock = secondDiv;
            }
            else
            {
                dBlock = finalDiv;
            }
            dBlock.style.display = 'block';
        }
       
    
function validateImc(){
   const peso = document.getElementById("peso");
   const altura = document.getElementById("altura");

   if(!peso.value || !altura.value)
   {
      console.log("campos incorretos");
   }
   else{
      console.log("tudo ok! Calcular")
   }
}