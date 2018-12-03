function initCourse() {
    window.course.courseList({}, function (obj) {
        smarty.html("course", obj, "page", function(){

        });
    });

}