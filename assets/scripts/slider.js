const slideShow = function(sliderSelector){
    const sliderWrapper = document.querySelector(sliderSelector);
    const slider = sliderWrapper.querySelector('.slider');
    const sliderImagesCount = slider.querySelectorAll('img').length;
    const sliderNav = sliderWrapper.querySelector('.slider-nav');
    const sliderWidth = slider.offsetWidth;
    let slideIndex = +sliderWrapper.getAttribute('data-idx');
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');

    const navBtnString = '<span class="slidebar-nav-item"></span>';
    sliderNav.innerHTML = navBtnString.repeat(sliderImagesCount);
    sliderWrapper.setAttribute('data-idx', '0');

    const navBtns = Array.from(sliderNav.children);
    navBtns[0].classList.add('active');

    prev.addEventListener('click', () => {
        slider.scrollBy({ top: 0, left: -slider.offsetWidth, behavior: 'smooth' });

        if (slideIndex > 0) {
            slideIndex -= 1;
            sliderWrapper.setAttribute('data-idx', slideIndex);
            setActiveBtn();
        }
    });

    next.addEventListener('click', () => {
        slider.scrollBy({ top: 0, left: slider.offsetWidth, behavior: 'smooth' });

        if (slideIndex < sliderImagesCount - 1) {
            slideIndex += 1;
            sliderWrapper.setAttribute('data-idx', slideIndex);
            setActiveBtn();
        }
    });

    sliderNav.addEventListener('click', event => {
        const clickedBtn = event.target;
        if (!navBtns.includes(clickedBtn)){
            return;
        }

        const scrollToValue = slider.offsetWidth*(navBtns.indexOf(clickedBtn));
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





