const { database, admin } = require('./firebaseDb');

const modulesCollection = database.collection("modules");
const pageCollection = database.collection("pages");
const entityCollection = database.collection("entities");

//sort
function sortEntitiesByViews(entities){
  return entities.sort(function(firstEntity, secondEntity) {
    return secondEntity.views - firstEntity.views;
  })
}

//sort module
function sortModulesByPostion(modules){
  return modules.sort(function(firstModule, secondModule) {
    return firstModule.position - secondModule.position;
  })
}

async function getEntitiesByTags(tags = []){
  if(tags.length > 10)
    throw "Tags mustn't exceed to 10"
  let snapshot = await entityCollection.where('tags', 'array-contains-any', tags).get();
  if(snapshot.docs.length == 0) return [];
  return parseDocs(snapshot.docs);
}

async function getEntitiesById(entityIds = []){
  var i,j, chunkEntityList, entities = [], chunk = 10;
  for (i = 0,j = entityIds.length; i < j; i += chunk) {
      chunkEntityList = entityIds.slice(i, i + chunk);
      let snapshot = await 
        entityCollection.where(admin.firestore.FieldPath.documentId(), 'in', chunkEntityList).get();
      if(snapshot.docs.length == 0) continue;
      entities = [...entities, ...parseDocs(snapshot.docs)];
  }
  return entities;
}

// ranking entities logic wise i.e topscore/random/manual
async function rankEntities(rankingLogic, entities){
  if(rankingLogic === "topscore")
    return sortEntitiesByViews(entities)
  
  return entities;
}

function parseDocs(docs){
  let entities = [];
  docs.forEach(document =>  {
    let [id, data] = [document.id, document.data()];
    entities.push({id, ...data});
  });
  return entities;
}

async function rankAndUploadData({page, documentId, rankingLogic, modulePosition, entityList = []}){
  try {
    if(entityList.length > 0){
      const rankedEntities = await rankEntities(rankingLogic, entityList);
      const moduleReference = modulesCollection.doc(documentId);
      const pageDocument = pageCollection.doc(page);
      await moduleReference.update({
        "entities": rankedEntities
      }, {merge: true})
      // await pageDocument.update({
      //   [`modules.${documentId}`]: modulePosition
      // }, {merge: true})
    }
  } catch (error) {
    console.log(error)
  }
}

// exports.createReadyMadeResponse = async (message, context) => {
exports.createReadyMadeResponse = async (req, res) => {
    try {
      // const data = message.data ? Buffer.from(message.data, 'base64').toString(): [];
      const moduleIds = JSON.parse("[\"Xn8rdb2zGpxjfM9PFQ1b\",\"dVCS4QkHv7qpS4RaRSUM\"]");
      moduleIds.forEach(async documentId => {

          let entityList = [];
          let moduleReference = await modulesCollection.doc(documentId);
          let moduleData = await moduleReference.get();
          let {
            position, 
            entityRankingLogic, 
            entitySelectionLogic, 
            tags, 
            page,
            selectedEntityIds 
          } = moduleData.data();

          let option = {
            page: page,
            documentId: documentId,
            rankingLogic: entityRankingLogic,
            modulePosition: position,
          }

          //run if admin set entitySelectionLogin to tagcombination
          if(entitySelectionLogic === "tagcombination"){
            if(tags && tags.length > 0){
              entityList = await getEntitiesByTags(tags)
              rankAndUploadData(Object.assign({...option}, {entityList: entityList}));
            }
          }
          else if (entitySelectionLogic == "manual"){
            if(selectedEntityIds && selectedEntityIds.length > 0){
              entityList = await getEntitiesById(selectedEntityIds);
              rankAndUploadData(Object.assign({...option}, {entityList: entityList}));
            }
          }
      });

      const homePageReference = pageCollection.doc("home");
      const homeModules = await modulesCollection.where('page', '==', 'home').get();
      const modules = parseDocs(homeModules.docs);
      const sortedModules = sortModulesByPostion(modules);
      await homePageReference.update({
        modules: sortedModules
      })
    } catch (error) {
      console.log(error)
    }
};