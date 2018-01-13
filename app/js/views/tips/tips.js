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

        },function(_error){



        })

      }


      $scope.createTip = function (tip){


        $Tips.createTip(tip).then(function(_response){
          $scope.getAllTips();
        },function(_error){

          

        })

      }


      $scope.getAllTips();


  }]);
}).call(this);
