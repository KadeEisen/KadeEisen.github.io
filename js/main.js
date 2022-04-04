document.getElementById("button").addEventListener("click", buttonClicked);
document.getElementById("buttonManners").addEventListener("click", buttonClickedManners);
document.getElementById("game").addEventListener("mouseover", dare);

function buttonClicked()
{
  alert("There is no game.");
}

function buttonClickedManners()
{
  document.getElementById("game").innerHTML = "I dare you to hover over this.";
}

function dare()
{
  document.getElementById("game").innerHTML = "You just took orders from a computer.";
}
