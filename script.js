
//////

var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", halfNumber);

function halfNumber(){
  var halfinput = document.getElementById('half-input').value;
  var answerQuotient = halfinput / 2;

  if (halfinput){
    alert("Half of " + halfinput + " equals " + answerQuotient);
  }
  else {
    alert("Invalid");
  }

}

//////


var fortuneButton = document.getElementById("fortune-button");
fortuneButton.addEventListener("click", fortune);

function fortune(){
  var nameinput = document.getElementById("fortune-input").value;
  var fortune = ["someone is always thinking about you", "you will have difficulty with this class", "you must work hard to succeed", "you will be loved this year"];
  var outcome = fortune[Math.floor(Math.random() * fortune.length)];
  var fortuneSentence = nameinput + ", " + outcome;
  document.getElementById("fortune-output").innerHTML = '<span class="fortuneSentenceStyle">' + fortuneSentence + '</span>';

}


///// ????? confused about this part


//function restyle(){

//  var typefaces = ["sans-serif", "cursive", "monospace", "serif", "fantasy"];
//  var letterSpacing = Math.random() * 5;
//  var color = ["green", "yellow", "red", "purple", "orange", "blue"];
