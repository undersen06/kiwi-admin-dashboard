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

        $scope.tips = _.chunk(_response.data,5);
        $scope.tipsShow = $scope.tips[0]
        $scope.index = 0;
      },function(_error){

        toastr.warning('No ah sido posible descargar los tips, intentelo mas tarde.', 'Problemas al crear tip')

      })
    }

    $scope.pagination = function(index){
      $scope.index = index;
      $scope.tipsShow = $scope.tips[index]
    debugger;
    }


    $scope.createTip = function (tip){

      debugger;
      if(tip === undefined){
        toastr.warning('Uno o mas campos estan incompletos.', 'Campos incompletos')
        return;
      }

      if(tip.title === undefined){
        toastr.warning('Complete el campo titulo.', 'Campos incompletos')
        return;
      }

      if(tip.title === undefined){
        toastr.warning('Complete el campo contenido.', 'Campos incompletos')
        return;
      }





      $Tips.createTip(tip).then(function(_response){
        $scope.getAllTips();
      },function(_error){
        toastr.warning('No ah sido posible crear el tip, intentelo mas tarde.', 'Problemas al crear tip')

      })

    }


    $scope.getAllTips();


  }]);
}).call(this);
