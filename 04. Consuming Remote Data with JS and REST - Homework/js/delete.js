function deleteBooks() {
    setTimeout(function () {
        var bns = $('.delButton');
        bns.click(function () {
            var delOutput = $(this).data('isdn');

            function ajaxError() {
                console.log('Cannot load AJAX data');
            }

            $.ajax({
                method: 'DELETE',
                headers: {
                    'Authorization': 'Basic bmFza286MTIzNA==',
                    'X-Kinvey-API-Version': '3'
                },
                data: JSON.stringify({}),
                dataType: "json",
                contentType: 'application/json',

                url: 'https://baas.kinvey.com/appdata/kid_-y5ToZUu1Z/books?query={"isbn" :"' + delOutput + '"}',
                error: ajaxError,
                success: load
            });
        });
    }, 1500);
}