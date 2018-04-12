// JQUERY ONLY CARES ABOUT THE DOM AT THE PRESENT MOMENT

//JQuery is a callback function! This means this function DOES NOT RUN UNTIL THE DOCUMENT IS READY
// .ready() is a method 
$(document).ready(onReady);

console.log('JQuery Intro Lecture');

function onReady() {
    console.log('JQuery is ready');
    $('h1').addClass('funny');
    $('h1').css('color', 'red');
 
    // getters and setters
    console.log($('h2').text()); // get text value of h2
    $('h2').text('You have been set!!!');

    // inputs (also, getter and setter)
    $('#nameInput').val('Sam'); // setter for input val
    console.log($('#nameInput').val()); // val is only for inputs, not text

    // events
    // event handler
    $('#clickableButton').on('click', function() { // this is an ANONYMOUS CALLBACK function because it has no name
        // console.log($('#nameInput').val());
        console.log($('#nameInput').val());
    });

    $('#secondButton').on('click', function() {
        console.log('I was clicked!!');
    });
}
