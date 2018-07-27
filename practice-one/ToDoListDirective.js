function todoDirective() {
    return {
        restrict: 'E',
        controller: 'ToDoListController as vm',
        template: `
        <div>
            <form ng-submit="vm.addTask()">
            <input type="text" ng-model="vm.newTask"><button type="submit">Add</button>
            </form>
            <!-- <ul>
              <li ng-repeat="task in vm.tasks">
                <input type="checkbox" ng-model="task.completed">
                <span ng-if="!task.completed">{{ task.description }}</span>
                <span ng-if="task.completed"><s>{{ task.description }}</s></span>
                <button ng-click="vm.removeTask(task)">X</button>
              </li>
            </ul> -->
            <div>
                <div ng-repeat="task in vm.tasks">
                    <input type="checkbox" ng-model="task.completed">
                    <span ng-if="!task.completed">{{ task.description }}</span>
                    <span ng-if="task.completed"><strike>{{ task.description }}</strike></span>
                    <button ng-show="task.completed" ng-click="vm.removeTask(task)">X</button>
                </div>
            </div>
      </div>
      `
    }
}
angular
    .module('my-app')
    .directive('todoDirective', todoDirective)