function getsound(key){
   
   switch(key){
       case "w":
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play(); 
                break;
            
            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            
            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            
                default:
                    alert("something went wrong");
                    break;
   }
}


var numberOfDrumButton=document.querySelectorAll(".drum").length;

for (i=0;i<numberOfDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttominnerhtml= this.innerHTML;
        getsound(buttominnerhtml);
        aniamationbutton(buttominnerhtml);

    });
     
}


document.addEventListener("keypress", function(event){
    getsound(event.key);
    aniamationbutton(event.key);
});


function aniamationbutton(currentvalue){
    var activebutton=document.querySelector("." + currentvalue);
    activebutton.classList.add("pressed");
   
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);

} 