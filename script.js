$(document).ready(start);

function start() {
    $(".button").click(clickHandler);
}

function clickHandler() {
    $(".button").slideUp("slow");
}

