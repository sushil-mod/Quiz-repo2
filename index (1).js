
var realdlineSync=require("readline-sync");
var username=realdlineSync.question("what's your game name ? " );
var score=0; 
console.log("welcome ->  "+username.toUpperCase()+"  <- into game about how well do you know about Naruto anime? ");

var highscore=[
  {
    name:"sushil",
    score:"10"
  },
  
  {
    name:"vaibhav",
    score:"9"

  }]
function game(que,ans){
  var userans=realdlineSync.question(que);
  if(userans===ans){
    score=score+1;
    console.log("right :-) ");
  }else{
    console.log("wrong :-( ");
  }

}
var questions=[{
  question:"How many chakra nature in Naruto anime ? ",
  answer:"5"
},{
  question:"How many tailedbeasts are there in Naruto anime ? ",
  answer:"10"
},{
  question:"How many kages are there in Naruto anime ?  ",
  answer:"5"
},{
  question: " who among this option is second Hokage ? \n a.Hashirama \n b.Minato \n c.Tobirama \n d.Kakashi",
  answer:"c"
},{
  question:"who is the father of Naruto Uzumaki ?\n a.Jiraya \nb.Minato \nc.Sarutobhi \nd.Kakashi",
  answer:"b"
},{
  question:"which charater can only use taijutsu ?  \na.Tenten \nb.Shikamaru \nc.Mighty Guy \nd.Kakashi",
  answer:"c"
},{
  question:"who had the highest score in Konoha Acadmey History in Naruto ? \na.Minato \nb.Shikamaru \nc.Mighty Guy \nd.Kakashi",
  answer:"a"
},{
  question:" How many tails does Kokuō have ? ",
  answer:"5"
},{
  question:"Who Destroyed Konoha Village in Naruto ? ",
  answer:"pain"
},{
  question:" Who called 'The child who sacrificed himself to solve adult's problems.' ?  ",
  answer:"itachi"
}
]

for(var i=0;i<questions.length;i=i+1){
  var quest=questions[i];
  game(quest.question,quest.answer)
}
console.log("your final score is - "+score)
