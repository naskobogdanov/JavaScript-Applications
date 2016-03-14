function editBooks() {
    setTimeout(function () {
        var bns = $('.editButton');
        bns.click(function () {
            var editID = $(this).data('id');
            var editTitle = $(this).data('title');
            var editAuthor = $(this).data('author');
            var editISBN = ($(this).data('isbn')).toString();


            $("#edit").empty();
            $("#edit").append('<input type="text" id="editBookTitle" value="'+ editTitle +'">' +
                '<input type="text" id="editBookAuthor" value="' + editAuthor +'">' +
                '<input type="text" id="editBookISBN" value="' + editISBN +'">' +
                '<button class="buttons" id="saveButton">Save</button>');


            var editRequest;
            $( "#saveButton" ).click(function() {

                var newTitle = $("#editBookTitle").val();
                var newAuthor = $("#editBookAuthor").val();
                var newIsbn = $("#editBookISBN").val();

                editRequest = {"title": newTitle, "author": newAuthor, "isbn": newIsbn};

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

                    url: 'https://baas.kinvey.com/appdata/kid_-y5ToZUu1Z/books/' + editID,
                    error: ajaxError,
                    success: load
                });
                $("#edit").empty();

            });


        });
    }, 1500);
}