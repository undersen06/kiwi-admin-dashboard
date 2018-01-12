"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("LoginController", ["$scope","$Regions","$document",
  function($scope,$Regions,$document) {

    $('body').addClass('perfect-dom');

    // $Regions.getRegions().then(function(_response){
    //     debugger;
    // },function(_error){
    //
    // })
    $scope.$onDestroy = function () {
      $('body').removeClass('perfect-dom');
      console.log("hola");
    };


  }]);
}).call(this);
