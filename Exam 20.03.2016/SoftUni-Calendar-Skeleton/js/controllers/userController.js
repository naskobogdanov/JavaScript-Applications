var app = app || {};

app.userController = (function() {
    function UserController(viewBag, model) {
        this.model = model;
        this.viewBag = viewBag;
    }

    UserController.prototype.loadLoginPage = function(selector) {
        this.viewBag.showLoginPage(selector);
    };

    UserController.prototype.login = function(data) {
        return this.model.login(data)
            .then(function(success) {
                noty({
                    theme: 'relax',
                    text: 'You have successfully logged in!',
                    type: 'success',
                    timeout: 2000,
                    closeWith: ['click']
                });
                sessionStorage['sessionId'] = success._kmd.authtoken;
                sessionStorage['username'] = success.username;
                //sessionStorage['fullName'] = success.fullName;
                sessionStorage['userId'] = success._id;

                Sammy(function() {
                    this.trigger('redirectUrl', {url: '#/home/'});
                });

            }, function(error) {
                noty({
                    theme: 'relax',
                    text: 'Invalid username or password!',
                    type: 'error',
                    timeout: 2000,
                    closeWith: ['click']
                });
            }).done();
    };


    UserController.prototype.loadRegisterPage = function(selector) {
        this.viewBag.showRegisterPage(selector);
    };

    UserController.prototype.register = function(data) {
        return this.model.register(data)
            .then(function(success) {
                sessionStorage['sessionId'] = success._kmd.authtoken;
                sessionStorage['username'] = success.username;
                sessionStorage['userId'] = success._id;

                console.log(data);
                
                Sammy(function() {
                    this.trigger('redirectUrl', {url: '#/home/'});
                });

                noty({
                    theme: 'relax',
                    text: 'You have successfully registered!',
                    type: 'success',
                    timeout: 2000,
                    closeWith: ['click']
                });
            }, function(error) {
                noty({
                    theme: 'relax',
                    text: 'Username already exists!',
                    type: 'error',
                    timeout: 2000,
                    closeWith: ['click']
                });
            }).done();
    };

    UserController.prototype.logout = function() {
        this.model.logout()
            .then(function() {
                sessionStorage.clear();


                Sammy(function() {
                    this.trigger('redirectUrl', {url: '#/login/'});
                });

                noty({
                    theme: 'relax',
                    text: 'Successfully logged out!',
                    type: 'success',
                    timeout: 2000,
                    closeWith: ['click']
                });
            })
    };

    return {
        load: function(viewBag, model) {
            return new UserController(viewBag, model);
        }
    }
}());