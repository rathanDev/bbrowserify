const $ = require('jquery');

const button = $('<button/>').html('click me').on('click', function () {
    alert("hey");
});

$('body').append(button);