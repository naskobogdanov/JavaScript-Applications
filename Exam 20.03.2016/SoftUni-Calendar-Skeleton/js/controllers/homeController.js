var app = app || {};

app.homeController = (function() {
    function HomeController(viewBag, model) {
        this.model = model;
        this.viewBag = viewBag;
    }

    HomeController.prototype.loadWelcomePage = function(selector, menuSelector) {
        this.viewBag.showWelcomePage(selector, menuSelector);
    };

    HomeController.prototype.loadHomePage = function(selector, menuSelector) {
        var data = {
            username: sessionStorage['username']
        };

        this.viewBag.showHomePage(selector, menuSelector, data);
    };

    return {
        load: function(viewBag, model) {
            return new HomeController(viewBag, model);
        }
    }
}());