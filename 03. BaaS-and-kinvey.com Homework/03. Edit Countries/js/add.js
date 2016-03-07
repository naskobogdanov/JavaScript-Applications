load();
$( "#button" ).click(function() {

    var input = $("#input").val();
    var request = {"name" : input};


    if ($.inArray(input, countryList) === -1) {
        $.ajax({
            method: 'POST',
            headers: {
                'Authorization' : 'Basic bmFza286MTIzNA==',
                'X-Kinvey-API-Version' : '3'
            },
            data: JSON.stringify(request),
            dataType: "json",
            contentType: 'application/json',

            url: 'https://baas.kinvey.com/appdata/kid_WyWmkxXfkZ/Country',
            error: ajaxError,
            success: reload
        });
    } else {
        $("#errors").empty();
        $("#errors").append("The country already exists");
    }

    function ajaxError() {
        console.log('Cannot load AJAX data');
    }


});