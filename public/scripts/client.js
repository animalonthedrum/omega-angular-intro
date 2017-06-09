//create a new angular module named 'myApp'
var myApp = angular.module('myApp', []); //dependencies will be pushed to empty array

//add a controller

myApp.controller('AngularIntro', function() {
  var vm = this; // stands for view model


  //globals
  vm.showFront = true;
  vm.cars = [];


  vm.addCar = function() {
    console.log("in addCar");

    //get user input
    //place into a new object
    //push into an array
    var newCar = {
      cost: vm.costIn,
      make: vm.makeIn,
      model: vm.modelIn,
      year: vm.yearIn
    }; //end object

    console.log('newCar:', newCar);
    //push into array
    vm.cars.push(newCar);
    console.log(vm.cars);
  }; //end addCar


  vm.testClick = function() {
    vm.output = "You typed:" + vm.userInput;
    console.log('congrats!!!! Look out for my ATV/JetSki!!!!', vm.userInput);

  };

  vm.toggleShow = function() {
    vm.showFront = !vm.showFront;
  };

}); //end controller


//after creatig the module and controlle, these must be connected to html go this with ng -app ng-controller
//do this in index.html
