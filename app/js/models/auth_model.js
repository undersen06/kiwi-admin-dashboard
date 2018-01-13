
'use strict';

(function() {
  this.app.service('AuthModel', ['$q', '$localStorage', function($q, $localStorage) {

    var auth;

    return {

      getAdmin: function() {
        return auth = $localStorage.auth;
      },
      setAdmin: function(data) {
        $localStorage.auth = data;
      },
      destroyAdmin: function() {
        delete $localStorage.auth;
        return true;
      }
    };

  }]);
}).call(this);
