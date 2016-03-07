$( "#changeButton" ).click(function() {

    var editInput = $("#editSelect").val();
    var newInput = $("#changeInput").val();
    var editRequest = {"name" : newInput};
    console.log(editInput);

    var id;

    for (var nameId in countryId) {
        if (countryId[nameId].name === editInput) {
            id = countryId[nameId].id;
        }
    }

    function ajaxError() {
        console.log('Cannot load AJAX data');
    }

    $.ajax({
        method: 'PUT',
        headers: {
            'Authorization' : 'Basic bmFza286MTIzNA==',
            'X-Kinvey-API-Version' : '3'
        },
        data: JSON.stringify(editRequest),
        dataType: "json",
        contentType: 'application/json',

        url: 'https://baas.kinvey.com/appdata/kid_WyWmkxXfkZ/Country/' + id,
        error: ajaxError,
        success: reload
    });
});