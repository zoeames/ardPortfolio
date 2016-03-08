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
		 	data: {
		 		title: $scope.newArtwork.title,
		 		medium: $scope.newArtwork.medium,
		 		size: $scope.newArtwork.size,
				yearCompleted: $scope.newArtwork.yearCompleted,
		 		filename: $scope.newArtwork.filename,
		 		imgUrl: '/images/artwork/'+$scope.newArtwork.filename
		 	}
		}).then(function successCallback(response) {
		    console.log('it works!!', response);
                $scope.newArtwork = {};
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
