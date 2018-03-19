const $ = require('jquery');

const button = $('<button/>').html('click me').on('click', function () {
    alert("hey me exported");
});

$('body').append(button);

module.exports = button;

