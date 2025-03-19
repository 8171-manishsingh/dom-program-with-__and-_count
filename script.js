const title = document.getElementById("title")

const Add = document.getElementById("Add")
const sub = document.getElementById("sub")
const mul = document.getElementById("mul")
const moduls = document.getElementById("moduls")

let count = 0;

Add.addEventListener("click",() => {
       
    count++;
 title.innerHTML=count;
})
sub.addEventListener("click",() => {
       
  if(count>0)
  {
    count--;
    title.innerHTML=count;
  }
})
mul.addEventListener("click",() => {
    if(count==0)
        {
        document.writeln("can not used in 0")
        }
        else
        {
                 
           count*=2;
        title.innerHTML=count;
        }
})
moduls.addEventListener("click",() => {
       
   if(count==0)
 {
 document.writeln("can not used in 0")
 }
 else
 {
          
    count/=2;
 title.innerHTML=count;
 }
})