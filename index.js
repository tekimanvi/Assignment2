let myflashcards = [
    {
        question: "What animal is this?",
        answer: "Zebra",
        image: "zebra.jpg"
    },
    {
        question: "What animal is this?",
        answer: "Horse",
        image: 
    },
    {
        question: "What animal is this?",
        answer: "Monkey ",
        image:
    }]

let i = 0;
let ques = document.getElementById('q');
let ans = document.getElementById('a');
let display = document.getElementById('Q');
let next = document.getElementById('N');

display.addEventListener("click",function(){
    // display.textContent="changed";
    ques.innerHTML = a;
  })

let a='';
let b='';

function update(){
     a=myflashcards[i].question;
     b=myflashcards[i].answer;
}

while (i < myflashcards.length){
     a=myflashcards[i].question;
     b=myflashcards[i].answer;
  
  display.addEventListener("mouseover",function(){
    update();
    ques.innerHTML = a;
  })
  
   ques.addEventListener("mouseover",function(){
    update();
    ans.innerHTML = b;
    i++;
    console.log(i);
    
  })
 
 next.addEventListener("mouseover",function() {
    // i++;
    // console.log(i); 
    // a=myflashcards[i].question;
     update();     
     console.log(a);
     ques.innerHTML = a;
        ans.innerHTML = '';
          
    });
    
    break;

 
 }
