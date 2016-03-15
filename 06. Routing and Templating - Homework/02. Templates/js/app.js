var app = app || {};

app.tableDisplay = (function () {
    function TableDisplay(selector, data) {
        $(selector).empty();

        $.get('templates/table.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).append(output);
        });
    }

    return {
        load: function (selector, data) {
            return new TableDisplay(selector, data);
        }
    }
    
}());

app.tableDisplay.load($('#table'), data);