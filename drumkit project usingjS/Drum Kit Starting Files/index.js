var numberofDrumbuttons =document.querySelectorAll(".drum").length;
for ( var i=0; i<numberofDrumbuttons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 var buttoninnerHTML = this.innerHTML;
 makesound(buttoninnerHTML);

});

 

}

document.addEventListener("keypress", function(event){
    makesound(event.key);
});

function makesound(key){
    switch(key){
        case"w":
         var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
        break;
    case"a":
      var tom2 = new Audio('sounds/tom-2.mp3');
       tom2.play();
    break;
    
    case"s":
      var tom3 = new Audio('sounds/tom-3.mp3');
       tom3.play();
    break;
    
    case"d":
      var tom4 = new Audio('sounds/tom-4.mp3');
       tom4.play();
    break;
    
    case"j":
      var snare = new Audio('sounds/snare.mp3');
       snare.play();
    break;
    
    case"k":
      var crash = new Audio('sounds/crash.mp3');
        crash.play();
    break;
    
    case"l":
      var kick = new Audio('sounds/kick-bass.mp3');
       kick.play();
       break;

       case"f":
       var guitar = new Audio('sounds/ec.mp3');
       guitar.play();
       break;

       case"g":
       var violin = new Audio('sounds/violin.mp3');
       violin.play();
       break;

       case "h":
        var flute = new Audio('sounds/flute.mp3')
        flute.play();
        break;

    
    
    
    
        default:
     }

}




 