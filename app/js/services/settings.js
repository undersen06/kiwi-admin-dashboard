'use strict';

(function() {
  this.app.factory('$Settings', ['$http', '$q', 'ENV','AuthModel',
  function($http, $q, ENV, AuthModel){


    return {
      updateOneSignal: function(data) {
        debugger;
        let defer = $q.defer();
        $http({
          url: ENV.LOCAL + ENV.UPDATE_ONESIGNAL,
          method: 'PUT',
          data:{
            appId:data.appId,
            token:data.token,
            adminId:AuthModel.getAdmin().email,
          }
        }).then(function(_response) {
          defer.resolve(_response);

        }, function(_error) {
          defer.reject(_error);
        });
        return defer.promise;
      },

      getOneSignal: function(data) {
        let defer = $q.defer();
        $http({
          url: ENV.LOCAL + ENV.GET_ONESIGNAL,
          method: 'GET',
        }).then(function(_response) {
          defer.resolve(_response);

        }, function(_error) {
          defer.reject(_error);
        });
        return defer.promise;
      },

      createOneSignal: function(data) {
        debugger;
        let defer = $q.defer();
        $http({
          url: ENV.LOCAL + ENV.CREATE_ONESIGNAL,
          method: 'POST',
          data:{
            appId:data.appId,
            token:data.token,
            adminId:AuthModel.getAdmin().email,
          }
        }).then(function(_response) {
          defer.resolve(_response);

        }, function(_error) {
          defer.reject(_error);
        });
        return defer.promise;
      },



    }
  }]);
}).call(this);
