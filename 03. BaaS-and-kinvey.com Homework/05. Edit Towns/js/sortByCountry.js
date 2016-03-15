//List towns by country
$( "#button" ).click(function() {
    var countryName = $('#select').val();
    $( "#townList" ).remove();
    $("#list").append('<div id="townList"></div>');

    function townsLoaded(data) {
        $( "#townList" ).append('<ul>');
        for (var c in data) {
            var town = data[c];
            $( "#townList" ).append('<li>' + town.name + '</li>');
        }
        $( "#townList" ).append('</ul>');
    }

    function ajaxError() {
        console.log('Cannot load AJAX data');
    }

    $.ajax({
        method: 'GET',
        headers: {
            'Authorization' : 'Basic bmFza286MTIzNA==',
            'X-Kinvey-API-Version' : '3'
        },
        contentType: 'application/json',

        url: 'https://baas.kinvey.com/appdata/kid_WyWmkxXfkZ/Town?query={"country" : "' + countryName + '"}',
        error: ajaxError,
        success: townsLoaded

    });
});

function reload() {
    location.reload();
}