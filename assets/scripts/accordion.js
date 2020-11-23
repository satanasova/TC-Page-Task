function accordion(elementId) {
    const accWrapper = document.querySelector(elementId);

    if (!accWrapper) {
        return;
    }

    const accItems = Array.from(accWrapper.querySelectorAll('.acc-item'));

    accWrapper.addEventListener('click', event => {
        const clickedAcc = event.path.find(el => el.classList.contains('acc-item'))

        if(!accItems.includes(clickedAcc)){
            return;
        }

        accItems.forEach(acc => {
            if (acc !== clickedAcc) {
                acc.classList.remove('active')
            }
        });
        
        clickedAcc.classList.toggle('active');
    });



}