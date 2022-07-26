var express = require('express');
//Init app
var app = express();


var data = require('./data');

var cors = require('cors');
app.use(cors());

// for first checking later move to router folder
app.get('/tt',function(req,res)
{	
	res.send(data);
});


//Start the server

const port = process.env.PORT || 5000;
//var port =5000;


if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {        
res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path  
		});
}

app.listen(port,function(){
	console.log('server start on port' + port);
});
