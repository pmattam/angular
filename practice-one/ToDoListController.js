function ToDoListController() {
    var vm = this;
    vm.newTask = '';
    vm.tasks = [
        {
            description: 'ex1',
            completed: false
        },
        {
            description: 'ex2',
            completed: false
        },
        {
            description: 'ex3',
            completed: false
        },
        {
            description: 'ex4',
            completed: false
        },
        {
            description: 'ex5',
            completed: false
        },
        {
            description: 'ex7',
            completed: false
        },
        {
            description: 'ex8',
            completed: false
        }
    ];
    vm.addTask = function() {
        var newTaskObj = { description: vm.newTask, completed: false };
        vm.tasks.push(newTaskObj);
        vm.newTask = '';
    };
    vm.removeTask = function(task) {
        console.log(task);
        vm.tasks = vm.tasks.filter( eachTask => eachTask.description != task.description )
    };
};

angular
    .module('my-app')
    .controller('ToDoListController', ToDoListController);