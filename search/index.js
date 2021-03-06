const {database} = require('./firebaseDatabase');

const entityCollection = database.collection("entities");

function parseDocs(docs){
    return docs.map(document =>  {
      let [id, data] = [document.id, document.data()];
      return {id, ...data};
    });
}

exports.search = async function(req, res){
    const {query} = req.query;
    try {
        const snapshot = await entityCollection.orderBy('title').startAt(query).endAt(query+'\uf8ff').get();
        const entities = parseDocs(snapshot.docs);
        res.status(200).json({
            status: true,
            data: entities
        })
    } catch (error) {
        res.json({
            status: true,
        })
    }
}

// const { CONTENT_TYPES, LAYOUT_TYPES, CARD_TYPES } = require("./constants")
// const { getImage } = require("./images")

// exports.search = function(req, res){

//     const response = {
//         status: true,
//         data: [
//             {
//                 id: 1,
//                 title: 'हनुमान भजन और प्लेलिस्ट',
//                 subtitle: '',
//                 layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
//                 contents: [
//                     {id: 1, title: 'धन प्राप्ति के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 2, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 3, title: 'स्वस्थ जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 4, title: 'धन प्राप्ति के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 5, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 6, title: 'स्वस्थ जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                 ]
//             },
//             {
//                 id: 2,
//                 title: 'Trending भजन Playlists',
//                 subtitle: '',
//                 layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
//                 contents: [
//                     {id: 1, title: 'धन प्राप्ति के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 2, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 3, title: 'स्वस्थ जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 4, title: 'धन प्राप्ति के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 5, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                     {id: 6, title: 'स्वस्थ जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO, card_type: CARD_TYPES.SMALL_SQUARE},
//                 ]
//             }
//         ]
//     }

//     res.status(200).json(response)
// }