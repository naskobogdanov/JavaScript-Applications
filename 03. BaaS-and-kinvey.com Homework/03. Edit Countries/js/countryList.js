var countryList = [];
var countryId = [];

function load() {

    function countriesLoaded(data) {
        $("#countriesList").append('<ul id="countries">');
            for (var c in data) {
                var country = data[c];
                $("ul").append('<li>' + country.name + '</li>');
                countryList.push(country.name);
                countryId.push({name : country.name, id : country._id});
            }
        $("#countriesList").append('</ul>');

        var options = data;
        $('#select').empty();
        $('#editSelect').empty();
        $.each(options, function(i, p) {
            $('#select').append($('<option></option>').val(p.name).html(p.name));
            $('#editSelect').append($('<option></option>').val(p.name).html(p.name));
        });
    }

    function ajaxError() {
        console.log('Cannot load AJAX data');
    }

    $.ajax({
        method: 'GET',
        headers: {
            'Authorization': 'Basic bmFza286MTIzNA==',
            'X-Kinvey-API-Version': '3'
        },
        contentType: 'application/json',

        url: 'https://baas.kinvey.com/appdata/kid_WyWmkxXfkZ/Country',
        error: ajaxError,
        success: countriesLoaded
    });


}

function reload() {
    location.reload();
}