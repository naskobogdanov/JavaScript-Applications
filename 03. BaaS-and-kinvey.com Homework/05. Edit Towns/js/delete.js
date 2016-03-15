$( "#countrySelect" ).click(function() {
    var countryName = $('#countrySelect').val();
    $( "#townList" ).remove();
    $("#list").append('<div id="townList"></div>');

    function townsLoaded(data) {
        var options = data;
        $('#townSelect').empty();
        $.each(options, function(i, p) {
            $('#townSelect').append($('<option></option>').val(p.name).html(p.name));
        });
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

$( "#deleteButton" ).click(function() {
    var deleteTown = $("#townSelect").val();
    var deleteCountry = $("#countrySelect").val();


    function ajaxError() {
        console.log('Cannot load AJAX data');
    }

    $.ajax({
        method: 'DELETE',
        headers: {
            'Authorization' : 'Basic bmFza286MTIzNA==',
            'X-Kinvey-API-Version' : '3'
        },
        data: JSON.stringify({}),
        dataType: "json",
        contentType: 'application/json',

        url: 'https://baas.kinvey.com/appdata/kid_WyWmkxXfkZ/Town?query={"name" : "' + deleteTown + '", "country" : "' + deleteCountry + '"}',
        error: ajaxError,
        success: reload
    });
});