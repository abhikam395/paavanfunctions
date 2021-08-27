const { database } = require('./firebaseDb');

const CATEGORIES = "Categories";
const GODS = "Your favorite gods";
const VIDEOS = "Videos";
const CHANNELS = "Channels"

const THREE_COLUMN_LAYOUT = "THREE_COLUMN_LAYOUT";
const TWO_COLUMN_LAYOUT = "TWO_COLUMN_LAYOUT";
const HORIZONTAL_LAYOUT = "HORIZONTAL_LAYOUT";

const modulesCollection = database.collection("modules");
const homePage = database.collection("pages").doc("home");
const entityCollection = database.collection("entities");

exports.createReadyMadeResponse = async (message, context) => {
// exports.createReadyMadeResponse = async (req, res) => {
    try {
      // console.log(message.data)
      const data = message.data ? Buffer.from(message.data, 'base64').toString(): [];
      const moduleIds = JSON.parse(data);
      moduleIds.forEach(async id => {
        console.log(id)
          const moduleRef = await modulesCollection.doc(id);
          const moduleData = await moduleRef.get();
          const {position, viewAllEnable, entityRankingLogic, entitySelectionLogic, tagCombination} = moduleData.data();

          //run if admin set entitySelectionLogin to tagcombination
          if(entitySelectionLogic === "tagcombination"){
            tagCombination.forEach(async combination => {

              let entities, docs;
              const parseCombination = JSON.parse(combination);
              //if combination have only one tag
              if (parseCombination.length == 1){
                entities = await entityCollection
                  .where(`tags.${parseCombination[0]}`, "==", true).get();
              }
              //if combination have two tags
              else if (parseCombination.length == 2){
                entities = await entityCollection
                  .where(`tags.${parseCombination[0]}`, "==", true)
                  .where(`tags.${parseCombination[1]}`, "==", true).get();
              }
              docs = entities.docs;
              
              if(docs == null || docs.length == 0) return;

              docs.forEach(doc => {
                let [id, data] = [doc.id, doc.data()];
                entityList.push({id, ...data});
              })
              if(entityList.length > 0){
                //change entities of module in modules collection
                await moduleRef.update({
                  "entities": entityList
                })
                //change position of module in home page
                await homePage.update({
                  [`modules.${id}`]: position
                })
              }
            })
          }
        }) 
    } catch (error) {
      console.log(error)
    }
};