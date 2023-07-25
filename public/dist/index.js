"use strict";
(function () {
    var todo = {
        description: 'todo',
        done: false,
    };
    var reminder = {
        description: 'reminder',
        date: '24.07.2023',
    };
    var taskView = {
        render: function (tasks) {
            var taskList = document.getElementById('tasksList');
            while (taskList === null || taskList === void 0 ? void 0 : taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }
            tasks.forEach(function (task) {
                var li = document.createElement('LI');
                var textNode = document.createTextNode(JSON.stringify(task));
                li.appendChild(textNode);
                taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(li);
            });
        },
    };
    var TaskController = function (view) {
        var _a;
        var tasks = [todo, reminder];
        var handleEvent = function (event) {
            event.preventDefault();
            view.render(tasks);
        };
        (_a = document.getElementById('taskForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleEvent);
    };
    TaskController(taskView);
})();
