const {database, admin} = require('./firebaseDatabase');

const moduleCollection = database.collection("modules");
const entityCollection = database.collection("entities");

async function getEntitiesByTags(tags = [], page, per_page){
    if(tags.length > 10)
      throw "Tags mustn't exceed to 10"
    let snapshot = await entityCollection.where('tags', 'array-contains-any', tags).get();
    if(snapshot.docs.length == 0) return [];
    return filterEntities(snapshot.docs);
}

function filterEntities(docs){
    return docs.map(document =>  {
      let [id, data] = [document.id, document.data()];
      delete data.childEntities;
      delete data.tags;
      delete data.parent;
      return {id, ...data};
    });
}

async function getEntitiesById(entityIds = []){
    var i,j, chunkEntityList, entities = [], chunk = 10;
    for (i = 0,j = entityIds.length; i < j; i += chunk) {
        chunkEntityList = entityIds.slice(i, i + chunk);
        let snapshot = await 
          entityCollection.where(admin.firestore.FieldPath.documentId(), 'in', chunkEntityList).get();
        if(snapshot.docs.length == 0) continue;
        entities = [...entities, ...filterEntities(snapshot.docs)]
    }
    return entities;
  }

function parseDocs(docs){
    return docs.map(document =>  {
      let [id, data] = [document.id, document.data()];
      return {id, ...data};
    });
}  

//sort
function sortEntitiesByViews(entities){
    return entities.sort(function(firstEntity, secondEntity) {
      return secondEntity.views - firstEntity.views;
    })
  }

// ranking entities logic wise i.e topscore/random/manual
async function rankEntities(rankingLogic, entities){
    if(rankingLogic === "topscore")
      return sortEntitiesByViews(entities)
    return entities;
  }

exports.generic = async function(req, res){
    try {
        const {per_page, page, id} = req.query;
        let perPage = per_page || 10;
        let pageNo = page || 1;
        let entities = [], rankedEntities = [];
        const snapshot = await moduleCollection.doc(id).get();
        const {entitySelectionLogic, tags, entityRankingLogic, selectedEntityIds} = snapshot.data();
        let entityIds = selectedEntityIds.slice(pageNo * per_page, (pageNo + 1) * perPage );
        
        if(entitySelectionLogic === "manual"){
            entities = await getEntitiesById(selectedEntityIds);
            rankedEntities = await rankEntities(entityRankingLogic, entities);
        }
        else if (entitySelectionLogic === "tagcombination"){
            if(tags && tags.length > 0){
              entities = await getEntitiesByTags(tags, pageNo, perPage);
              console.log(entities.length)
              rankedEntities = await rankEntities(entityRankingLogic, entities);
            }
          }

        res.json({
            status: true,
            data: rankedEntities
        })
    } catch (error) {
        res.json({
            status: false,
            error: error
        })
    }
}