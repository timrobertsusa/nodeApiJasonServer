
let express = require('express');
let app = express();
let pieRepo = require('./repos/pieRepo');

let router = express.Router();



router.get('/', function(req,res,next) {
   pieRepo.get(function(data){
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All pies retrieved.",
            "data": data
    });
   }, function(err) {
       next(err);
   });
});
app.use('/api/', router);

var server = app.listen(5000, function (){
    console.log('Node server is running on http://localhost:5000 ...')
})
