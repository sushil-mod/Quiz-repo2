const chalk = require('chalk');

var realdlineSync=require("readline-sync");
var rAnswer = chalk.bold.green;
var wAnswer = chalk.bold.red;
var scoreColor = chalk.black.bgWhite;

var username=realdlineSync.question(chalk.blue( "what's your game name ? ") );
var score=0;
var k=0; 
var highscore=[
  {
    name:"sushil",
    score:"10"
  },
  
  {
    name:"vaibhav",
    score:"9"

  }]

console.log("welcome ->  "+username.toUpperCase()+"  <- into game about how well do you know about Naruto anime? ");
console.log("Let's start......................");
console.log(highscore[0].score);
function game(que,ans){
  k=k+1;
  var userans=realdlineSync.question(k+") "+que+"\n"+"your answer:- "); 
  if(userans===ans){
    score=score+1;
    console.log("right 😊\n");
  }else{
    console.log("wrong 😔\n");
  }

}
var questions=[{
  question:"How many chakra nature in Naruto anime ? \n",
  answer:"5"
},{
  question:"How many tailedbeasts are there in Naruto anime ?\n ",
  answer:"10"
},{
  question:"How many kages are there in Naruto anime ? \n ",
  answer:"5"
},{
  question: " who among this option is second Hokage ? \n a.Hashirama \n b.Minato \n c.Tobirama \n d.Kakashi\n",
  answer:"c"
},{
  question:"who is the father of Naruto Uzumaki ?\n a.Jiraya \nb.Minato \nc.Sarutobhi \nd.Kakashi\n",
  answer:"b"
},{
  question:"which charater can only use taijutsu ?  \na.Tenten \nb.Shikamaru \nc.Mighty Guy \nd.Kakashi\n",
  answer:"c"
},{
  question:"who had the highest score in Konoha Acadmey History in Naruto ? \na.Minato \nb.Shikamaru \nc.Mighty Guy \nd.Kakashi\n",
  answer:"a"
},{
  question:" How many tails does Kokuō have ?\n ",
  answer:"5"
},{
  question:"Who Destroyed Konoha Village in Naruto ?\n ",
  answer:"pain"
},{
  question:" Who called 'The child who sacrificed himself to solve adult's problems.' ?  \n ",
  answer:"itachi"
}
]

for(var i=0;i<questions.length;i=i+1){
  var quest=questions[i];
  game(quest.question,quest.answer);
}

if (score==highscore[0].score){
  console.log(" you beaten the highest score  - "+score+"\n");
}else{
  console.log("your score is  "+score+"\n")
}


if(score>="7"){
console.log("congrats!!  you are advancing to lvl 2 ");
}else{
  console.log("sorry !! score is too low for lvl 2 ");
}
