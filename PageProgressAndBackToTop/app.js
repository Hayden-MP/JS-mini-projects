
const showOnPx = 100;
const backToTopButton = document.querySelector('.back-to-top');
const pageProgressBar = document.querySelector(".progress-bar")


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

    // Calculates percentage, scrollHeight = complete content of page
    // and clientHeight = innner height of element in pixels (content visible to us)
    const scrolledPercentage = (scrollContainer().scrollTop / 
        (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;

    pageProgressBar.style.width = `${scrolledPercentage}%`;
    
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

