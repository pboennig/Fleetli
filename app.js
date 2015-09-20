Parse.initialize("QEY1ZxKqnPoVpxyZ4YHXBb5t13iRvrW8jXAU72Bf", "q38ZsxLSoehX2w8HAPuJVwe4qDxUyf2xoUhXCkTJ");

var Police = Parse.Object.extend("police");
         var incident = new Incident();
         incident.save({
           lat : results[0].geometry.location.H,
           lon : results[0].geometry.location.L,
           descrip: Descrip,
           numPC : numPC,
         