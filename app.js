const hour=document.getElementById('hr');
const minute=document.getElementById('min');
const second=document.getElementById('second');
const digi_hour=document.querySelector("#digi-hr");
const digi_min=document.querySelector("#digi-min");
const digi_sec=document.querySelector("#digi-sec");
console.log(hour,minute,second);

setInterval( () =>
{
let date=new Date();
let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();

hour.style.transform=`rotateZ(${(30*hr)+(min/2)}deg)`;
minute.style.transform=`rotateZ(${(6*min)}deg)`;
second.style.transform=`rotateZ(${(6*sec)}deg)`;
if(hr<10){
    digi_hour.innerHTML="0"+hr;
}
else {
    digi_hour.innerHTML=""+hr;
}
if(min<10){
    digi_min.innerHTML="0"+min;
}
else {
    digi_min.innerHTML=""+min;
}
if(sec<10){
    digi_sec.innerHTML="0"+sec;
}
else {
    digi_sec.innerHTML=""+sec;
}
}
)