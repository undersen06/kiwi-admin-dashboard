(function() {
  this.app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "js/views/main/main.html",
      controller : "MainController"
    })
    .when("/login", {
      templateUrl : "js/views/login/login.html",
      controller : "LoginController"
    })

    .when("/region", {
      templateUrl : "../view1/view1.htm",
      controller : "londonCtrl"
    })

    .when("/paris", {
      templateUrl : "paris.htm",
      controller : "parisCtrl"
    });
  });
}).call(this);
