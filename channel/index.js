// const {getImage} = require('./images');
// const {LAYOUT_TYPES, CONTENT_TYPES, CARD_TYPES} = require('./constants');
var admin = require("firebase-admin");
var serviceAccount = require("./test-47076-firebase-adminsdk-7tb7t-ef35dc0961.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-47076-default-rtdb.firebaseio.com"
});

const database = admin.firestore();
const channelCollection = database.collection("channel");

exports.helloWorld = async (req, res) => {
    try {
        const channels = [];
        const response = await channelCollection.get();
        const docs = await response.docs;
        docs.forEach(object => {
            const [id, data] = [object.id, object.data()];
            const {description, thumbnail, name} = data;
            const channel = {
                id,
                description,
                thumbnail,
                name: name
            }
            channels.push(channel);
        });
        res.status(200).json({
            status: true,
            data: channels
        })
    } catch (error) {
        console.log(error)
    }
            
    

//     const response = {
//         status: true,
//         data: [
//             {id: 1, image_url: getImage(), layout: LAYOUT_TYPES.HEADER, card_type: CARD_TYPES.LARGE_RECTANGLE},
//             {
//                 id: 2, 
//                 layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT, 
//                 title: 'देवी देवता का भजन संग्रह',
//                 subTitle: '',
//                 contents: [
//                     {id: 1, title: null, image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.VERTICAL_RECTANGLE },
//                     {id: 2, title: null, image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.VERTICAL_RECTANGLE },
//                     {id: 3, title: null, image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.VERTICAL_RECTANGLE },
//                     {id: 4, title: null, image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.VERTICAL_RECTANGLE },
//                 ]
//             },
//             {
//                 id: 3, 
//                 layout: LAYOUT_TYPES.SLIDER, 
//                 title: null,
//                 subTitle: null,
//                 contents: [
//                     {id: 1, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.HORIZONTAL_RECTANGLE },
//                     {id: 2, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.HORIZONTAL_RECTANGLE },
//                     {id: 3, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.HORIZONTAL_RECTANGLE },
//                     {id: 4, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.HORIZONTAL_RECTANGLE },
//                 ]
//             },
//             {
//                 id: 4, 
//                 layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT, 
//                 title: 'देवी देवताओ की आरती',
//                 subTitle: null,
//                 contents: [
//                     {id: 1, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 2, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 3, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 4, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 5, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 6, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 7, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                 ]
//             },
//             {
//                 id: 5, 
//                 layout: LAYOUT_TYPES.HORIZONTAL_SCROLL, 
//                 title: 'Trending भजन Playlists',
//                 subTitle: null,
//                 contents: [
//                     {id: 1, title: 'गणेश वंदना', image_url: getImage(), content_type: CONTENT_TYPES.PLAYER, card_type: CARD_TYPES.MEDIUM_RECTANGLE },
//                     {id: 2, title: 'खुश कैसे रहे', image_url: getImage(), content_type: CONTENT_TYPES.PLAYER, card_type: CARD_TYPES.MEDIUM_RECTANGLE },
//                     {id: 3, title: 'गणेश वंदना', image_url: getImage(), content_type: CONTENT_TYPES.PLAYER, card_type: CARD_TYPES.MEDIUM_RECTANGLE },
//                     {id: 4, title: 'खुश कैसे रहे', image_url: getImage(), content_type: CONTENT_TYPES.PLAYER, card_type: CARD_TYPES.MEDIUM_RECTANGLE },
//                 ]
//             },
//             {
//                 id: 6, 
//                 layout: LAYOUT_TYPES.TWO_COLUMN_LAYOUT, 
//                 title: 'आरती पुस्तक',
//                 subTitle: null,
//                 contents: [
//                     {id: 1, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_RECTANGLE },
//                     {id: 2, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_RECTANGLE },
//                     {id: 3, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_RECTANGLE },
//                     {id: 4, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_RECTANGLE },
//                     {id: 5, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_RECTANGLE },
//                 ]
//             },
//             {
//                 id: 7, 
//                 layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT, 
//                 title: 'अन्य लोकप्रिय श्रेणियां',
//                 subTitle: null,
//                 contents: [
//                     {id: 1, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 2, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 3, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 4, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                     {id: 5, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.SMALL_SQUARE },
//                 ]
//             },
//         ]
//     }
    
  };

