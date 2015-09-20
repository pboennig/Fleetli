   Parse.initialize("QEY1ZxKqnPoVpxyZ4YHXBb5t13iRvrW8jXAU72Bf", "q38ZsxLSoehX2w8HAPuJVwe4qDxUyf2xoUhXCkTJ");
      function initMap() {


        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 37.78, lng: -122.42}
        });
        var geocoder = new google.maps.Geocoder();
      
        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
          
          var Police_uno = Parse.Object.extend("police");
          var query = new Parse.Query(Police_uno);
          
          query.first({
            success: function(object) {
            object.set("onCall", true);
            object.save();
            }
          })

        });

         document.getElementById('reset').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
          
          var Police_dos = Parse.Object.extend("police");
          var query2 = new Parse.Query(Police_dos);
          

          query2.first({
            success: function(object) {
            object.set("onCall", false);
            object.save();
            }
          })

        });


        $('input').keydown(function(e) {
              if (e.keyCode == 13) {
               geocodeAddress(geocoder, map); 
               var Police_uno = Parse.Object.extend("police");
              var query = new Parse.Query(Police_uno);
              query.first({
                success: function(object) {
                object.set("onCall", true);
                object.save();
              }
          })
    }

  });
}

      
      
      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });


            var Descrip = document.getElementById("descrip").value;
            var numPC = parseInt(document.getElementById("numPC").value);
            
            var Incident = Parse.Object.extend("Incident");
            var incident = new Incident();
            incident.save({
              lat : results[0].geometry.location.H,
              lon : results[0].geometry.location.L,
              descrip: Descrip,
              numPC : numPC,
            });

            window.dest = { lat: results[0].geometry.location.H, lon : results[0].geometry.location.l }

            Parse.Cloud.run('getLocation');
      
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
