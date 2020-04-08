
var ran1=Math.floor(Math.random()*6)+1;
var randname1="images/dice"+ran1+".png";
var imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",randname1);


var ran2=Math.floor(Math.random()*6)+1;
var randname2="images/dice"+ran2+".png";
var imag2=document.querySelectorAll("img")[1];
imag2.setAttribute("src",randname2);

if(ran1>ran2)
{
  document.querySelector("h1").innerHTML="Player 1 wins ❤🧡"
}
else if(ran2>ran1)
{
  document.querySelector("h1").innerHTML="Player 2 wins ❤🧡"
}
else
{
  document.querySelector("h1").innerHTML="Ohhh!! It's a draw, refresh again 😂"
}
