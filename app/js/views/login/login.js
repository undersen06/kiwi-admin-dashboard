"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("LoginController", ["$scope","$document","$Auth","AuthModel","$window",
  function($scope,$document,$Auth,AuthModel,$window) {

    if(AuthModel.getAdmin()){
      $window.location.href = '#/dashboard';
    }




    $('body').addClass('perfect-dom');

    $scope.$onDestroy = function () {
      $('body').removeClass('perfect-dom');
      console.log("hola");
    };

    $scope.login =  function(user){
      $Auth.sign_in(user.email,user.password).then(function(_response){
        AuthModel.setAdmin(_response.data)
        $window.location.href = '#/dashboard';
      },function(_error){
        debugger;

      })

    }





  }]);
}).call(this);
