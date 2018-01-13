'use strict';

(function() {
  this.app.factory('$Notifications', ['$http', '$q', 'ENV',
  function($http, $q, ENV, StorageUserService){


    return {
      getNotifications: function() {
        let defer = $q.defer();
        $http({
          url: "https://onesignal.com/api/v1/notifications?app_id=3169e7d1-aa60-4fd6-920b-62a86a2e34c0",
          method: 'GET',
          headers:{
            authorization: "Basic ZjYxMDczOTItNTQ4Mi00ZmQ5LWFiMTQtZmE0OWJmYjg4OTA4"
          }
        }).then(function(_response) {
          defer.resolve(_response);

        }, function(_error) {
          defer.reject(_error);
        });
        return defer.promise;
      },

      sendNotification: function(notification) {
        let defer = $q.defer();
        $http({
          url: "https://onesignal.com/api/v1/notifications",
          method: 'POST',
          headers:{
            authorization: "Basic ZjYxMDczOTItNTQ4Mi00ZmQ5LWFiMTQtZmE0OWJmYjg4OTA4"
          },
          data:notification
        }).then(function(_response) {
          defer.resolve(_response);

        }, function(_error) {
          defer.reject(_error);
        });
        return defer.promise;
      }

    }
  }]);
}).call(this);
