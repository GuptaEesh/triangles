var base=document.querySelector("#side-1");
var height=document.querySelector("#side-2");
var btnSelector=document.querySelector("#btn");
var output=document.querySelector("#output");
function clickHandler(){
    var hypo=Math.sqrt(base.value*base.value+height.value*height.value).toFixed(2);
    output.innerText="Hypotenuse of the right angled triangle is "+hypo;
}
btnSelector.addEventListener("click",clickHandler);