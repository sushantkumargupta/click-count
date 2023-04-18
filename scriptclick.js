var box=document.getElementById('box');
var click=document.getElementById('Click-count');
count=0;

box.addEventListener('click', function(){
  count++;
  console.log(count);
  click.innerText=count+" ";
});