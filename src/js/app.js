var app = angular.module("ardPortfolio", ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/welcome.html', controller: 'WelcomeCtrl'})
      .when('/about', {templateUrl: 'views/about.html', controller: 'AboutCtrl'})
      .when('/gallery', {templateUrl: 'views/gallery.html', controller: 'GalleryCtrl'})
      .when('/artwork', {templateUrl: 'views/artwork.html', controller: 'ArtworkCtrl'})
      .otherwise({redirectTo: '/'});
  }]);
