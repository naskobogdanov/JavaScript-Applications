$( "#deleteButton" ).click(function() {

    var deleteInput = $("#select").val();

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

        url: 'https://baas.kinvey.com/appdata/kid_WyWmkxXfkZ/Country?query={"name" : "' + deleteInput + '"}',
        error: ajaxError,
        success: reload
    });
});