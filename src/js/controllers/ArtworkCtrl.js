app.controller("ArtworkCtrl", function($scope, $http) {
    $scope.title = "Artwork";
    $scope.artwork = {};
    $scope.newArtwork = {};

    var artworkFirebase = 'https://ad-portfilio.firebaseio.com/artwork.json'

    $scope.addArt = function(){
    	console.log($scope.newArtwork);
	    $http({
		  method: 'POST',
		  url: artworkFirebase,
		  data: $scope.newArtwork
		}).then(function successCallback(response) {
		    console.log('it works!!', response);
		    getArt();
		}, function errorCallback(response) {
		    console.log('error in ArtworkCtrl POST request', response);
		});
    }


    var getArt = function(){
	    $http({
		  method: 'GET',
		  url: artworkFirebase
		}).then(function successCallback(response) {
		    console.log('it works!!', response);
		    $scope.artwork = response.data;
		}, function errorCallback(response) {
		    console.log('error in ArtworkCtrl get request', response);
		});
    }
    getArt();

});
