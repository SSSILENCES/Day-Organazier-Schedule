// Timer
$('#timer').text(dayjs().format('MMM D, YYYY'));

//  When Button Clicked save the input value and set the background color as var '--saved-color'
$('#onesave').click(function () {

    var onesave = $('#one').val();
    localStorage.setItem('onesave', onesave);
   
    
    $("#one").css("background-color", "var(--saved-color)");

});
$('#twosave').click(function () {


    var twosave = $('#two').val();
    localStorage.setItem('twosave', twosave);

   
    $("#two").css("background-color", "var(--saved-color)");

});
$('#threesave').click(function () {



    var threesave = $('#three').val();
    localStorage.setItem('threesave', threesave);


   
    $("#three").css("background-color", "var(--saved-color)");
});
$('#foursave').click(function () {



    var foursave = $('#four').val();
    localStorage.setItem('foursave', foursave);



   
    $("#four").css("background-color", "var(--saved-color)");
});
$('#fivesave').click(function () {


    var fivesave = $('#five').val();
    localStorage.setItem('fivesave', fivesave);


   
    $("#five").css("background-color", "var(--saved-color)");
});
$('#sixsave').click(function () {


    var sixsave = $('#six').val();
    localStorage.setItem('sixsave', sixsave);


   
    $("#six").css("background-color", "var(--saved-color)");
});
$('#sevensave').click(function () {


    var sevensave = $('#seven').val();
    localStorage.setItem('sevensave', sevensave);


   
    $("#seven").css("background-color", "var(--saved-color)");
});
$('#eightsave').click(function () {


    var eightsave = $('#eight').val();
    localStorage.setItem('eightsave', eightsave);

   
    $("#eight").css("background-color", "var(--saved-color)");
});

// when refresh write the saved data in inputs!!!!
$(window).ready(function () {
    var onesaved = localStorage.getItem('onesave');

    if (onesaved) {
        $("#one").val(localStorage.getItem('onesave'))
    }

    var twosaved = localStorage.getItem('twosave');
    if (twosaved) {
        $("#two").val(localStorage.getItem('twosave'))
    }

    var threesaved = localStorage.getItem('threesave');
    if (threesaved) {
        $("#three").val(localStorage.getItem('threesave'))
    }

    var foursaved = localStorage.getItem('foursave');
    if (foursaved) {
        $("#four").val(localStorage.getItem('foursave'))
    }

    var fivesaved = localStorage.getItem('fivesave');
    if (fivesaved) {
        $("#five").val(localStorage.getItem('fivesave'))
    }

    var sixsaved = localStorage.getItem('sixsave');
    if (sixsaved) {
        $("#six").val(localStorage.getItem('sixsave'))
    }

    var sevensaved = localStorage.getItem('sevensave');
    if (sevensaved) {
        $("#seven").val(localStorage.getItem('sevensave'))
    }

    var eightsaved = localStorage.getItem('eightsave');
    if (eightsaved) {
        $("#eight").val(localStorage.getItem('eightsave'))
    }





});


