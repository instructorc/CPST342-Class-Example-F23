const express = require('express')
const app = express()
const port = 3000


/**To serve static files such as images, CSS files, and JavaScript files, create a folders
* and include the below statement.  The below statement assumes that I have a folder named assets
**/
app.use(express.static('assets'))

// view engine setup -> We'll use handlebars.js as our templating engine
app.set('view engine', 'html');
// allows our application to use .html extension | *Create a views folder and add your HTML documents
app.engine('html', require('hbs').__express);

// parse application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



app.get('/', function (req, res) {
    
    res.render('home', { title: "Routing in Action!", aName: "Claire", aNameAgain: "Brianna"})
    
})

app.get('/users/:id', function (req, res) {
	//Getting id parameter
	var id = req.params.id;
    var user_name = req.params.username;
    console.log("Name: " + user_name + " ID: " + id);
	console.log("Sent as a get request");
	res.render('home', { title: "Routing in Action!", user_id : id})
})

app.get('/contact', function (req, res) {

	res.render( 'contact', {title : "Contact Page"})
 })

 app.post('/submit', function (req, res) {
	//Getting body parameters
	var data = req.body;
	var firstName = data.fname;
	var lastName = data.lname;
	var id = data.id;

	console.log("Sent as a post request");
	console.log(firstName + " " + lastName + " " + id );
	res.render( 'contact', {title : "Contact Page"})
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))