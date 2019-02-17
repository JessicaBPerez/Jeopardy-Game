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
                playerOneTurn = !playerOneTurn;
                if (playerOneTurn == true) {
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
            })
        })







        $(".bb400").on("click", function() {
            $(".bb400").hide();
            $(".bb400backcard").removeClass("hidden");
            let value = $(".bb400").text();

            //Might need to move value.bb400 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".bb400backcard").addClass("hidden");
                playerOneTurn = !playerOneTurn;
                if (playerOneTurn == true) {
                    if ($(this).hasClass("C")) {
                        scorePlayer1 += parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    } else {
                        scorePlayer1 -= parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    }
                } else {
                    if ($(this).hasClass("C")) {
                        scorePlayer2 += parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    } else {
                        scorePlayer2 -= parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    }
                }
            })
        })


        $(".bb300").on("click", function() {
            $(".bb300").hide();
            $(".bb300backcard").removeClass("hidden");
            let value = $(".bb300").text();

            //Might need to move value.bb400 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".bb300backcard").addClass("hidden");
                playerOneTurn = !playerOneTurn;
                if (playerOneTurn == true) {
                    if ($(this).hasClass("C")) {
                        scorePlayer1 += parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    } else {
                        scorePlayer1 -= parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    }
                } else {
                    if ($(this).hasClass("C")) {
                        scorePlayer2 += parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    } else {
                        scorePlayer2 -= parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    }
                }
            })
        })




        $(".bb200").on("click", function() {
            $(".bb200").hide();
            $(".bb200backcard").removeClass("hidden");
            let value = $(".bb200").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".bb200backcard").addClass("hidden");
                playerOneTurn = !playerOneTurn;
                if (playerOneTurn == true) {
                    if ($(this).hasClass("B")) {
                        scorePlayer1 += parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    } else {
                        scorePlayer1 -= parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    }
                } else {
                    if ($(this).hasClass("B")) {
                        scorePlayer2 += parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    } else {
                        scorePlayer2 -= parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    }
                }
            })
        })





        $(".bb100").on("click", function() {
            $(".bb100").hide();
            $(".bb100backcard").removeClass("hidden");
            let value = $(".bb100").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".bb100backcard").addClass("hidden");
                playerOneTurn = !playerOneTurn;
                if (playerOneTurn == true) {
                    if ($(this).hasClass("B")) {
                        scorePlayer1 += parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    } else {
                        scorePlayer1 -= parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    }
                } else {
                    if ($(this).hasClass("B")) {
                        scorePlayer2 += parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    } else {
                        scorePlayer2 -= parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    }
                }
            })
        })



        $(".sw500").on("click", function() {
            $(".sw500").hide();
            $(".sw500backcard").removeClass("hidden");
            let value = $(".sw500").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw500backcard").addClass("hidden");
                playerOneTurn = !playerOneTurn;
                if (playerOneTurn == true) {
                    if ($(this).hasClass("D")) {
                        scorePlayer1 += parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    } else {
                        scorePlayer1 -= parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    }
                } else {
                    if ($(this).hasClass("D")) {
                        scorePlayer2 += parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    } else {
                        scorePlayer2 -= parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    }
                }
            })
        })




        $(".sw400").on("click", function() {
            $(".sw400").hide();
            $(".sw400backcard").removeClass("hidden");
            let value = $(".sw400").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw400backcard").addClass("hidden");
                playerOneTurn = !playerOneTurn;
                if (playerOneTurn == true) {
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
            })
        })






    })
})