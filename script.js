let y = 15
let arr = [
  //Array of random websites
  "https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwi5isnIpfLiAhWTonEKHZ-EBmEQPQgH",
  "https://en-maktoob.yahoo.com/?p=us&guccounter=1",
  "https://www.w3schools.com/",
  "https://www.wikipedia.org/",
  "https://www.sfu.ca/",
  "https://en.wikipedia.org/wiki/Computer_science",
  "https://www.python.org/",
  "https://www.javascript.com/",
  "https://www.pinterest.com/pin/530650768571273500",
  "http://www.tutorialspoint.com/php/php_tutorial.pdf",
  "https://www.idealware.org/bringing-button-back/",
  "https://www.linkedin.com/",
  "https://picsum.photos/",
  "https://en.wikipedia.org/wiki/Water",
  "https://www.google.com/search?q=cricket+world+cup&rlz=1C1GCEU_enAE853AE853&oq=cricket+world+cup&aqs=chrome..69i57j0l5.3364j1j4&sourceid=chrome&ie=UTF-8#sie=m;/g/11f66h8hc8;5;/m/021vk;dt;fp;1;;"];
//This function is to generate a random index to open up
// a random website then it removes the site from the list
function randomsite(){
  let x = Math.floor(Math.random() * y);
  //alert(x);
  window.open(arr[x],"_blank");
  let i = 0;
  //Removes the site that has just been displayed to
  //avoid repitition
  arr.splice(x,1);
  //Decrements y since the number of sites has decreased
  y--;
}
