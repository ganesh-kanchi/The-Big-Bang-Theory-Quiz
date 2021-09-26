var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("May I have your Name?");

console.log("Welcome "+userName+", Lets see how well you know The Big Bang Theory, obviously the show, Duh.. who cares about the actual thing. ");


var questions = [{
  question:"what theory does sheldon try to prove in his job? ",
  answer:"string theory"
},{
  question:"which city was penny from? ",
  answer:"nebraska"
},{
  question:"what was the name of raj's sister? ",
  answer:"priya"
},{
  question:"which international organization does howard work for occasionally? ",
  answer:"NASA"
},{
  question:"what is leonerd by profession? P.s: according to Sheldon. ",
  answer:"experimental physicist"
}];

function play(question,answer){
  var input= readlineSync.question(question)
  if (input===answer){
    console.log("You were Right!")
    score++
  } else {
    console.log("you were Wrong :( ")
  } console.log("your score is now "+score)
  console.log("-------------")
};

for(var i = 0; i < questions.length; i++){
  currentQuestion=questions[i];
  play(currentQuestion.question,
  currentQuestion.answer)
};

if(score <=3){
  "you have scored "+score+" shame on you, I expected better"
}else{"yippe! you have scored "+score+" Congratulations!,Bestie."}

console.log("here are the high score. ")
console.log("------------------------------")
console.log("1.NA")
console.log("2.NA")
console.log("------------------------------")
console.log("P.s: if you by any chance beat these scores ping so that i can update it and give you a certificate.")

