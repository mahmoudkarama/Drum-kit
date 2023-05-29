var drumList = document.querySelectorAll(".drum");
console.log(drumList.length);

for (var i = 0; i < drumList.length; i++) {
    //drumList[i].addEventListener("click", function () { alert("I got clicked!") });
    drumList[i].addEventListener("click", drum);
    function drum() {
        var btnName = this.innerHTML;
        console.log(btnName);
        if (btnName == "w") {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        }
        if (btnName == "a") {
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        }
        if (btnName == "s") {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        }
        if (btnName == "d") {
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        }
        if (btnName == "j") {
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        }
        if (btnName == "k") {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
        if (btnName == "l") {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        }
    }
}

