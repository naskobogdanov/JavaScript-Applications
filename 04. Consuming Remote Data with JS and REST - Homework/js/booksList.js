var booksList = [];

function load() {
    booksList = [];
    function booksLoaded(data) {
        $("#booksList").html("");
        $("#booksList").append('<table>');
        $("#booksList").append('<tbody>');
        $("#booksList").append('<tr><th></th><th>Title</th><th>Author</th><th>ISBN</th><th></th></tr>');


        for (var c in data) {
            var book = data[c];
            var buttonValue = book.isbn;
            var bookId = book._id;
            $("#booksList").append('<tr>');
            $("#booksList").append('</td><td class="buttonTd"><button class="editButton" ' +
                                    'data-id="' + bookId + '" ' +
                                    'data-title="' + book.title +'" ' +
                                    'data-author="'+ book.author +'" ' +
                                    'data-isbn="'+ book.isbn +'">Edit</button></td>' +
                                    '<td>' + book.title + '</td><td>' + book.author + '</td><td>' + book.isbn +
                                    '</td><td class="buttonTd"><button class="delButton" data-isdn="' + buttonValue + '">Delete</button></td>');
            $("#booksList").append('</tr>');
            booksList.push(book.isbn)
        }
        $("#booksList").append('</tbody>');
        $("#booksList").append('</table>');
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

        url: 'https://baas.kinvey.com/appdata/kid_-y5ToZUu1Z/books',
        error: ajaxError,
        success: booksLoaded
    });

    function reload() {
        location.reload();
    }
    deleteBooks();
    editBooks();
}