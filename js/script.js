$(document).ready(function () {
    if ($(".users__grid").length) {
        $(".users__grid").webTicker({
            startEmpty: false,
            hoverpause: false,
            speed: 80,
            duplicate: true
        });
    }

    $(".elem__faq").on("click", function () {
        $(this).toggleClass("active");
        $(this).find(".content").slideToggle(400);
        if ($(this).hasClass("active")) {
            $(this).find(".head>span").text("-");
        } else {
            $(this).find(".head>span").text("+");
        }
    });

    $(".scrollable__link").on("click", function (event) {
        event.preventDefault();
        let target = $(this).attr("data-scroll");
        $("html").animate({ scrollTop: $(target).offset().top }, 500);
    });

    $(".copy-button").on("click", function (event) {
        event.preventDefault();
        const contractAddress = $("#contract-address").text();

        const dummyTextArea = $("<textarea>");
        $("body").append(dummyTextArea);
        dummyTextArea.val(contractAddress).select();
        document.execCommand("copy");
        dummyTextArea.remove();

        alert("Contract address copied to clipboard!");
    });
});
