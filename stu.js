
var bottom = document.querySelector('#bottom');
var hit = document.querySelector(' #hit');
var score = document.querySelector('#score');
var time = document.querySelector('#time');

 var scorevalue = 0;
 var timer = 60;
 var hitValue;

function   bubbleCreator(){

   for(i=0;i<51;i++){
      var random = Math.floor(Math.random()*10)
      bottom.innerHTML += `<div class="bubble">${random}</div>`
   }
}

bubbleCreator();

bottom.addEventListener('click',function(details){
     var number = Number(details.target.innerHTML);

   if(number === hitValue){
        increasescore();
        bottom.innerHTML ='';
        bubbleCreator();
        gethitvalue();



   }

})

function gethitvalue(){
   hitValue = Math.floor(Math.random()*10);
   hit.innerHTML = hitValue;
}
gethitvalue();

function increasescore(){
   scorevalue = scorevalue + 10;
   score.innerHTML = scorevalue;
}

setInterval(function(){
  if(timer>0){

     timer = timer-1;
     time.innerHTML=timer;
   }
},1000)

