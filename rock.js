var compchoices = ["rock","paper","scissors"];
var comprandom = Math.floor(Math.random()*compchoices.length);
var compfinal = compchoices[comprandom];

function rock() {
  if ((compfinal == "rock") && (user == "rock")) {
  window.alert("tie")
}
  else if (compfinal == "paper") {
  window.alert("you lose");
}
  else {
  window.alert("you win i guess");
}
}
function paper() {
  if ((compfinal == "paper") && (user == "paper")) {
  window.alert("tie")
}
  else if (compfinal == "scissor") {
  window.alert("you lose");
}
  else {
  window.alert("you win i guess");
}
}
function scissors() {
  if ((compfinal == "scissors") && (user == "scissors")) {
  window.alert("tie")
}
  else if (compfinal == "rock") {
  window.alert("you lose");
}
  else {
  window.alert("you win i guess");
}
}
