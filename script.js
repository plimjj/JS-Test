function revealMessage() {
  document.getElementById('hiddenMessage').style.display="block";
}

function patBotClick(){
  var div = document.createElement('h1');
  var text = 'Hello world, I am PatBot';
  var newH1 = document.body.appendChild(div);
  newH1.innerText = text;
}

function countDown() {
  var currentVal = document.getElementById("countDownButton").innerHTML;
  var newVal = 0;
  var currentHeart = document.getElementById("heart").innerHTML;
  var newHeart = 0;
  if (currentVal > 0) {
    newVal = currentVal - 1;
    newHeart = "<3".repeat(10-currentVal+2);
  }

  if (currentVal == 0) {
    alert("Too much love. You broke it!")
  }

  document.getElementById("countDownButton").innerHTML = newVal;
  document.getElementById("heart").innerHTML = newHeart;
}
