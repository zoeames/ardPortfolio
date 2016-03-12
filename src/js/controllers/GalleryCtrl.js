app.controller("GalleryCtrl", function($scope, artModal, artworkFactory) {
    $scope.title = "Gallery";
    $scope.artwork = {};

    var getAllTheArtwork = function(){
	    artworkFactory.getArtwork().success(function(data, status) {
			$scope.artwork = artworkFactory.mapArtworkToArray(data)
		});
	};
	
	getAllTheArtwork(); 

    $scope.show = function (art) {
        console.log(art);
        artModal.activate(art);
    }
});