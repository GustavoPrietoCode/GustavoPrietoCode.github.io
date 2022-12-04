/* Fade entrada web */
$(function(){
    $("body").hide().fadeIn(3000);
});

let image = document.querySelector('#image-1');
        let image2 = document.querySelector('#image-2');
        
        window.addEventListener('mousemove', function(e){
            let pixel = e.clientX + 'px';
            image.style.width = pixel
        })