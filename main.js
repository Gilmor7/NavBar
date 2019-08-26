const $ = (s, p = document) => p.querySelector(s);

const navbar = $('.navbar');

navbar.addEventListener('click', event => {
    const clickedTab = event.target.closest('.navbar__tab');
    if (!clickedTab) return;

    //remove the active class from the current active tab 
    const currentActive = $('.active');
    currentActive.classList.remove('active');

    // Add the active class on the clicked tab
    clickedTab.classList.add('active');
    const clickedTabBGColor = getComputedStyle(clickedTab).getPropertyValue('color');
    document.body.style.background = clickedTabBGColor;

})