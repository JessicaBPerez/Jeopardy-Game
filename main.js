$(document).ready(function() {
    var scorePlayer1 = 0;
    var scorePlayer2 = 0;
    var playerOneTurn = true;
    $("#wholeGame").on("click", function() {
        $(".bb500").on("click", function() {
            $(".bb500").hide();
            $(".bb500backcard").removeClass("hidden");
            let value = $(".bb500").text();
            //Might need to move value.bb500 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".bb500backcard").addClass("hidden");

                if ($(this).hasClass("A")) {
                    scorePlayer1 += parseInt(value);
                    $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                } else {
                    scorePlayer1 -= parseInt(value);
                    $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                }

                console.log(playerOneTurn)
            })
        })

    })



    //This is the end of the .ready function.
})







$("button").on("click", function() {
            (".bb500backcard").addClass("hidden");
            if (playerOneTurn) {
                if ($(this).hasClass("A")) {
                    scorePlayer1 += parseInt(value);
                    $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                } else {
                    scorePlayer1 -= parseInt(value);
                    $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                }


            } else {
                if ($(this).hasClass("A")) {
                    scorePlayer2 += parseInt(value);
                    $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                } else {
                    scorePlayer2 -= parseInt(value);
                    $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                }
            }