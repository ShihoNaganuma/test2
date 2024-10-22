"use strict";

document.getElementById("kokoro");
kokoro.addEventListener("click" , ()=>  {
 let x = Math.random();
 if (x > 0.6){
  x = `<p class = "p1">牛乳石けん 赤箱・青箱</p> <img class = "ph1" src =  "kokoro/kokoro2.jpg">`;
 }
else if(x > 0.3){
 x = `<p class = "p3">絵をかく</p> <img class = "ph1" src =  "kokoro/kokoro4.jpg">　`;
}

else if(x > 0.1){
    x = `<a class = "nami" href = "https://www.youtube.com/watch?v=ydYDqZQpim8">なみびあ動画</a>`;
}

 else {
  x = `<p class = "p2">読書</p> <img  class = "ph1" src = "kokoro/kokoro3.jpg">`;
 }
 document.getElementById("displayArea").innerHTML = x;   
});

