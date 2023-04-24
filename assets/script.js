// Get the current date and time as a dayjs object
var currentTime = dayjs();

// Format the date and time as text
var formattedTime = currentTime.format('MMM D, YYYY');
var formattedhour = currentTime.format('h');
var formattedAP = currentTime.format('A');
var hours = currentTime.hour();
var h3 = $('#timer')

h3.text(formattedTime)


var hournumber = Number(formattedhour);
let finalformnumber = `${hournumber}${formattedAP}`


//  When Button Clicked save text input value and set the background color as var '--saved-color'
$('#onesave').click(function () {

    var onesave = $('#one').val();
    localStorage.setItem('onesave', onesave);




});

$('#twosave').click(function () {


    var twosave = $('#two').val();
    localStorage.setItem('twosave', twosave);


});
$('#threesave').click(function () {



    var threesave = $('#three').val();
    localStorage.setItem('threesave', threesave);


});
$('#foursave').click(function () {



    var foursave = $('#four').val();
    localStorage.setItem('foursave', foursave);


});
$('#fivesave').click(function () {


    var fivesave = $('#five').val();
    localStorage.setItem('fivesave', fivesave);



});
$('#sixsave').click(function () {


    var sixsave = $('#six').val();
    localStorage.setItem('sixsave', sixsave);




});
$('#sevensave').click(function () {


    var sevensave = $('#seven').val();
    localStorage.setItem('sevensave', sevensave);




});
$('#eightsave').click(function () {


    var eightsave = $('#eight').val();
    localStorage.setItem('eightsave', eightsave);


});
$('#ninesave').click(function () {


    var ninesave = $('#nine').val();
    localStorage.setItem('ninesave', ninesave);

});

// when refresh write the saved data in text inputs!!!!
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


    var ninesaved = localStorage.getItem('ninesave');
    if (ninesaved) {
        $("#nine").val(localStorage.getItem('ninesave'))
    }


});

//  set the background color as variables ("'currentime-color', 'pastime-color', 'aheadtime-color' ") when the time condictions are met!
function statustheme() {

    if (hournumber === 9 && formattedAP == 'AM') {
        $('#one').css('background-color', 'var(--currentime-color)')
    }
    if (hournumber > 9 || hournumber < 9 && formattedAP === 'PM' || hournumber === 9 && formattedAP === 'PM' || hournumber < 12 && formattedAP == 'PM') {
        $('#one').css('background-color', ' var(--pastime-color)')
    }
    if (hournumber < 9 && formattedAP == 'AM' || hournumber === 12 && formattedAP == 'AM' || hournumber < 1 && hournumber > 6 && formattedAP == 'AM') {
        $('#one').css('background-color', ' var(--aheadtime-color)')
    }





    if (hournumber === 10 && formattedAP == 'AM') {
        $('#two').css('background-color', 'var(--currentime-color)')
    }
    if (hournumber > 10 || hournumber < 10 && formattedAP === 'PM' || hournumber === 10 && formattedAP === 'PM' || hournumber < 12 && formattedAP == 'PM') {
        $('#two').css('background-color', ' var(--pastime-color)')
    }

    if (hournumber < 10 && formattedAP == 'AM' || hournumber === 12 && formattedAP == 'AM' || hournumber < 1 && hournumber > 6 && formattedAP == 'AM') {
        $('#two').css('background-color', ' var(--aheadtime-color)')
    }




    if (hournumber === 11 && formattedAP == 'AM') {
        $('#three').css('background-color', 'var(--currentime-color)')
    }

    if (hournumber > 11 || hournumber < 11 && formattedAP === 'PM' || hournumber === 11 && formattedAP === 'PM' || hournumber < 12 && formattedAP == 'PM') {
        $('#three').css('background-color', ' var(--pastime-color)')
    }
    if (hournumber < 11 && formattedAP === 'AM' || hournumber === 12 && hournumber < 12 && formattedAP == 'AM' || hournumber === 12 && formattedAP == 'AM') {
        $('#three').css('background-color', ' var(--aheadtime-color)')
    }



    if (hournumber === 12 && formattedAP == 'PM') {
        $('#four').css('background-color', 'var(--currentime-color)')
    }
    if (hournumber < 12 || hournumber === 12 && formattedAP === 'AM' || hournumber === 12 && formattedAP == 'AM') {
        $('#four').css('background-color', ' var(--aheadtime-color)')
    }
    if (hournumber < 12 && formattedAP === 'PM') {
        $('#four').css('background-color', ' var(--pastime-color)')
    }



    if (hournumber === 1 && formattedAP == 'PM') {
        $('#five').css('background-color', 'var(--currentime-color)')
    }
    if (hournumber > 1 || hournumber < 1 && formattedAP === 'PM') {
        $('#five').css('background-color', ' var(--pastime-color)')
    }
    if (hournumber < 1 || hournumber === 1 && formattedAP === 'AM' || hournumber < 12 && formattedAP == 'AM' || hournumber === 12 && formattedAP == 'PM' || hournumber === 12 && formattedAP == 'AM') {
        $('#five').css('background-color', ' var(--aheadtime-color)')
    }




    if (hournumber === 2 && formattedAP == 'PM') {
        $('#six').css('background-color', 'var(--currentime-color)')
    }

    if (hournumber > 2 || hournumber < 2 && formattedAP === 'PM') {
        $('#six').css('background-color', ' var(--pastime-color)')
    }
    if (hournumber < 2 || hournumber === 2 && formattedAP === 'AM' || hournumber < 12 && formattedAP == 'AM' || hournumber === 12 && formattedAP == 'PM' || hournumber === 12 && formattedAP == 'AM') {
        $('#six').css('background-color', ' var(--aheadtime-color)')
    }



    if (hournumber === 3 && formattedAP === 'PM') {
        $('#seven').css('background-color', 'var(--currentime-color)')
    }

    if (hournumber > 3 || hournumber < 3 && formattedAP === 'PM') {
        $('#seven').css('background-color', ' var(--pastime-color)')
    }
    if (hournumber < 3 || hournumber === 3 && formattedAP === 'AM' || hournumber < 12 && formattedAP == 'AM' || hournumber === 12 && formattedAP == 'PM' || hournumber === 12 && formattedAP == 'AM') {
        $('#seven').css('background-color', ' var(--aheadtime-color)')
    }


    if (hournumber === 4 && formattedAP == 'PM') {
        $('#eight').css('background-color', 'var(--currentime-color)')
    }

    if (hournumber > 4 || hournumber < 4 && formattedAP === 'PM') {
        $('#eight').css('background-color', ' var(--pastime-color)')
    }
    if (hournumber < 4 || hournumber < 4 && formattedAP || hournumber < 12 && formattedAP == 'AM' || hournumber === 12 && formattedAP == 'PM' || hournumber === 12 && formattedAP == 'AM') {
        $('#eight').css('background-color', ' var(--aheadtime-color)')
    }



    if (hournumber === 5 && formattedAP == 'PM') {
        $('#nine').css('background-color', 'var(--currentime-color)')
    }

    if (hournumber > 5 || hournumber < 5 && formattedAP === 'PM') {
        $('#nine').css('background-color', ' var(--pastime-color)')
    }
    if (hournumber < 5 || hournumber < 5 && formattedAP || hournumber < 12 && formattedAP == 'AM' || hournumber === 12 && formattedAP == 'PM' || hournumber === 12 && formattedAP == 'AM') {
        $('#nine').css('background-color', ' var(--aheadtime-color)')
    }


}


statustheme()