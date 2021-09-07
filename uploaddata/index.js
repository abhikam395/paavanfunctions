const {firestore} = require('./firebase');
var request = require('request');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();
app.use(cors);

function csvJSON(csv) {
    const lines = csv.split('\n')
    const result = []
    const headers = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {        
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i].split(',')

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
        }
        result.push(obj)
    }
    return result
}

async function upload(data, collection){
    data.forEach(async document => {
        await firestore.collection(collection).doc().set(document);
    })
}

app.post('/', async (req, res) => {
    try {
        let {fileurl, collection} = req.body;
        console.log(collection)
        if(!fileurl) throw 'Fileurl is empty';
        if(!collection) throw 'Collection name is required';

        await request.get(fileurl, async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var dataJson = csvJSON(body);
                await upload(dataJson, collection);
                res.json({
                    status: true,
                    message: 'Data uploaded'
                })
            }
        });
    } catch (error) {
        res.json({
            status: false,
            message: error || 'Something went wrong'
        })
    }
});

exports.uploaddata = functions.https.onRequest(app);

// exports.uploaddata = async function(req, res){
//     res.set('Access-Control-Allow-Origin', "*")
//     res.set('Access-Control-Allow-Methods', 'GET, POST');

//     if (req.method === "OPTIONS") {
//         // stop preflight requests here
//         res.status(204).send('');
//         return;
//     }
//     try {
//         let {fileurl} = req.body;
//         console.log(Object.keys(req.body))
//         if(!fileurl){
//             res.json({
//                 status: true,
//                 message: 'Fileurl is empty'
//             })
//         }

//         await request.get(fileurl, async function (error, response, body) {
//             console.log(body)
//             if (!error && response.statusCode == 200) {
//                 var dataJson = csvJSON(body);
//                 await upload(dataJson);
//                 res.json({
//                     status: true,
//                     message: 'Data uploaded'
//                 })
//             }
//         });
//     } catch (error) {
//         res.json({
//             status: true,
//             message: 'Something went wrong'
//         })
//     }
    
// }