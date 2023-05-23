var numberOfdrum = document.querySelectorAll(".drum").length;


for(var i = 0 ; i < numberOfdrum ; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    backgroundLight(buttonInnerHTML);

  });
}


document.addEventListener("keydown",function(event){
  makeSound(event.key);

  buttonAnimation(event.key);

  backgroundLight(event.key);
})


function makeSound(key){
    switch (key) {
      case "a":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

      case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

      case "d":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

      case "f":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

      case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

      case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

      case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(this.innerHTML);
      break;
  }
}



function buttonAnimation(currentkey){
 var activeButton = document.querySelector("." + currentkey);

 activeButton.classList.add("pressed");


 setTimeout(function(){

  activeButton.classList.remove("pressed");
 }, 100);
}


function backgroundLight(character){
  var activeButton = document.querySelector("." + character);

  var arr = ['light1','light2','light3','light4','light5','light6','light7',];

  var idx = Math.floor(Math.random() * arr.length);
  
  var currentClass = arr[idx]; 

  activeButton.classList.add(currentClass);


 setTimeout(function(){
  activeButton.classList.remove(currentClass);
 }, 80);
}
