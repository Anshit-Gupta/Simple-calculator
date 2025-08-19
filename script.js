const displayText= document.querySelector("#display-text");
const result=document.querySelector("#result");
const equal=document.querySelector("#equal");
const backspace=document.querySelector("#backspace");
const clear=document.querySelector("#clear");

let cal="";
function addDisplayText(e){
        displayText.textContent+=e;
}




const btn=document.querySelectorAll(".buttonClass");
btn.forEach(e=>{
    e.addEventListener("click",function(){
        addDisplayText(e.textContent);
        cal+=e.textContent;
    });
});
equal.addEventListener("click",function(){
    
    
    
        try {
        let ans=eval(cal);
        if(ans==Infinity||ans==-Infinity|| isNaN(ans)){
           result.textContent="invalid input";
           cal="";
           return;
        } 
        displayText.textContent="";
        result.textContent=ans;
        cal=result.textContent;
     } catch (error) {
        result.textContent="invalid input";
     };
    
     
    

});

backspace.addEventListener("click", function(){
      displayText.textContent=displayText.textContent.slice(0,-1);
      cal=cal.slice(0,-1);
});

clear.addEventListener("click",function(){
    displayText.textContent="";
    result.textContent="";
    cal="";
})

document.addEventListener("keydown", function(e){
    
    if(e.key=="Backspace"){
        backspace.click();
    };
    if(e.key=="Enter"){
        equal.click();
    };
    if(e.key=="Escape"){
        clear.click();
    };


    
  if (!isNaN(e.key)) {
    // if key is a number
    displayText.textContent += e.key;
    cal += e.key;
  }

  if (["+", "-", "*", "/"].includes(e.key)) {
    displayText.textContent += e.key;
    cal += e.key;
  }
})
