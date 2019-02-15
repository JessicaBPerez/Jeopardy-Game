$(document).ready(function() {
    let score = 0;
    //$("body").css("background", "blue");
    $(".bb500").on("click", function() {
        $(".bb500").hide();
        $('.bb500backcard').removeClass('hidden');
        $(".A").on('click', function() {
            $('.bb500backcard').addClass('hidden');
            let value = $("A").val();
            if ($("A").val() = "A") {
                score += parseInt(value);
            }
        })

        /*if (balance <= 0) {
            $("#checking").addClass("zero");
        } else {
            $("#checking").removeClass("zero");
        }*/



    })


});