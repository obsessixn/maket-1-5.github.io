const slider = document.querySelector('.logo-slider');

let mySwiper;

function mSlider(){
    if (window.innerWidth <= 767 && slider.dataset.mobile == "false"){
        mySwiper = new Swiper(slider,{
            sliderPerView: 1.25,
            spaceBetween: 16,
            loop: true,
            slideClass : 'swiper-slide',
            pagination:{
                el: '.swiper-pagination',
                clickable: true,

             },
        });

        slider.dataset.mobile = 'true';
    }

    if(window.innerWidth > 767) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
  
}

mSlider();

window.addEventListener('resize', () =>{
    mSlider();
});