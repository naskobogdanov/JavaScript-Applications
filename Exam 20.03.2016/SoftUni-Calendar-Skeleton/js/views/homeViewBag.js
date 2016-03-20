var app = app || {};

app.homeViewBag = (function () {
    function showWelcomePage(selector, menuSelector) {
        $.get('templates/welcome-guest.html', function(templ) {
            $(selector).html(templ);
        });
        $.get('templates/menu-login.html', function(templ) {
            $(menuSelector).html(templ);
        })
    }

    function showHomePage(selector, menuSelector, data) {
        $.get('templates/welcome-user.html', function(templ) {
            var renderedData = Mustache.render(templ, data);
            $(selector).html(renderedData);
        });
        $.get('templates/menu-home.html', function(templ) {
            $(menuSelector).html(templ);
        })
    }

    return {
        load: function () {
            return {
                showWelcomePage: showWelcomePage,
                showHomePage: showHomePage
            }
        }
    }
}());