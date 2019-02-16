$(document).ready(function() {
    //$("body").css("background", "red");
    var scorePlayer1 = 0;
    var scorePlayer2 = 0;
    $(".bb500").on("click", function() {
        $(".bb500").hide();
        $(".bb500backcard").removeClass("hidden");
        $("button").on("click", function() {
            $(".bb500backcard").addClass("hidden");

            let value = $(".A").data("A", 500).val();
            scorePlayer1 += parseInt(value);
            $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
            console.log(scorePlayer1);
            //$(".bb500").data();

        })
    })
})