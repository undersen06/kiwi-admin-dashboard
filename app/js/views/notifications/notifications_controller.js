"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("notificationsController", ["$scope","$Notifications",
  function($scope,$Notifications) {

    $scope.isLoading = true;
    $scope.isSendingNotification = false;

    $scope.forAndroid = true;
    $scope.forIos = true;

    $scope.forMale = true;
    $scope.forFemale = true;

    $scope.urlImage = '';
    // $scope.newNotification = {};


    $scope.loadImage = function(_url_image){
      $scope.urlImage = _url_image;
    }




    $Notifications.getNotifications().then(function(_response){

      $scope.notifications = _response.data.notifications;
      console.log($scope.notifications);
      $scope.isLoading = false;
    },function(_error){

      $scope.isLoading = false;
    })

    $scope.interact = function(index){

      switch (index) {
        case 1:
        if($scope.forAndroid)
          $scope.forAndroid = false;
        break;
        case 2:

        if($scope.forIos)
          $scope.forIos = false;
        break;
        case 3:
        if($scope.forMale)
          $scope.forMale = false;
        break;
        case 4:
        if($scope.forFemale)
          $scope.forFemale = false;
        break;
        default:

      }

      $scope.forAndroid = 'checked';
    }


    $scope.createNotification = function(notification){
      var notification = _prepareNotification(notification)

      $scope.isSendingNotification = true;

      $Notifications.sendNotification(notification).then(function(_response){
        $scope.isSendingNotification = false;
      },function(_error){
        debugger;
        $scope.isSendingNotification = false;
      })



    }

     function _prepareNotification(notification){

      return notification = {
        isIos:$scope.forIos || false,
        isAndroid:$scope.forAndroid || false,
        headings:{
          en:notification.title,
          es:notification.title
        },
        contents:{
          en:notification.body,
          es:notification.body
        },
        subtitle:{
          en:notification.subtitle,
          es:notification.subtitle
        },
        included_segments: ["All"],
        app_id:'3169e7d1-aa60-4fd6-920b-62a86a2e34c0',
        big_picture:notification.bigImage
      }

    }

  }]);
}).call(this);
