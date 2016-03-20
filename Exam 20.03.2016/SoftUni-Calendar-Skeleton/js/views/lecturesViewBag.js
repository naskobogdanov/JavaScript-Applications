var app = app || {};


function calendar(data) {
    $('#calendar').fullCalendar({
        theme: false,
        header: {
            left: 'prev,next today addEvent',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2016-03-30',
        selectable: false,
        editable: false,
        eventLimit: true,
        events: data.lectures,
        customButtons: {
            addEvent: {
                text: 'Add Event',
                click: function () {
                    Sammy(function() {
                        this.trigger('redirectUrl', {url: '#/addLecture/'});
                    });
                }
            }
        },
        eventClick: function (calEvent, jsEvent, view) {
            $.get('templates/modal.html', function (templ) {
                var rendered = Mustache.render(templ, calEvent);
                $('#modal-body').html(rendered);
                $('#editLecture').on('click', function() {
                    Sammy(function() {
                        this.trigger('redirectUrl', {url: '/calendar/edit/:lectureId'});
                    });
                });
                $('#deleteLecture').on('click', function() {
                    Sammy(function() {
                        this.trigger('redirectUrl', {url: '#/calendar/delete/:lectureId'});
                    });
                })
            });
            $('#events-modal').modal();
        }
    });
}

app.lecturesViewBag = (function () {
    function showAllLectures(selector, data) {
        $.get('templates/calendar.html', function (templ) {
            var rendered = Mustache.render(templ, data);
            $(selector).html(rendered);
            calendar(data);
        })
    }

    function showMyLectures(selector, data) {
        $.get('templates/calendar.html', function (templ) {
            var rendered = Mustache.render(templ, data);
            $(selector).html(rendered);
            calendar(data);
        })
    }

    function showAddLecture(selector) {
        $.get('templates/add-lecture.html', function (templ) {
            $(selector).html(templ);
            $('#addLecture').on('click', function () {
                var title = $('#title').val(),
                    start = $('#start').val(),
                    end = $('#end').val();

                Sammy(function () {
                    this.trigger('addLecture', {title: title, start: start, end: end});
                })
            })
        })
    }

    function showEditLecture(selector, data) {
        $.get('templates/edit-lecture.html', function (templ) {
            var rendered = Mustache.render(templ, data);
            $(selector).html(rendered);
            $('#editLecture').on('click', function() {
                var title = $('#title').val(),
                    start = $('#start').val(),
                    end = $('#end').val(),
                    id = $(this).parent().attr('data-id');

                Sammy(function () {
                    this.trigger('editLecture', {title: title, start: start, end: end, _id: id});
                })
            })
        })
    }

    function showDeleteLecture(selector, data) {
        $.get('templates/delete-lecture.html', function (templ) {
            var rendered = Mustache.render(templ, data);
            $(selector).html(rendered);
            $('#deleteLecture').on('click', function() {
                var id = $(this).parent().attr('data-id');

                Sammy(function () {
                    this.trigger('deleteLecture', {_id:id});
                })
            })
        })
    }

    return {
        load: function () {
            return {
                showAllLecture: showAllLectures,
                showMyLectures: showMyLectures,
                showAddLecture: showAddLecture,
                showEditLecture: showEditLecture,
                showDeleteLecture: showDeleteLecture
            }
        }
    }
}());