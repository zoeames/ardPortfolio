app.controller("GalleryCtrl", function($scope, artworkFactory) {
    $scope.title = "Gallery";
    $scope.artwork = {};

    var getAllTheArtwork = function(){
	    artworkFactory.getArtwork().success(function(data, status) {
			$scope.artwork = artworkFactory.mapArtworkToArray(data)
		});
	};
	
	getAllTheArtwork(); 
});