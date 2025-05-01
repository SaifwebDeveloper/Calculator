function cgpa(){
let Fst= document.getElementById('Frist_Semester').value;
let sec=document.getElementById('nd_Semester').value;
let trd=document.getElementById('rd_Semester').value;
let fourth=document.getElementById('th_Semester').value;
let fifth=document.getElementById('fth_Semester').value;
let Result=((+Fst + +sec + +trd + +fourth + +fifth)/20) * 4;
let formattedResult=Result.toFixed(2);
console.log(formattedResult)
document.getElementById('para').textContent=`Your CGPA is:${formattedResult
}`;}