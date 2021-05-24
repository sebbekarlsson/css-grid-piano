function playSound(filename) {
    var audio = new Audio('sounds/' + filename);
    audio.play();
}

const keys = document.querySelectorAll(".key");

keys.forEach(el => {
    el.addEventListener("click", function(event){
        const target = event.target;
        const name = target.getAttribute("data-value");

        playSound(name + ".wav");
    })
});