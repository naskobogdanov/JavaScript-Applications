$( "#addButton" ).click(function() {

    var bookTitle = $("#bookTitle").val();
    var bookAuthor = $("#bookAuthor").val();
    var bookISBN = $("#bookISBN").val();
    var request = {"title" : bookTitle, "author" : bookAuthor, "isbn" : bookISBN};


    if (bookAuthor === '' || bookISBN === '' || bookTitle === '') {
        $("#errors").empty();
        $("#errors").append("You have empty fields");
    } else if ($.inArray(bookISBN, booksList) === -1) {
        $.ajax({
            method: 'POST',
            headers: {
                'Authorization' : 'Basic bmFza286MTIzNA==',
                'X-Kinvey-API-Version' : '3'
            },
            data: JSON.stringify(request),
            dataType: "json",
            contentType: 'application/json',

            url: 'https://baas.kinvey.com/appdata/kid_-y5ToZUu1Z/books',
            error: ajaxError,
            success: load
        });
        $("input").val('');
        $("#errors").empty();
    } else {
        $("#errors").empty();
        $("#errors").append("The book already exists");
    }

    function ajaxError() {
        console.log('Cannot load AJAX data');
    }


});