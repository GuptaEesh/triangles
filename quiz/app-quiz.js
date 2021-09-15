var formAns=document.querySelector("#quiz-form");
var btnSelector=document.querySelector("#btn");
var output=document.querySelector("#output");
var correctAns=['one right angle','a+b+c','65°','41°','obtuse','no'];

function Score(){
    var score=0;
    var i=0;
   var results=new FormData(formAns);
   for(var value of results.values()){
       if(value==correctAns[i]){
           score=score+1;
       }
       i=i+1;
   }
   output.innerText="The score is "+ score;
};
btnSelector.addEventListener("click",Score);
