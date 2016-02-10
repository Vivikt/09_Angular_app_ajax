var express = require("express");
var fs = require("fs");
var bp = require("body-parser");
var app = express();
app.use(express.static(__dirname+"/public"));
app.use(bp.json());
app.use(bp.urlencoded());

var heros = null;
app.get("/",function(req,res){
	res.send();
});
app.get("/heros",function(req,res){	
	fs.readFile("public/com/data/heros.json",function(error,data){
		//console.log(data.toString());
		heros = JSON.parse(data.toString());			
		res.json(heros);		
	});
}); 

app.post("/heros",function(req,res){
	heros.heros.push(req.body);
	fs.writeFile("public/com/data/heros.json",JSON.stringify(heros),function(){
		console.log("file updated");
		res.send(heros);
	});
});
app.put("/movies/:id",function(req,res){
	console.log("i got a post " + req.params.id);
	var id = req.params.id;	
	heros.heros[id-1].movieslist.push(req.body);
	heros.heros[id-1].movies = heros.heros[id-1].movieslist.length;
	fs.writeFile("public/com/data/heros.json",JSON.stringify(heros),function(){
		console.log("file updated movies");
		res.json(heros);
	});
});

app.listen(4567);
console.log("server running on 4567");
