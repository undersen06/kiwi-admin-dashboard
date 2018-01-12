"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("SignUpController", ["$scope", "$state","$ionicPlatform","$Regions","RegionsModel",
  function($scope, $state,$ionicPlatform,$Regions,RegionsModel) {
    $ionicPlatform.ready(function() {

      // $Regions.getRegions().then(function(_response){
      //   RegionsModel.setRegions(_response.data);
      //   $scope.regions = _response.data;
      // },function(_error){
      //
      // })

      $scope.regions = RegionsModel.getRegions();


      $scope.goToLogin = function(){
          $state.go("welcome");
      }



    });
  }]);
}).call(this);
