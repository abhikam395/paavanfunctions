const {database, admin} = require('./firebaseDatabase');

const entityCollection = database.collection("entities");

function parseDocs(docs){
    return docs.map(document =>  {
      let [id, data] = [document.id, document.data()];
      return {id, ...data};
    });
}  

exports.recommendations = async function(req, res){
    let {tags, entityId} = req.body;
    let parsedTags = JSON.parse(tags);

    const snapshot = await 
        entityCollection
            .where(admin.firestore.FieldPath.documentId(), '!=', entityId)
            .where('tags', 'array-contains-any', parsedTags)
            .get();

    const entities = parseDocs(snapshot.docs);

    res.status(200).json({
        status: true,
        data: entities
    });
}