let ansbar = document.getElementById("ansbar");
let btn = document.querySelectorAll(".btn");

let string = ' ';

btn.forEach(btn=>{
   btn.addEventListener('click',(e)=>{
    if(e.target.innerHTML == 'DE'){
        string = string.substring(0,string.length-1);
        ansbar.value=string;
    }
    else if(e.target.innerHTML == 'C'){
        string = ' ';
        ansbar.value=string;
    }
    else if(e.target.innerHTML == '='){
        string = eval(string);
        ansbar.value = string;
    }
    else{
        string += e.target.innerHTML ;
        ansbar.value=string;
    }
    // console.log(e.target.innerHTML);
   });
});