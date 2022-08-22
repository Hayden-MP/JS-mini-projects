
const showOnPx = 100;
const backToTopButton = document.querySelector('.back-to-top');


// Below adds show/hide button conditionality 
const scrollContainer = () => {
    return document.documentElement || document.body;
}
document.addEventListener('scroll', () => {
    /*  
        scrollContainer().scrollTop is the number of pixels that has been
        scrolled from the top. Uncomment below to view changing values. 
        console.log(scrollContainer().scrollTop);
    */
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
})

// Scrolls to top of page when use clicks Back To Top button
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    }); // smoothly scrolls to view body element (top of page)
};
backToTopButton.addEventListener("click", goToTop);

