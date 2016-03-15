load();
$( "#addButton" ).click(function() {

    var countryInput = $("#countryInput").val();
    var townInput = $("#townInput").val();
    var request = {"name" : townInput, "country" : countryInput};

    if (
        $.inArray(JSON.stringify({"name" : townInput, "country" : countryInput}), townsList) === -1
    ) {
        $.ajax({
            method: 'POST',
            headers: {
                'Authorization' : 'Basic bmFza286MTIzNA==',
                'X-Kinvey-API-Version' : '3'
            },
            data: JSON.stringify(request),
            dataType: "json",
            contentType: 'application/json',

            url: 'https://baas.kinvey.com/appdata/kid_WyWmkxXfkZ/Town',
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