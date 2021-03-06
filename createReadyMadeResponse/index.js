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
  let snapshot = await entityCollection.limit(10).where('tags', 'array-contains-any', tags).get();
  if(snapshot.docs.length == 0) return [];
  return parseDocs(snapshot.docs);
}

async function getEntitiesById(entityIds = []){
  console.log(entityIds.length)
  // var i,j, chunkEntityList, entities = [], chunk = 10;
  // for (i = 0,j = entityIds.length; i < j; i += chunk) {
  //     chunkEntityList = entityIds.slice(i, i + chunk);
      let snapshot = await 
        entityCollection.where(admin.firestore.FieldPath.documentId(), 'in', entityIds).get();
      // if(snapshot.docs.length == 0) continue;
      let entities = filterEntities(snapshot.docs);
      return entities;
  // }
  // return entities;
}

// ranking entities logic wise i.e topscore/random/manual
async function rankEntities(rankingLogic, entities){
  if(rankingLogic === "topscore")
    return sortEntitiesByViews(entities)
  
  return entities;
}

function parseDocs(docs){
  return docs.map(document =>  {
    let [id, data] = [document.id, document.data()];
    return {id, ...data};
  });
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

function filterModules(docs){
  return docs.map(document =>  {
    let [id, data] = [document.id, document.data()];
    delete data.position;
    delete data.page;
    delete data.selectedEntityIds;
    delete data.tags;
    delete data.entityRankingLogic;
    delete data.entitySelectionLogic;
    return {id, ...data};
  });
}

async function rankAndUploadData({documentId, rankingLogic, entityList = []}){
  try {
    if(entityList.length > 0){
      const rankedEntities = await rankEntities(rankingLogic, entityList);
      const moduleReference = modulesCollection.doc(documentId);
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
              entityList = await getEntitiesById(selectedEntityIds.slice(0, 10));
              rankAndUploadData(Object.assign({...option}, {entityList: entityList}));
            }
          }
      });

      const homePageReference = pageCollection.doc("home");
      const homeModules = await modulesCollection.where('page', '==', 'home').get();
      const modules = filterModules(homeModules.docs);
      const sortedModules = sortModulesByPostion(modules);
      await homePageReference.set({
        modules: sortedModules
      }, {merge: true})
    } catch (error) {
      console.log(error)
    }
};