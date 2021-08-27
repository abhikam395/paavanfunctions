const { getImage } = require("./images");
const { LAYOUT_TYPES, CARD_TYPES, CONTENT_TYPES } = require("./constants");
// var admin = require("firebase-admin");
// var serviceAccount = require("./test-47076-firebase-adminsdk-7tb7t-ef35dc0961.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://test-47076-default-rtdb.firebaseio.com"
// });

// const database = admin.firestore();

// const adminChoice = database.collection("adminconfig");
// const recentPlayCollection = database.collection("recentplays");
// const categoriesCollection = database.collection("categories");
// const channelCollections = database.collection("channel");
// const tagsCollection = database.collection("tags");
// const songsVideosCollection = database.collection("songs_videos");
// const godsCollection = database.collection('gods');

// async function getAdminSelectionType() {
//     const response = await adminChoice.get();
//     const {selection_type} = await response.docs[0]?.data();
//     return selection_type;
// }

// async function getChannels(){
//     const channels = [];
//     const response = await channelCollections.get();
//     const docs = await response.docs;
//     docs.forEach(object => {
//         console.log(object.id)
//         const [id, data] = [object.id, object.data()];
//         const channel = {
//             id,
//             ...data
//         }
//         channels.push(channel);
//     });
    
//     return channels;
// }

// async function getTags(){
//     const tags = [];
//     const response = await tagsCollection.get();
//     const docs = await response.docs;
//     docs.forEach(object => {
//         console.log(object.id)
//         const [id, data] = [object.id, object.data()];
//         const tag = {
//             id,
//             ...data
//         }
//         tags.push(tag);
//     });
    
//     return tags;
// }

// async function getCategories(){
//     const categories = [];
//     const response = await categoriesCollection.get();
//     const docs = await response.docs;
//     docs.forEach(object => {
//         console.log(object.id)
//         const [id, data] = [object.id, object.data()];
//         const category = {
//             id,
//             ...data
//         }
//         categories.push(category);
//     });
    
//     return categories;
// }

// async function getSongsVideos(videoIds = []){
//     console.log(videoIds)
//     const songsVideos = [];
//     const response = await songsVideosCollection.where(admin.firestore.FieldPath.documentId(), 'in', videoIds).get();
//     console.log(1234)
//     const docs = await response.docs;
//     docs.forEach(object => {
//         console.log(object.id)
//         const [id, data] = [object.id, object.data()];
//         const songVideo = {
//             id,
//             ...data
//         }
//         songsVideos.push(songVideo);
//     });
    
//     return songsVideos;
// }

// async function getRecentPlays(userid = "0yywOJOUkDYQJHS479GDwpPmNKA3"){
//     const response = await recentPlayCollection.doc(userid).get();
//     const videoIds = response.data().songs;
//     return videoIds;
// }

// async function getGods(){
//     let gods = [];
//     const response = await godsCollection.limit(10).get();
//     const docs = await response.docs;
//     docs.forEach(object => {
//         console.log(object.id)
//         const [id, data] = [object.id, object.data()];
//         const god = {
//             id,
//             ...data
//         }
//         gods.push(god);
//     });
//     return gods;
// }

