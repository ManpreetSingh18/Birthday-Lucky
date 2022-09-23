const dateOfBirth =document.querySelector("#date-of-birth");

const luckyNumber =document.querySelector("#lucky-number");

const checkNumberButton =document.querySelector("#check-number");

const outputBox=document.querySelector("#output-box");

function compareValues(sum){
    if(sum%luckyNumber.value ===0 ){
        outputBox.innerText="Your No is Lucky";
    }else{
        outputBox.innerText="Sorry Not Lucky!!";
    }
}

function checkBirthDateisLucky(){
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
   if(sum && luckyNumber.value)
    compareValues(sum,dob);
   else
   outputBox.innerText="Please enter both Fields!";
    
}
function calculateSum(dob){
     dob=dob.replaceAll("-","");
     let sum=0;
     for(let i=0;i<dob.length;i++){
        sum =sum+Number(dob.charAt(i));
     }
     return sum;
}
checkNumberButton.addEventListener('click',checkBirthDateisLucky)