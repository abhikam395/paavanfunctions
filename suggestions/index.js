const {database} = require('./firebaseDatabase');

const tagCollection = database.collection("tags");

function parseDocs(docs){
    return docs.map(document =>  {
      let [id, data] = [document.id, document.data()];
      return {id, ...data};
    });
}

exports.suggestions = async function(req, res){
    try {
        const snapshot = await tagCollection.limit(20).get();
        const tags = parseDocs(snapshot.docs);
        res.status(200).json({
            status: true,
            data: tags
        })
    } catch (error) {
        res.json({
            status: false,
        })
    }
}