exports.home = async function(req, res){
    // let {userid} = req.query;
    // try {
    //     let data = {}, gods=[], categories=[], recentplays = []; 
    //     //categories
    //     const [categoriesSnapshot, godsSnapshot, recentplaySnapshot] = 
    //         await Promise.all([
    //             categoriesCollection.get(), 
    //             godsCollection.get(),
    //             recentPlayCollection.doc(userid).collection("songs").get()
    //         ]);
    //     const recentplayDocs = recentplaySnapshot.docs;
    //     const categoryDocs = categoriesSnapshot.docs;
    //     const godDocs = godsSnapshot.docs;
    //     categoryDocs.forEach(snap => {
    //         let [id, data] = [snap.id, snap.data()];
    //         categories.push({id, ...data})
    //     });

    //     godDocs.forEach(snap => {
    //         let [id, data] = [snap.id, snap.data()];
    //         gods.push({id, ...data})
    //     });

    //     recentplayDocs.forEach(snap => {
    //         let [id, data] = [snap.id, snap.data()];
    //         recentplays.push({id, ...data})
    //     });

    //     data['categories'] = categories;
    //     data['gods'] = gods;
    //     data['recentplays'] = recentplays;

    //     res.status(200).json({
    //         status: true,
    //         data: data,
    //     })
    // } catch (error) {
    //     res.status(303).json({
    //         status: false,
    //         data: null,
    //         message: "Something went wrong"
    //     })
    // }

    
        
    const response = {
        status: true,
        data: [ 
            {
                id: 1,
                title: null,
                subtitle: null,
                layout: LAYOUT_TYPES.SLIDER,
                contents: [
                    {id: 1, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 2, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 3, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 4, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 5, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 6, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                ],
                extra: []
            },
            {
                id: 2,
                title: 'Recently Played',
                subtitle: null,
                layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
                contents: [
                    {id: 1, title: 'श्याम तेरे दीवाने', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 2, title: 'रामायण Ep. 20', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 3, title: 'महामृत्युनजय मंत्र', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 4, title: 'महामृत्युनजय Ep', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'Recently Played', card_type: CARD_TYPES.SMALL_SQUARE, layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT},
                ]
            },
            {
                id: 3,
                title: 'चयनित श्रृंखला',
                subtitle: null,
                layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
                contents: [
                    {id: 1, title: 'रामायण - 103 एपिसोड ', image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 2, title: 'महाभारत - 143 एपिसोड', image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 3, title: 'महाभारत - 143 एपिसोड', image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'चयनित श्रृंखला', card_type: CARD_TYPES.MEDIUM_RECTANGLE, layout: LAYOUT_TYPES.TWO_COLUMN_LAYOUT},
                ]
            },
            {
                id: 4,
                title: 'आपके प्रिय देवी-देवता',
                subtitle: null,
                layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
                contents: [
                    {id: 1, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 2, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 3, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 4, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 5, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 6, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 7, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'आपके प्रिय देवी-देवता', card_type: CARD_TYPES.CIRCLE, layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT},
                ]
            },
            {
                id: 5,
                title: null,
                subtitle: null,
                layout: LAYOUT_TYPES.SLIDER,
                contents: [
                    {id: 1, image_url: getImage(), card_type: CARD_TYPES.HORIZONTAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 1, image_url: getImage(), card_type: CARD_TYPES.HORIZONTAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                ],
                extra: []
            },
            {
                id: 6,
                title: 'c',
                subtitle: null,
                layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
                contents: [
                    {id: 1, title: null, image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 2, title: null, image_url: getImage(),  card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 3, title: null, image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 4, title: null, image_url: getImage(),  card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 5, title: null, image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 6, title: null, image_url: getImage(),  card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'Trending भजन Playlists', card_type: CARD_TYPES.SMALL_SQUARE, layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT},
                ]
            },
            {
                id: 7,
                title: 'Trending भजन Playlists',
                subtitle: null,
                layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
                contents: [
                    {id: 1, title: "शांतिपूर्ण सुबह", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 2, title: "शाम की धुन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 3, title: "शांतिपूर्ण सुबह", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 4, title: "शाम की धुन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 5, title: "गणेश भजन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 6, title: "शाम की धुन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 7, title: "गणेश भजन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},            ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'Trending भजन Playlists', card_type: CARD_TYPES.VERTICAL_RECTANGLE, layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT},
                ]
            },
            {
                id: 8,
                title: 'आज के लिए ख़ास',
                subtitle: null,
                layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
                contents: [
                    {id: 1, title: "हनुमान", image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 2, title: "हनुमान भजन Playlist", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 3, title: "हनुमान मंत्र", image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 4, title: "हनुमान भजन Playlist", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'आज के लिए ख़ास', card_type: CARD_TYPES.CIRCLE, layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT},
                ]
            },
            {
                id: 9,
                title: 'सबका पसंदीदा',
                subtitle: null,
                layout: 'SLIDER',
                contents: [
                    {id: 1, image_url: getImage(), card_type: CARD_TYPES.LARGE_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 2, image_url: getImage(), card_type: CARD_TYPES.LARGE_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                ],
                extra: []
            },
            {
                id: 10,
                title: 'प्रभावशाली प्रवचन',
                subtitle: null,
                layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
                contents: [
                    {id: 1, title: "ब्रह्मा कुमारी", image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 2, title: "Sadhguru", image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                    {id: 3, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 4, title: "Sadhguru", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},

                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'प्रभावशाली प्रवचन', card_type: CARD_TYPES.SMALL_SQUARE, layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT},
                ]
            },
            {
                id: 11,
                title: 'नई रिलीज',
                subtitle: null,
                layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
                contents: [
                    {id: 1, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 2, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                    {id: 3, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 4, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'नई रिलीज', card_type: CARD_TYPES.MEDIUM_RECTANGLE, layout: LAYOUT_TYPES.TWO_COLUMN_LAYOUT},
                ]
            },
            {
                id: 12,
                title: 'सुझाव एवं अनोखे उपाय',
                subtitle: null,
                layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
                contents: [
                    {id: 1, title: "धन प्राप्ति के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 2, title: "क्रोध मुक्त जीवन के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 3, title: "स्वस्थ जीवन के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 4, title: "Sadhguru", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},

                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'सुझाव एवं अनोखे उपाय', card_type: CARD_TYPES.SMALL_SQUARE, layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT},
                ]
            },
            {
                id: 13,
                title: 'आपके मूड अनुसार',
                subtitle: null,
                layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
                contents: [
                    {id: 1, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 2, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 3, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},
                    {id: 4, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},
                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'आपके मूड अनुसार', card_type: CARD_TYPES.MEDIUM_SQUARE, layout: LAYOUT_TYPES.TWO_COLUMN_LAYOUT},
                ]
            },
            {
                id: 14,
                title: 'शीर्ष संग्रह',
                subtitle: null,
                layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
                contents: [
                    {id: 1, title: "धन प्राप्ति के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 2, title: "क्रोध मुक्त जीवन के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 3, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                    {id: 4, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                ],
                extra: [
                    {id: 1, title: 'और देखें', link: null, subtitle: 'शीर्ष संग्रह', card_type: CARD_TYPES.SMALL_SQUARE, layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT},
                ]
            },
        ]
    }

    res.status(200).json(response);
}