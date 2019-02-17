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




        $(".sw300").on("click", function() {
            $(".sw300").hide();
            $(".sw300backcard").removeClass("hidden");
            let value = $(".sw300").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw300backcard").addClass("hidden");
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






        $(".sw200").on("click", function() {
            $(".sw200").hide();
            $(".sw200backcard").removeClass("hidden");
            let value = $(".sw200").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw200backcard").addClass("hidden");
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







        /* Star Wars 100 Question Card */
        $(".sw100").on("click", function() {
            $(".sw100").hide();
            $(".sw100backcard").removeClass("hidden");
            let value = $(".sw100").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw100backcard").addClass("hidden");
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


        /* Science 500 Question Card */
        $(".sci500").on("click", function() {
            $(".sci500").hide();
            $(".sci500backcard").removeClass("hidden");
            let value = $(".sci500").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci500backcard").addClass("hidden");
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







        /* Science 400 Question Card */
        $(".sci400").on("click", function() {
            $(".sci400").hide();
            $(".sci400backcard").removeClass("hidden");
            let value = $(".sci400").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci400backcard").addClass("hidden");
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





        /* Science 300 Question Card */
        $(".sci300").on("click", function() {
            $(".sci300").hide();
            $(".sci300backcard").removeClass("hidden");
            let value = $(".sci300").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci300backcard").addClass("hidden");
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




        /* Science 200 Question Card */
        $(".sci200").on("click", function() {
            $(".sci200").hide();
            $(".sci200backcard").removeClass("hidden");
            let value = $(".sci200").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci200backcard").addClass("hidden");
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






        /* Science 100 Question Card */
        $(".sci100").on("click", function() {
            $(".sci100").hide();
            $(".sci100backcard").removeClass("hidden");
            let value = $(".sci100").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci100backcard").addClass("hidden");
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





        /* World Origins 500 Question Card */
        $(".wo500").on("click", function() {
            $(".wo500").hide();
            $(".wo500backcard").removeClass("hidden");
            let value = $(".wo500").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wo500backcard").addClass("hidden");
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








    })
})