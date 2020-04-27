$(document).ready(function() {
    // from here
    $(".search-icon").on("click", function() {
        $(".search-field").slideToggle("", function() {
            $(".search-history").toggle();
        });
    });

    $(".search-input input").on("focus", function() {
        $(".search-history").hide();
    });
    $(".search-input input").on("blur", function() {
        $(".search-history").show();
    });

    $(".remove-history").on("click", function() {
        $(".second-history").hide();
        $(".history").text("");
    });
    $(".bars").on("click", function() {
        $(".links").css("right", "0");
    });
    $(".links .close").on("click", function() {
        $(".links").css("right", "-100%");
    });
    $(".main-links .main-nav-link:not(:last-child)").on("click", function() {
        $(".main-links").hide();
        $(".sup-links").show();
    });
    $(".country").on("click", function() {
        $(".choose-country").show();
    });
    $(".choose-country .close-country").on("click", function() {
        $(".choose-country").hide();
    });
});