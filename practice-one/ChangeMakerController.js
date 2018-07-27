function ChangeMakerController() {
    var vm = this;
    vm.billAmount;
    vm.givenAmount;
    vm.quarters = 0;
    vm.dimes = 0;
    vm.nickels = 0;
    vm.pennies = 0;
    vm.handleChange = function() {
        var diffInPennies = vm.givenAmount * 100 - vm.billAmount * 100;
        vm.quarters = Math.floor(diffInPennies / 25);
        vm.dimes = Math.floor((diffInPennies % 25) / 10);
        vm.nickels = Math.floor(((diffInPennies % 25) % 10) / 5);
        vm.pennies = Math.floor(((diffInPennies % 25) % 10) % 5);
    };
};

angular
    .module('my-app')
    .controller('ChangeMakerController', ChangeMakerController);