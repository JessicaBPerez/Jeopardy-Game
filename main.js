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


    var classArray = [".bb500", ".bb400", ".bb300", ".bb200", ".bb100", ".sw500", ".sw400", ".sw300",
        "sw200", ".sw100", ".sci500", ".sci400", ".sci300", ".sci200", ".sci100",
        ".wo500", ".wo400", ".wo300", ".wo200", ".wo100", ".wl500", ".wl400", ".wl300",
        ".wl200", ".wl100", ".code500", ".code400", ".code300", ".code200", ".code100"
    ]
    console.log(classArray);
    var scorePlayer1 = 0;
    var scorePlayer2 = 0;
    var playerOneTurn = true;

    $("#wholeGame").on("click", function() {
        $(".bb500").on("click", function() {
            $(".bb500").hide();
            $(".bb500backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".bb500").text();

            //Might need to move value.bb500 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".bb500backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
                if (playerOneTurn == true) {
                    if ($(this).hasClass("A")) {
                        scorePlayer1 += parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    } else {
                        scorePlayer1 -= parseInt(value);
                        $("#player1box .scorePlayer1").text(`${scorePlayer1}`);
                    }
                } else if (playerOneTurn == false) {
                    if ($(this).hasClass("A")) {
                        scorePlayer2 += parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    } else {
                        scorePlayer2 -= parseInt(value);
                        $("#player2box .scorePlayer2").text(`${scorePlayer2}`);
                    }
                }
                playerOneTurn = !playerOneTurn;
            })
        })






        $(".bb400").on("click", function() {
            $(".bb400").hide();
            $(".bb400backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".bb400").text();

            //Might need to move value.bb400 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
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
            })
        })

        $(".bb300").on("click", function() {
            $(".bb300").hide();
            $(".bb300backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".bb300").text();

            //Might need to move value.bb400 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".bb300backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        $(".bb200").on("click", function() {
            $(".bb200").hide();
            $(".bb200backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".bb200").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".bb200backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })




        $(".bb100").on("click", function() {
            $(".bb100").hide();
            $(".bb100backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".bb100").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".bb100backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })


        $(".sw500").on("click", function() {
            $(".sw500").hide();
            $(".sw500backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sw500").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw500backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        $(".sw400").on("click", function() {
            $(".sw400").hide();
            $(".sw400backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sw400").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw400backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        $(".sw300").on("click", function() {
            $(".sw300").hide();
            $(".sw300backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sw300").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw300backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })





        $(".sw200").on("click", function() {
            $(".sw200").hide();
            $(".sw200backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sw200").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw200backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })






        /* Star Wars 100 Question Card */
        $(".sw100").on("click", function() {
            $(".sw100").hide();
            $(".sw100backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sw100").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sw100backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })

        /* Science 500 Question Card */
        $(".sci500").on("click", function() {
            $(".sci500").hide();
            $(".sci500backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sci500").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci500backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })






        /* Science 400 Question Card */
        $(".sci400").on("click", function() {
            $(".sci400").hide();
            $(".sci400backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sci400").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci400backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })




        /* Science 300 Question Card */
        $(".sci300").on("click", function() {
            $(".sci300").hide();
            $(".sci300backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sci300").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci300backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        /* Science 200 Question Card */
        $(".sci200").on("click", function() {
            $(".sci200").hide();
            $(".sci200backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sci200").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci200backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })





        /* Science 100 Question Card */
        $(".sci100").on("click", function() {
            $(".sci100").hide();
            $(".sci100backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".sci100").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".sci100backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })




        /* World Origins 500 Question Card */
        $(".wo500").on("click", function() {
            $(".wo500").hide();
            $(".wo500backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wo500").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wo500backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })





        /* World Origins 400 Question Card */
        $(".wo400").on("click", function() {
            $(".wo400").hide();
            $(".wo400backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wo400").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wo400backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })




        /* World Origins 300 Question Card */
        $(".wo300").on("click", function() {
            $(".wo300").hide();
            $(".wo300backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wo300").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wo300backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        /* World Origins 200 Question Card */
        $(".wo200").on("click", function() {
            $(".wo200").hide();
            $(".wo200backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wo200").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wo200backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })




        /* World Origins 100 Question Card */
        $(".wo100").on("click", function() {
            $(".wo100").hide();
            $(".wo100backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wo100").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wo100backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        /* World Leaders 500 Question Card */
        $(".wl500").on("click", function() {
            $(".wl500").hide();
            $(".wl500backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wl500").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wl500backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })

        /* World Leaders 400 Question Card */
        $(".wl400").on("click", function() {
            $(".wl400").hide();
            $(".wl400backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wl400").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wl400backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        /* World Leaders 300 Question Card */
        $(".wl300").on("click", function() {
            $(".wl300").hide();
            $(".wl300backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wl300").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wl300backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        /* World Leaders 200 Question Card */
        $(".wl200").on("click", function() {
            $(".wl200").hide();
            $(".wl200backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wl200").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wl200backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })


        /* World Leaders 100 Question Card */
        $(".wl100").on("click", function() {
            $(".wl100").hide();
            $(".wl100backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".wl100").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".wl100backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        /* Code 500 Question Card */
        $(".code500").on("click", function() {
            $(".code500").hide();
            $(".code500backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".code500").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".code500backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        /* Code 400 Question Card */
        $(".code400").on("click", function() {
            $(".code400").hide();
            $(".code400backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".code400").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".code400backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })




        /* Code 300 Question Card */
        $(".code300").on("click", function() {
            $(".code300").hide();
            $(".code300backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".code300").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".code300backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })



        /* Code 200 Question Card */
        $(".code200").on("click", function() {
            $(".code200").hide();
            $(".code200backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".code200").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".code200backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                //playerOneTurn = !playerOneTurn;
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
            })
        })




        /* Code 100 Question Card */
        $(".code100").on("click", function() {
            $(".code100").hide();
            $(".code100backcard").removeClass("hidden");
            $("#jeopardyMusic")[0].play();
            let value = $(".code100").text();

            //Might need to move value.bb200 into global scale inside only #wholeGame function.
            $("button").on("click", function() {
                $(".code100backcard").addClass("hidden");
                $("#jeopardyMusic")[0].load();
                // playerOneTurn = !playerOneTurn;
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
            })
        })








    })
})