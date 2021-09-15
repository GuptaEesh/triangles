var inputs=document.querySelectorAll("#angle");
var output=document.querySelector("#output");
var btnSelector=document.querySelector("#btn");
function clickHandler(){
    var sum=0;
    var flag=0;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value>=90){
            flag++; 
        }
        sum=sum+Number(inputs[i].value);
    }
    if(flag===2){alert("Can't form a triangle, 2 angles can't be greater than or eual to 90 degrees");}
    if(sum===180){
        output.innerText="Yes,it will form a triangle";
    }
    else{
    output.innerText="No,you might have to readjust angles";
}}
btnSelector.addEventListener("click",clickHandler);
