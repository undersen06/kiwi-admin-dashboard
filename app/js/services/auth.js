'use strict';

(function() {
  this.app.factory('$Auth', ['$http', '$q', 'ENV',
  function($http, $q, ENV, StorageUserService){


    return {
      sign_in: function(email,password) {
        let defer = $q.defer();
        $http({
          url: ENV.LOCAL + ENV.SIGN_IN,
          headers:{
            'Content-Type': 'application/json'
          },
          method: 'POST',
          data:{
            email:email,
            password:password
          }
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
