var admin = require("firebase-admin");
var serviceAccount = require("./test-47076-firebase-adminsdk-7tb7t-ef35dc0961.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-47076-default-rtdb.firebaseio.com"
});

exports.database = admin.firestore();
exports.admin = admin;