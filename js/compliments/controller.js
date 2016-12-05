`use strict`;

(function(){
  var app = angular.module("emergencyComp");
  app.controller("mainController", ComplimentsController);

  function ComplimentsController(){
    var vm = this;
    var randomIndex = Math.floor(Math.random() * data.length)
    //how does this controller know what "data" is??
    vm.data = data[randomIndex]
  }

}());
