$(document).ready(function() {
    var scorePlayer1 = 0;
    var scorePlayer2 = 0;
    $(".bb500").on("click", function() {
        $(".bb500").hide();
        $(".bb500backcard").removeClass("hidden");
        let value = $(".bb500").text();

        $("button").on("click", function() {
            $(".bb500backcard").addClass("hidden");

            if ($(this).hasClass("A")) {
                scorePlayer1 += parseInt(value);
                $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
            } else {
                scorePlayer1 -= parseInt(value);
                $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
            }
        })
    })
})


/*//$(".bb500").data();
let value = $(".bb500").data(".bb500", 500).value;
scorePlayer1 += parseInt(value);
$("#player1box .scorePlayer1").text(`${scorePlayer1}`);
console.log(scorePlayer1);
//$(".bb500").data();*/