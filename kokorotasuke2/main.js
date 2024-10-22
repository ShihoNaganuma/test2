"use strict";

document.getElementById("kokoro");
kokoro.addEventListener("click" , ()=>  {
 let x = Math.random();
 if (x > 0.6){
  x = `<p class = "p1">WRAPで話し合う</p> <img class = "ph1" src =  "kokoro/kokoro2_1.jpg">`;
 }
else if(x > 0.3){
 x = `<p class = "p3">精神科医の先生に相談</p> <img class = "ph1" src =  "kokoro/kokoro4_1.jpg">　`;
}

else if(x > 0.1){
    x = `<a class = "nami" href = "https://www.youtube.com/watch?v=ydYDqZQpim8">なみびあ動画</a>`;
}

 else {
  x = `<p class = "p2">こころ場所に参加</p> <img  class = "ph1" src = "kokoro/kokoro3_1.jpg">`;
 }
 document.getElementById("displayArea").innerHTML = x;   
});

