var app = app || {};

app.lecturesController = (function () {
    function LecturesController(viewBag, model) {
        this.model = model;
        this.viewBag = viewBag;
    }

    LecturesController.prototype.loadAllLectures = function (selector) {
        var _this = this;
        this.model.getAllLectures()
            .then(function (data) {
                var result = {
                    lectures: []
                };

                data.forEach(function (lecture) {
                    result.lectures.push({
                        _id: lecture._id,
                        title: lecture.title,
                        start: lecture.start,
                        end: lecture.end,
                        lecturer: lecture.lecturer
                    })
                });
                _this.viewBag.showAllLectures(selector, result);
            })
    };

    LecturesController.prototype.loadMyLectures = function (selector) {
        var _this = this;
        var userId = sessionStorage['userId'];
        this.model.getLecturesByCreatorId(userId)
            .then(function (data) {
                var result = {
                    lectures: []
                };

                data.forEach(function (lecture) {
                    result.lectures.push({
                        _id: lecture._id,
                        title: lecture.title,
                        start: lecture.start,
                        end: lecture.end,
                        lecturer: lecture.lecturer
                    })
                });

                _this.viewBag.showMyLectures(selector, result);
            })
    };

    LecturesController.prototype.loadAddLecture = function (selector) {
        this.viewBag.showAddLecture(selector);
    };

    LecturesController.prototype.addLecture = function (data) {
        var result = {
            title: data.title,
            start: data.start,
            end: data.end,
            lecturer: sessionStorage['username']
        };

        this.model.addLecture(result)
            .then(function (success) {
                noty({
                    theme: 'relax',
                    text: 'Lecture added successfully!',
                    type: 'success',
                    timeout: 2000,
                    closeWith: ['click']
                });

                Sammy(function() {
                    this.trigger('redirectUrl', {url: '#/calendar/my/'});
                });
            }, function(error) {
            noty({
                theme: 'relax',
                text: 'Lecture is NOT added,try again!',
                type: 'error',
                timeout: 2000,
                closeWith: ['click']
            });
        }).done();
    };

    LecturesController.prototype.loadEditLecture = function (selector, data) {
        this.viewBag.showEditLecture(selector, data);
    };

    LecturesController.prototype.editLecture = function (data) {
        data.author = sessionStorage['username'];
        this.model.editLecture(data._id, data)
            .then(function (success) {
                console.log(success);
            })
    };

    LecturesController.prototype.loadDeleteLecture = function (selector, data) {
        this.viewBag.showDeleteLecture(selector, data);
    };

    LecturesController.prototype.deleteLecture = function (noteId) {
        this.model.deleteNote(noteId)
            .then(function (success) {
                window.location.reload();
            });
    };

    return {
        load: function (viewBag, model) {
            return new LecturesController(viewBag, model);
        }
    };
}());