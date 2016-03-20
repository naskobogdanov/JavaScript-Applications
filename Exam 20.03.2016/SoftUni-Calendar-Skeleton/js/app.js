var app = app || {};


(function () {
    var router = Sammy(function () {
        var selector = '#container';
        var menuSelector = '#menu';
        var requester = app.requester.load('kid_bkngeaspyZ', 'fe82b9a4da9e4135a79a06b7caceee84', 'https://baas.kinvey.com/');

        var userViewBag = app.userViewBag.load();
        var homeViewBag = app.homeViewBag.load();
        var lecturesViewBag = app.lecturesViewBag.load();

        var userModel = app.userModel.load(requester);
        var lecturesModel = app.lecturesModel.load(requester);

        var userController = app.userController.load(userViewBag, userModel);
        var homeController = app.homeController.load(homeViewBag);
        var lecturesController = app.lecturesController.load(lecturesViewBag, lecturesModel);

        this.before({except:{path:'#\/(login\/|register\/)?'}}, function() {
            if(!sessionStorage['sessionId']) {
                this.redirect('#/');

                noty({
                    theme: 'relax',
                    text: 'You need to be logged in to access this page',
                    type: 'error',
                    timeout: 2000,
                    closeWith: ['click']
                });

                return false;
            }
        });

        this.before(function() {
            if(!sessionStorage['sessionId']) {
            } else {
                $('#welcomeMenu').text('Welcome, ' + sessionStorage['fullName']);
            }
        });

        this.get('#/', function() {
            homeController.loadWelcomePage(selector, menuSelector);
        });

        this.get('#/home/', function() {
            homeController.loadHomePage(selector, menuSelector);
        });

        this.get('#/login/', function() {
            userController.loadLoginPage(selector);
            homeController.loadWelcomePage(null, menuSelector);
        });

        this.get('#/register/', function() {
            userController.loadRegisterPage(selector);
            homeController.loadWelcomePage(null, menuSelector);
        });

        this.get('#/logout/', function() {
            userController.logout();
        });

        this.get('#/calendar/list/', function() {
            homeController.loadHomePage(null, menuSelector);
            lecturesController.loadAllLectures(selector);
        });

        this.get('#/calendar/my/', function() {
            homeController.loadHomePage(null, menuSelector);
            lecturesController.loadMyLectures(selector);
        });

        this.get('#/addLecture/', function() {
            homeController.loadHomePage(null, menuSelector);
            lecturesController.loadAddLecture(selector);
        });



        this.bind('redirectUrl', function(ev, data) {
            this.redirect(data.url);
        });

        this.bind('login', function(ev, data) {
            userController.login(data);
        });

        this.bind('register', function(ev, data) {
            userController.register(data);
        });

        this.bind('addLecture', function(ev, data) {
            lecturesController.addLecture(data);
        });

        this.bind('showEditLecture', function(ev, data) {
            lecturesController.loadEditLecture(selector, data);
        });

        this.bind('editLecture', function(ev, data) {
            lecturesController.editLecture(data);
        });

        this.bind('showDeleteLecture', function(ev, data) {
            lecturesController.loadDeleteLecture(selector, data);
        });

        this.bind('deleteLecture', function(ev, data) {
            lecturesController.deleteLecture(data._id);
        })
    });

    router.run('#/');
}());

