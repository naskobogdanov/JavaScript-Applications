//Loads countries into a dripdown
function countriesLoaded(data) {

    var options = data;
    $('#select').empty();
    $.each(options, function(i, p) {
        $('#select').append($('<option></option>').val(p.country).html(p.country));
    });

    //Removes duplicate select options
    $(document).ready( function(){
        var a = new Array();
        $("#select").children("option").each(function(x){
            test = false;
            b = a[x] = $(this).val();
            for (i=0;i<a.length-1;i++){
                if (b ==a[i]) test =true;
            }
            if (test) $(this).remove();
        })
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

    url: 'https://baas.kinvey.com/appdata/kid_WyWmkxXfkZ/Town',
    error: ajaxError,
    success: countriesLoaded
});

