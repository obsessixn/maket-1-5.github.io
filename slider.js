const slider = document.querySelector('.logo-slider');

let mySwiper;

function mSlider(){
    if (window.innerWidth <= 767 && slider.dataset.mobile == "false"){
        mySwiper = new Swiper(slider,{
            spaceBetween: 16,
            loop: true,
            slideClass : 'swiper-slide',
            pagination:{
                el: '.swiper-pagination',
                clickable: true,

             },
             breakpoints: {
                320: {
                    slidesPerView: 1.25
                },
                480: {
                    slidesPerView: 2.1
                },
                660: {
                    sliderPerView: 3.1
                },
             }
        });

        slider.dataset.mobile = 'true';
    }

    if(window.innerWidth >= 767) {
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