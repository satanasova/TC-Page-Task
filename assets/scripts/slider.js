const slideShow = function(sliderSelector){
    let sliderWrapper = document.querySelector(sliderSelector);
    let slider = sliderWrapper.querySelector('.slider');
    let sliderImagesCount = slider.querySelectorAll('img').length;
    let sliderNav = sliderWrapper.querySelector('.slider-nav');
    let sliderWidth = slider.offsetWidth;
    let slideIndex = +sliderWrapper.getAttribute('data-idx');
    let prev = slider.querySelector('.prev');
    let next = slider.querySelector('.next');

    let navBtnString = '<span class="slidebar-nav-item"></span>';
    sliderNav.innerHTML = navBtnString.repeat(sliderImagesCount);
    sliderWrapper.setAttribute('data-idx', '0');

    let navBtns = Array.from(sliderNav.children);
    navBtns[0].classList.add('active');

    prev.addEventListener('click', () => {
        slider.scrollBy({ top: 0, left: -sliderWidth, behavior: 'smooth' });

        if (slideIndex > 0) {
            slideIndex -= 1;
            sliderWrapper.setAttribute('data-idx', slideIndex);
            setActiveBtn();
        }
    });

    next.addEventListener('click', () => {
        slider.scrollBy({ top: 0, left: sliderWidth, behavior: 'smooth' });

        if (slideIndex < sliderImagesCount - 1) {
            slideIndex += 1;
            sliderWrapper.setAttribute('data-idx', slideIndex);
            setActiveBtn();
        }
    });

    sliderNav.addEventListener('click', event => {
        let clickedBtn = event.target;
        if (!navBtns.includes(clickedBtn)){
            return;
        }

        let scrollToValue = sliderWidth*(navBtns.indexOf(clickedBtn));
        slider.scrollTo({ top: 0, left: scrollToValue, behavior: 'smooth' });
        slideIndex = navBtns.indexOf(clickedBtn);
        sliderWrapper.setAttribute('data-idx', slideIndex);
        setActiveBtn();
    })

    function setActiveBtn() {
        navBtns.forEach(navBtn => navBtn.classList.remove('active'));
        navBtns[slideIndex].classList.add('active');
    }
    
}





