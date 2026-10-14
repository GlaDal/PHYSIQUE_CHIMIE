const quiz = [

{
question:"Quelle est la formule de la quantité de matière ?",
answers:[
"n = m / M",
"n = M / m",
"n = C / V",
"n = V / C"
],
correct:0
},

{
question:"Combien vaut NA ?",
answers:[
"6,02×10²¹",
"6,02×10²²",
"6,02×10²³",
"6,02×10²⁴"
],
correct:2
},

{
question:"Formule de la concentration ?",
answers:[
"C = V/n",
"C = n/V",
"C = m/V",
"C = ρ/V"
],
correct:1
},

{
question:"Formule de dilution ?",
answers:[
"C1V1=C2V2",
"C1/C2=V1/V2",
"n=m/M",
"ρ=m/V"
],
correct:0
},

{
question:"Valeur classique de Vm ?",
answers:[
"2,4 L/mol",
"24 L/mol",
"240 L/mol",
"0,24 L/mol"
],
correct:1
}

];

let current = 0;

function showSection(id){

document
.querySelectorAll(".page")
.forEach(p=>p.classList.add("hidden"));

document
.getElementById(id)
.classList.remove("hidden");
}

function flip(el){

const front = el.querySelector(".front");
const back = el.querySelector(".back");

if(back.style.display==="block"){
back.style.display="none";
front.style.display="block";
}
else{
back.style.display="block";
front.style.display="none";
}
}

function loadQuestion(){

const q = quiz[current];

document.getElementById("question").innerHTML =
q.question;

const answers =
document.getElementById("answers");

answers.innerHTML="";

q.answers.forEach((answer,index)=>{

const btn =
document.createElement("button");

btn.className="answer";

btn.innerHTML=answer;

btn.onclick=()=>check(index);

answers.appendChild(btn);

});

document.getElementById("result").innerHTML="";
}

function check(index){

const q = quiz[current];

const result =
document.getElementById("result");

if(index===q.correct){

result.innerHTML =
"✅ Bonne réponse";

}
else{

result.innerHTML =
"❌ Mauvaise réponse";

}
}

function nextQuestion(){

current++;

if(current>=quiz.length){
current=0;
}

loadQuestion();
}

loadQuestion();
