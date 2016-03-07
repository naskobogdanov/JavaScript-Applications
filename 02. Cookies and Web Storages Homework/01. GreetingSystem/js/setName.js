(function () {
    //Get the name from the input field and reload the page
    var name = document.getElementById('name-input');
    var button = document.getElementById('put-btn');
    button.addEventListener('click', function (e) {
        var name = document.getElementById('name-input').value;
        localStorage.setItem('name', name);
        location.reload();
    });

    //Display the greeting and hide the unneeded fields.
    if (localStorage.getItem('name')) {
        document.getElementById('output').innerHTML = 'Hello ' + localStorage.getItem('name');
        document.getElementById('name-input').style.display='none';
        document.getElementById('paragraph').style.display='none';
        document.getElementById('put-btn').style.display='none';
        document.getElementById('change-btn').style.display='block';

    //Added option to change the name
        var changeButton = document.getElementById('change-btn');
        changeButton.addEventListener('click', function (e) {
            localStorage.removeItem('name');
            location.reload();
        });
    }
}())