
let express = require('express');
let app = express();
let pieRepo = require('./repos/pieRepo');

let router = express.Router();

let pies = pieRepo.get();

router.get('/', function(req,res,next) {
    res.status(200).json({
        "status": 200,
        "statusText": "OK",
        "message": "All pies retrieved.",
        "data": pies
    });
});
app.use('/api/', router);

var server = app.listen(5000, function (){
    console.log('Node server is running on http://localhost:5000 ...')
})
