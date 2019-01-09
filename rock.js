var compfinal;

function rock() {
  var compchoices = ["rock","paper","scissors"];
  var comprandom = Math.floor(Math.random()*compchoices.length);
  var compfinal = compchoices[comprandom];
  console.log(compfinal);
  document.getElementById("guess").innerHTML = compfinal;
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
  var compchoices = ["rock","paper","scissors"];
  var comprandom = Math.floor(Math.random()*compchoices.length);
  var compfinal = compchoices[comprandom];
  console.log(compfinal);
  document.getElementById("guess").innerHTML = compfinal;
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
  var compchoices = ["rock","paper","scissors"];
  var comprandom = Math.floor(Math.random()*compchoices.length);
  var compfinal = compchoices[comprandom];
  console.log(compfinal);
  document.getElementById("guess").innerHTML = compfinal;
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