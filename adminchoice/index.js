const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./test-47076-firebase-adminsdk-7tb7t-ef35dc0961.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-47076-default-rtdb.firebaseio.com"
});

exports.adminChoiceListener = functions.firestore.document('adminchoice/home/modules')
    .onWrite((snap, context) => {
      console.log(1234)
});
