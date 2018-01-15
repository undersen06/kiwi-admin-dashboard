"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("SettingsController", ["$scope","$Settings","$q","OneSignal",
  function($scope,$Settings,$q,OneSignal) {

    $scope.current = 1;

    $scope.isLoading = true;
    var previousOneSignal = false;


    // $scope.getSettings = function(){
      var promises = [$Settings.getOneSignal()];

      $q.all(promises).then(function(_responses){
        var onesignal = _responses[0].data;
        if(onesignal.length != 0){
          previousOneSignal = true;
          $scope.onesignal = onesignal[0];
        }

        debugger;

        $scope.isLoading = false;


      },function(_error){

      })
    // }

    $scope.update = function(index,data){
      debugger;
      switch (index) {
        case 1:
        previousOneSignal ? updateOneSignal(data) : createOneSignal(data)
        break;

        case 2:
        FacebookUpdate(data);
        break;

        case 3:
        InstagramUpdate(data);
        break;

        case 4:
        TwitterUpdate(data);
        break;

        default:

      }
    }


    function updateOneSignal(data){
      $Settings.updateOneSignal(data).then(function(_response){
        previousOneSignal = true;
        OneSignal.setOneSignal(_response.data.oneSignal)
      },function(_error){

      })
    }

    function createOneSignal(data){
      $Settings.createOneSignal(data).then(function(_response){
        OneSignal.setOneSignal(_response.data.oneSignal)
      },function(_error){

      })
    }

    $scope.select = function(index){
      $scope.current = index;
    }


  }]);
}).call(this);
