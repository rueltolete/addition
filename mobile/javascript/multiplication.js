var myTotalScore = 0;
var myWrongAnswer = 0;
var answerSelected = 0;
var questionIndex = 0;

function myFunction() { /* Begin myFunction */
  // Clear answerSelected flag
  answerSelected = 0;
  questionIndex++;
  
  //Get 2 integers radomly
  x=Math.floor(10*Math.random()); //First number
  y=Math.floor(10*Math.random()); //Second number
  // Display question to the browser
  document.getElementById("myQuestion").innerHTML =  x + " x " + y + " = ?";
  // Display current question index
  document.getElementById("myQuestionID").innerHTML ="Q:" + questionIndex;

  // Randomly select which tile to place the right answer
  // [Option1] [Option2]
  // [Option3] [Option4]
  z=Math.floor(4*Math.random()); //Random 0,1,2,3

  if (z==0){
    document.getElementById("option1").innerHTML=x*y;
    document.getElementById("option2").innerHTML=x*y+1;
    document.getElementById("option3").innerHTML=x*y+2;
    document.getElementById("option4").innerHTML=x*y-3;
  }
  if (z==1){
    document.getElementById("option2").innerHTML=x*y;
    document.getElementById("option3").innerHTML=x*y+1;
    document.getElementById("option4").innerHTML=x*y+2;
    document.getElementById("option1").innerHTML=x*y-3;
  }
  if (z==2){
    document.getElementById("option3").innerHTML=x*y;
    document.getElementById("option4").innerHTML=x*y+1;
    document.getElementById("option1").innerHTML=x*y+2;
    document.getElementById("option2").innerHTML=x*y-3;
  }
  if (z==3){
    document.getElementById("option4").innerHTML=x*y;
    document.getElementById("option1").innerHTML=x*y+1;
    document.getElementById("option2").innerHTML=x*y+2;
    document.getElementById("option3").innerHTML=x*y-3;
  }
  if (questionIndex==50){
    alert("End of quiz!");
    window.open("index.htm","_self")
  }
} /* End myFunction */

$(document).ready(function(){
  $("#option1").click(function(){
    if((document.getElementById("option1").innerHTML)==(x*y)){
      document.getElementById("myResult").innerHTML = "Correct!";
      $("#myResult").show().css("color","blue").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(2500);

      if (answerSelected==0){
        myTotalScore++;
        document.getElementById("myScore").innerHTML = "C:" + myTotalScore;
        document.getElementById("myMeterScore").innerHTML = myTotalScore;
        $("#metermulti").attr({"value":myTotalScore});
      }
      answerSelected = 1;
      myFunction();
    }
    else {
      myWrongAnswer++;
      document.getElementById("myWrong").innerHTML = "W:" + myWrongAnswer;
      document.getElementById("myResult").innerHTML = "Wrong!";
      $("#myResult").show().css("color","red").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(2500);
      myFunction();
    }
  });
  $("#option2").click(function(){
    if((document.getElementById("option2").innerHTML)==(x*y)){
      document.getElementById("myResult").innerHTML = "Correct!";
      $("#myResult").show().css("color","blue").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(2500);

      if (answerSelected==0){
        myTotalScore++;
        document.getElementById("myScore").innerHTML = "C:" + myTotalScore;
        document.getElementById("myMeterScore").innerHTML = myTotalScore;
        $("#metermulti").attr({"value":myTotalScore});
      }
      answerSelected = 1;
      myFunction();
    }
    else {
      myWrongAnswer++;
      document.getElementById("myWrong").innerHTML = "W:" + myWrongAnswer;
      document.getElementById("myResult").innerHTML = "Wrong!";
      $("#myResult").show().css("color","red").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(2500);
      myFunction();
    }
  });
  $("#option3").click(function(){
    if((document.getElementById("option3").innerHTML)==(x*y)){
      document.getElementById("myResult").innerHTML = "Correct!";
      $("#myResult").show().css("color","blue").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(2500);

      if (answerSelected==0){
        myTotalScore++;
        document.getElementById("myScore").innerHTML = "C:" + myTotalScore;
        document.getElementById("myMeterScore").innerHTML = myTotalScore;
        $("#metermulti").attr({"value":myTotalScore});
      }
      answerSelected = 1;
      myFunction();
    }
    else {
      myWrongAnswer++;
      document.getElementById("myWrong").innerHTML = "W:" + myWrongAnswer;
      document.getElementById("myResult").innerHTML = "Wrong!";
      $("#myResult").show().css("color","red").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(2500);
      myFunction();
    }
  });
  $("#option4").click(function(){
    if((document.getElementById("option4").innerHTML)==(x*y)){
      document.getElementById("myResult").innerHTML = "Correct!";
      $("#myResult").show().css("color","blue").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(2500);

      if (answerSelected==0){
        myTotalScore++;
        document.getElementById("myScore").innerHTML = "C:" + myTotalScore;
        document.getElementById("myMeterScore").innerHTML = myTotalScore;
        $("#metermulti").attr({"value":myTotalScore});
      }
      answerSelected = 1;
      myFunction();
    }
    else {
      myWrongAnswer++;
      document.getElementById("myWrong").innerHTML = "W:" + myWrongAnswer;
      document.getElementById("myResult").innerHTML = "Wrong!";
      $("#myResult").show().css("color","red").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(2500);
      myFunction();
    }
  });
});