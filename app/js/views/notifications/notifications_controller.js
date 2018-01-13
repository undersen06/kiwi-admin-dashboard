"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("notificationsController", ["$scope","$Notifications",
  function($scope,$Notifications) {

      $Notifications.getNotifications().then(function(_response){
        debugger;
        $scope.notifications = _response.data.notifications;
      },function(_error){
        debugger;
      })

  }]);
}).call(this);
