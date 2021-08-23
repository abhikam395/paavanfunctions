const {videos} = require('./videos');

exports.recommendations = function(req, res){
    let {v} = req.query;

    res.status(200).json({
        status: true,
        data: videos(v)
    });
}