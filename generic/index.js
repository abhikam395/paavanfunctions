const {database} = require('./firebaseDatabase');

exports.generic = async function(req, res){
    try {
        res.json({
            status: true
        })
    } catch (error) {
        res.json({
            status: false
        })
    }
}