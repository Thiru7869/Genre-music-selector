function playSong(url) {
    window.open(url, '_blank');
}

function navigateTo(page) {
    window.location.href = page;
}

function toggleTheme() {
    const currentTheme = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentTheme === 'black' ? 'white' : 'black';
    document.body.style.color = currentTheme === 'black' ? 'black' : 'white';
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
