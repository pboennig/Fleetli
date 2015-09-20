


var Incident = Parse.Object.extend("icident");
var query = new Parse.Query(GameScore);

var origines = []
query.equalTo("onCall", true);
query.find({
  success: function(results) {
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      origin = new google.maps.LatLng(object.lat, object.lon);
      origines.append(origin);

    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});



var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: origenes,
    destinations: [destinationA],
    unitSystem: google.maps.UnitSystem.IMPERIAL,
  }, callback);

function callback(response, status) {
  if (status == google.maps.DistanceMatrixStatus.OK) {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
        console.log(duration);
      }
    }
  }
}
