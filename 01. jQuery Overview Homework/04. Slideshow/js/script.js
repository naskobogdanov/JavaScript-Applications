var count = 1;
timeout();

function changeSlider() {
    if (count >= 6) {
        count = 1
    }
    if (count <= 0) {
        count = 5;
    }

    var picUrl = 'url("images/' + count + '.jpg")';
    //$('#slider').css('background', picUrl);

    $('#slider').animate({opacity: 0.5}, 0).css({'background': picUrl}).animate({opacity: 1}, 500);


    switch(count) {
        case 1:
            $('h1').text('JavaScript Applications');
            $('p').text('The "JavaScript Applications" course develops practical skills for front-end ' +
                'application development with JavaScript, jQuery and REST services.');
            break;
        case 2:
            $('h1').text('Advanced C#');
            $('p').text('The "Advanced C#" course extends the knowledge of  the "Programming Basics" course and covers methods, arrays, ' +
                'lists, matrices, strings and regular expressions, functional programming and asynchronous programming. The course is ' +
                'based on the C# language and Visual Studio.');
            break;
        case 3:
            $('h1').text('Java Fundamentals');
            $('p').text('The "Java Fundamentals" course provides entrance level programming skills with the Java language and platform.');
            break;
        case 4:
            $('h1').text('Database Applications');
            $('p').text('The course "Database Applications" introduces the ORM frameworks ' +
                '(Object-Relational Mapping), XML, JSON, non-relational database access (like MongoDB and Redis).');
            break;
        case 5:
            $('h1').text('ASP.NET MVC');
            $('p').text('The ASP.NET MVC course introduces the students to practical development of ASP.NET MVC based Web applications ' +
                'with databases, SQL Server, Enity Framework, ASP.NET MVC, the Model-View-Controller pattern, AJAX and SignalR.');
            break;
    }

    $('a').attr('href', 'http://www.softuni.bg/').attr('target', '_blank').text('Visit SoftUni');

    count++;
}

function timeout() {
    $('#slider').animate(1000);
    changeSlider();
    setTimeout(timeout, 5000);
}

$('#left').click(function() {
    count = count - 2;
    changeSlider();
});

$('#right').click(function() {
    changeSlider();
});



