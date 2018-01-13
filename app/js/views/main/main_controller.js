"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("MainController", ["$scope","$Regions","AuthModel","$window",
  function($scope,$Regions,AuthModel,$window) {

    $('body').removeClass('perfect-dom');

    //verify user exist

    if(AuthModel.getAdmin()){
      debugger;
    }else{
      debugger;
      $window.location.href = '#/login';
    }





    // $Regions.getRegions().then(function(_response){
    //     debugger;
    // },function(_error){
    //
    // })

  }]);
}).call(this);
