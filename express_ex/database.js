var sqlite3 = require('sqlite3').verbose() //npm install sqlite3

//Creating a new database instance - Indication of connected database
//Before peforming any operations to database, make sure database is connected.
let db = new sqlite3.Database('./activitydb1.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
	  // Cannot open database
	  console.error(err.message)
	  throw err
	}else{
		//Successful database connection
		console.log('Connected to the SQLite database.') 
	}
});



//Get Artist and Album
let getUsers = (res) =>{
	//var getArtistAndAlbumSQL = 'SELECT ?,?,?,?,? FROM Album INNER JOIN artist ON Album.album_artistID = Artist.artistID';
	var getUserSQL = 'SELECT lname, fname, city, age, salary FROM user';
	

	db.all(getUserSQL, (err, rows) => {
		if (err) {
		 
		  throw err;
		}
		//res.render('home', { title: "Routing in Action!", aName: "Claire", aNameAgain: "Brianna", lastname: rows[0].lname})
		console.log(rows[4].fname);

		/*for(var i = 0; i < rows.length; i++){
			console.log(rows[i].fname);
		}*/
		rows.forEach((row) => {
		  console.log(row);
		})
	});
}

getUsers();



//Export functions to be used in other areas of program.
module.exports = {getUsers};