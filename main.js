$(document).ready(function() {

    /*  Players Input Their Names Before The Game Starts  */
    var playerOneName = prompt("Enter Player One's Name");
    if (playerOneName != null) {
        document.getElementById("player1Name").innerHTML =
            playerOneName
    }


    var playerTwoName = prompt("Enter Player Two's Name");
    if (playerTwoName != null) {
        document.getElementById("player2Name").innerHTML =
            playerTwoName
    }

    //Audio For Jeopardy
    var jeopardyMusic = document.getElementById("jeopardyMusic")

    // Scores for Player One and Player Two
    var scorePlayer1 = 0;
    var scorePlayer2 = 0;
    var playerOneTurn = true;

    //Click Events for Each Card
    $(".bb500").on("click", function() {
        $(".bb500").hide();
        $(".bb500backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".bb500").text();
        $(".bb500backcard button").on("click", function() {
            $(".bb500backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
            if (playerOneTurn === true) {
                if ($(this).hasClass("A")) {
                    scorePlayer1 += parseInt(value);
                    $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                } else {
                    scorePlayer1 -= parseInt(value);
                    $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                }
            } else if (playerOneTurn === false) {
                if ($(this).hasClass("A")) {
                    scorePlayer2 += parseInt(value);
                    $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                } else {
                    scorePlayer2 -= parseInt(value);
                    $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                }
            }
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })


    $(".bb400").on("click", function() {
        $(".bb400").hide();
        $(".bb400backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".bb400").text();
        $(".bb400backcard button").on("click", function() {
            $(".bb400backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
            if (playerOneTurn === true) {
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    $(".bb300").on("click", function() {
        $(".bb300").hide();
        $(".bb300backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".bb300").text();
        $(".bb300backcard button").on("click", function() {
            $(".bb300backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
            if (playerOneTurn === true) {
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })



    $(".bb200").on("click", function() {
        $(".bb200").hide();
        $(".bb200backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".bb200").text();
        $(".bb200backcard button").on("click", function() {
            $(".bb200backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })




    $(".bb100").on("click", function() {
        $(".bb100").hide();
        $(".bb100backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".bb100").text();
        $(".bb100backcard button").on("click", function() {
            $(".bb100backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })


    $(".sw500").on("click", function() {
        $(".sw500").hide();
        $(".sw500backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sw500").text();
        $(".sw500backcard button").on("click", function() {
            $(".sw500backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })


    $(".sw400").on("click", function() {
        $(".sw400").hide();
        $(".sw400backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sw400").text();
        $(".sw400backcard button").on("click", function() {
            $(".sw400backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })



    $(".sw300").on("click", function() {
        $(".sw300").hide();
        $(".sw300backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sw300").text();
        $(".sw300backcard button").on("click", function() {
            $(".sw300backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    $(".sw200").on("click", function() {
        $(".sw200").hide();
        $(".sw200backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sw200").text();
        $(".sw200backcard button").on("click", function() {
            $(".sw200backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Star Wars 100 Question Card */
    $(".sw100").on("click", function() {
        $(".sw100").hide();
        $(".sw100backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sw100").text();
        $(".sw100backcard button").on("click", function() {
            $(".sw100backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Science 500 Question Card */
    $(".sci500").on("click", function() {
        $(".sci500").hide();
        $(".sci500backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sci500").text();
        $(".sci500backcard button").on("click", function() {
            $(".sci500backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Science 400 Question Card */
    $(".sci400").on("click", function() {
        $(".sci400").hide();
        $(".sci400backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sci400").text();
        $(".sci400backcard button").on("click", function() {
            $(".sci400backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Science 300 Question Card */
    $(".sci300").on("click", function() {
        $(".sci300").hide();
        $(".sci300backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sci300").text();
        $(".sci300backcard button").on("click", function() {
            $(".sci300backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Science 200 Question Card */
    $(".sci200").on("click", function() {
        $(".sci200").hide();
        $(".sci200backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sci200").text();
        $(".sci200backcard button").on("click", function() {
            $(".sci200backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Science 100 Question Card */
    $(".sci100").on("click", function() {
        $(".sci100").hide();
        $(".sci100backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".sci100").text();
        $(".sci100backcard button").on("click", function() {
            $(".sci100backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Origins 500 Question Card */
    $(".wo500").on("click", function() {
        $(".wo500").hide();
        $(".wo500backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wo500").text();
        $(".wo500backcard button").on("click", function() {
            $(".wo500backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Origins 400 Question Card */
    $(".wo400").on("click", function() {
        $(".wo400").hide();
        $(".wo400backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wo400").text();
        $(".wo400backcard button").on("click", function() {
            $(".wo400backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Origins 300 Question Card */
    $(".wo300").on("click", function() {
        $(".wo300").hide();
        $(".wo300backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wo300").text();
        $(".wo300backcard button").on("click", function() {
            $(".wo300backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Origins 200 Question Card */
    $(".wo200").on("click", function() {
        $(".wo200").hide();
        $(".wo200backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wo200").text();
        $(".wo200backcard button").on("click", function() {
            $(".wo200backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Origins 100 Question Card */
    $(".wo100").on("click", function() {
        $(".wo100").hide();
        $(".wo100backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wo100").text();
        $(".wo100backcard button").on("click", function() {
            $(".wo100backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Leaders 500 Question Card */
    $(".wl500").on("click", function() {
        $(".wl500").hide();
        $(".wl500backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wl500").text();
        $(".wl500backcard button").on("click", function() {
            $(".wl500backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Leaders 400 Question Card */
    $(".wl400").on("click", function() {
        $(".wl400").hide();
        $(".wl400backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wl400").text();
        $(".wl400backcard button").on("click", function() {
            $(".wl400backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Leaders 300 Question Card */
    $(".wl300").on("click", function() {
        $(".wl300").hide();
        $(".wl300backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wl300").text();
        $(".wl300backcard button").on("click", function() {
            $(".wl300backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Leaders 200 Question Card */
    $(".wl200").on("click", function() {
        $(".wl200").hide();
        $(".wl200backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wl200").text();
        $(".wl200backcard button").on("click", function() {
            $(".wl200backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* World Leaders 100 Question Card */
    $(".wl100").on("click", function() {
        $(".wl100").hide();
        $(".wl100backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".wl100").text();
        $(".wl100backcard button").on("click", function() {
            $(".wl100backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Code 500 Question Card */
    $(".code500").on("click", function() {
        $(".code500").hide();
        $(".code500backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".code500").text();
        $(".code500backcard button").on("click", function() {
            $(".code500backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Code 400 Question Card */
    $(".code400").on("click", function() {
        $(".code400").hide();
        $(".code400backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".code400").text();
        $(".code400backcard button").on("click", function() {
            $(".code400backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Code 300 Question Card */
    $(".code300").on("click", function() {
        $(".code300").hide();
        $(".code300backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".code300").text();
        $(".code300backcard button").on("click", function() {
            $(".code300backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Code 200 Question Card */
    $(".code200").on("click", function() {
        $(".code200").hide();
        $(".code200backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".code200").text();
        $(".code200backcard button").on("click", function() {
            $(".code200backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })

    /* Code 100 Question Card */
    $(".code100").on("click", function() {
        $(".code100").hide();
        $(".code100backcard").removeClass("hidden");
        $("#jeopardyMusic")[0].play();
        let value = $(".code100").text();
        $(".code100backcard button").on("click", function() {
            $(".code100backcard").addClass("hidden");
            $("#jeopardyMusic")[0].load();
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
            playerOneTurn = !playerOneTurn;
            checkWinner()
        })
    })


    //Cutoff Score for Winner = 1000

    // Determines the Winner
    checkWinner = () => {
        if (scorePlayer1 >= 1000) {
            $('.win').removeClass('hidden');
            $(".win p").text(`${playerOneName}! you are the Jeopardy Champion!`)
            $("#applauseMusic")[0].play();
        } else if (scorePlayer2 >= 1000) {
            $('.win').removeClass('hidden');
            $(".win p").text(`${playerTwoName}! you are the Jeopardy Champion!`)
            $("#applauseMusic")[0].play();
        }
    }
})