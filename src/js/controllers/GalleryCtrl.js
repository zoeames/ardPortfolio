app.controller("GalleryCtrl", function($scope, $http) {
    $scope.title = "Gallery";
    $scope.artwork = {};
    var artworkFirebase = 'https://ad-portfilio.firebaseio.com/artwork.json';

	$http({
		method: 'GET',
		url: artworkFirebase
	}).then(function successCallback(response) {
	    console.log('it works!!', response);
	    $scope.artwork = response.data;
	}, function errorCallback(response) {
	    console.log('error in ArtworkCtrl get request', response);
	});
});