/*
		Author:biniam Haddish;
		Date:11-10-2015;
		App_name:English Tigrigna Dictionary;
		Technology:nedb db,node webkit,material design,HTML5,Angularjs;
 */
/*-------------------------------------------------------------------------*/
var dataFileUrl='db/Etig.db';
var dicItems  = [];
var Datastore = require('nedb'),wordCollection = new Datastore({ filename: dataFileUrl,autoload: true });
  /*--------------------------------------------------------------------*/
 function getAllIteams(word){
  	wordCollection.find({entry:word},{ entry: 1,definition:1,_id:0},function(err,allWords){
  		//console.log("from nedb "+'\n', JSON.parse(JSON.stringify(allWords[0]).replace("'", "\"")).definition);
  	     var stringf=JSON.parse(JSON.stringify(allWords[0]).replace("'", "\"")).entry;
  	     console.log(stringf.toString());
  	     //dicItems.push(JSON.parse(JSON.stringify(allWords[0]).replace("'", "\"")).definition);
  	    //return stringf; 
  	});
  }
  // end of getAllIteams func.

 getAllIteams('A/a');
 

