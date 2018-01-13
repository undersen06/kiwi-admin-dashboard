"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("TipsController", ["$scope","$Tips",
  function($scope,$Tips) {

    var vm = this;


      $scope.getAllTips = function(){
        $Tips.getTips().then(function(_response){

          vm.tips = _response.data;
          debugger;
        },function(_error){

          debugger;

        })

      }


      $scope.createTip = function (tip){
        debugger;

        $Tips.createTip(tip).then(function(_response){
          $scope.getAllTips();
        },function(_error){

          debugger;

        })

      }


      $scope.getAllTips();


  }]);
}).call(this);
