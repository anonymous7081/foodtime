
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function() {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
});



document.addEventListener('click', function(event) {
    if (!mobileLink.contains(event.target) && !mobile.contains(event.target)) {
        mobile.classList.remove("is-active");
        mobileLink.classList.remove("active");
    }
});



const step = 100;
const stepFilter = 60;


$(".back").bind("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});


$(".back-menus").bind("click", function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").bind("click", function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});
