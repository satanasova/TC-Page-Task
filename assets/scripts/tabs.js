// function tab(elementId, contentSelector) {
//     let tabElement = document.querySelector(`#${elementId}`);
//     let tabList = Array.from(tabElement.parentElement.querySelectorAll('li'));
    

//     tabList.forEach(tab => tab.classList.remove('active'));
//     tabElement.classList.add('active');

//     if (contentSelector) {
//         let tabContent = document.querySelector(contentSelector)
//         tabContent.classList.remove('hidden');
//     }

//     slideShow('#project-slideshow-wrapper');
//     slideShow('#page-slideshow-wrapper');
//     slideShow('#sidebar-slideshow-wrapper');
// }