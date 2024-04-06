String.prototype.toTitleCase = function(){
    return this.split(' ').map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
};


// > SLIDESHOW
let current = 0;
let images = document.querySelectorAll("#heroImages img");

let height = images[0].clientHeight; 





function slideshow(){
    images[current].classList.add("off")
    current ++;
    if(current >= images.length){
        current = 0;
    }
    images[current].classList.remove("off")


    setTimeout(slideshow, 5000);
}

slideshow();