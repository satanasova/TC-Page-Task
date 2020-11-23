function tab(elementId) {
    const tabWrapper = document.querySelector(elementId);
    if (!tabWrapper) {
        return;
    }

    const tabTitles = tabWrapper.querySelector('.tab-titles');
    const tabContents = tabWrapper.querySelector('.tab-contents');

    const tabs = Array.from(tabTitles.children);
    const contents = Array.from(tabContents.children);
 
    tabs[0].classList.add('active');
    contents[0].classList.add('active');

    tabTitles.addEventListener('click', event => {
        const clickedTab = event.target;

        if(!tabs.includes(clickedTab)){
            return;
        } 
        
        const tabIndex = tabs.indexOf(clickedTab);

        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        tabs[tabIndex].classList.add('active');
        contents[tabIndex].classList.add('active');

    })       
}
