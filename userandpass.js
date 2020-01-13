let username = prompt("Enter Username (it's Moe)", "");
//checks if username is equivalent to "Moe"
if(username != "Moe"){
  alert("Invalid Username");
}
else{
  //checks if password is equivalent to "Password"
  let pass = prompt("Enter Password (it's Password)", "");
  if(pass == "Password"){
    window.open("file:///C:/Main Stuff/Projects/HTML/Random Site Project/randomsite.html");
  }
  else{
    alert("Invalid Password");
  }
}
