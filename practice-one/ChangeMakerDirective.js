function changeMaker() {
    return {
        restrict: 'E',
        controller: 'ChangeMakerController as vm',
        template: `
            <div>
                <form ng-submit="vm.handleChange()">
                    Bill Amount: <input type="number" ng-model="vm.billAmount" min="0" step="any"></br>
                    Given Amount: <input type="number" ng-model="vm.givenAmount" min="0"></br>
                    <button type="submit">Make Change</button></br>
                </form>
                <div ng-if="vm.quarters !== 0">
                        Quarters: {{ vm.quarters }}
                    </div>
                    <div ng-if="vm.dimes !== 0">
                        Dimes: {{ vm.dimes }}
                    </div>
                    <div ng-if="vm.nickels !== 0">
                        Nickels: {{ vm.nickels }}
                    </div>
                    <div ng-if="vm.pennies !== 0">
                        Pennies: {{ vm.pennies }}
                    </div>
            </div>
        `
    };
};

angular
    .module('my-app')
    .directive('changeMaker', changeMaker)