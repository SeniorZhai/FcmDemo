var admin = require('firebase-admin');
var serviceAccount = require("./fcm-demo-3d558-firebase-adminsdk-d28b9-121ee454e7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fcm-demo-3d558.firebaseio.com"
});
// zhai mido token
var registrationToken = "e5RQiXSHaj8:APA91bE2kiStMWDjzCNDxt4WPX31dCH1Hyl-0Aa_lRFx-OZy89xr2cg-71ATXhGyUAhZOM13g01D1sf7EhIB4kVllDB83uzJE4SytZb-DkEwEPTFedF9yQCwlvnoIn-3usPXnlOWSWIo";

var payload = {
  notification: {
   title: "Android title",
   body: "content",
   // Android config
   click_action:"asdkamsdlmsal",
   sound:"default",
   color:"#FF0010",
   tag:"1111"
 }
};

var options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};

admin.messaging().sendToDevice(registrationToken, payload)
  .then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });
