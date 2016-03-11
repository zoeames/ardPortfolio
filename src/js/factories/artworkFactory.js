app.factory('artworkFactory', function($http){
    var artworkFirebase = 'https://ad-portfilio.firebaseio.com/artwork';

    return {
        getArtwork: function(){
            return $http({
                method: 'GET',
                url: artworkFirebase + '.json'
            })
        },
        deleteArtwork: function(artId){
	        return $http({
			 	method: 'DELETE',
			 	url: artworkFirebase +'/'+ artId + '.json'
			})
        },
        postArtwork: function(newArtwork){
            return $http({
                method: 'POST',
                url: artworkFirebase+'.json',
                data: {
                    title: newArtwork.title,
                    medium: newArtwork.medium,
                    size: newArtwork.size,
                    yearCompleted: newArtwork.yearCompleted,
                    filename: newArtwork.filename,
                    imgUrl: '/images/artwork/'+newArtwork.filename
                }
            })
        },
        mapArtworkToArray: function(artworkObject){
            return Object.keys(artworkObject).map(function(key) {
                var newObject = artworkObject[key];
                newObject['firebaseKey'] = key;
                return newObject;
            });
        }  
    }               
});