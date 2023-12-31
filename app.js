AOS.init();

// background

const sliderImage = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png"];

let slider = document.querySelector('.background-image');
let sliderGridItem = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000)

const changeSliderImage = () => {
    sliderGridItem.map((gridItem, index) => {
        setTimeout(() => {

            gridItem.classList.remove('hide');

            setTimeout(() => {
            
                if (index == sliderGridItem.length - 1) {
                    if(currentImage >= sliderImage.length - 1) {
                        currentImage = 0;
                    } else {
                        currentImage++;
                    }

                    slider.src = `img/${sliderImage[currentImage]}`;

                    sliderGridItem.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide');
                        }, i * 100)
                    })
                }

            }, 100);

        }, index * 100);

    })

}

// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 188){
        navbar.classList.add('bg');
    } else {

        navbar.classList.remove('bg');
    }
})