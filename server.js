const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const guru = require('./Routes/guruRoutes');
const siswa = require('./Routes/siswaRoutes');
const mapel = require('./Routes/mapelRoutes');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/mapel", mapel);
app.use("/api/guru", guru);
app.use("/api/siswa", siswa);

require('./Routes/JwtRoutes')(app);

const db = require('./config/db.config.js');

const Role = db.role;
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});
 
//require('./app/route/project.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})


function initial(){
	Role.create({
		id: 1,
		name: "USER"
	});
	
	Role.create({
		id: 2,
		name: "ADMIN"
	});
	
	Role.create({
		id: 3,
		name: "PM"
	});
}