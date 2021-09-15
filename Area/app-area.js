var input=document.querySelectorAll("#side-length");
var btnSelector=document.querySelector("#btn");
var output=document.querySelector("#output");
function clickHandler(){
    var semi=0,a=Number(input[0].value),b=Number(input[1].value),c=Number(input[2].value);
    semi=(a+b+c)/2;
    if ( a+b>c && b+c>a && a+c>b)
    {
        var res=Math.sqrt(semi*(semi-a)*(semi-b)*(semi-c)).toFixed(3);
    
    output.innerText="Area of Triangle is "+res;  
    }
    else{
        output.innerText="Put valid side lengths";
    }
}
btnSelector.addEventListener("click",clickHandler);