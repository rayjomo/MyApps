// JavaScript Document
 var id = getUrlVars()["id"];
$('#picture').live('pageshow', function(event) {
	
	var db = openDatabase('dishes', '1.0', 'Test DB', 2 * 1024 * 1024);
	db.transaction(function (tx) {
	tx.executeSql('SELECT * FROM dishdetails where id ="'+ id+ '"', [], function (tx, results) {
	var len = results.rows.length, i;
	for (i = 0; i < len; i++){
	var employee = results.rows.item(i);
    $('#ResponseDiv').html('<center><img src="dishes/'+employee.id+'.jpg"/></center>');
	       
    
   }
 }, null);

});
 
});
	 
	  
 var html = "";
html += "<div data-role=header data-position=fixed data-theme=c>";
html += "<h1>Picture</h1>";
html +=   "<div data-role=navbar>";
html +=   "<ul>";
html +=   "<li><a href=picture.html?id="+id+" class=ui-btn-active data-ajax=false>Picture</a></li>";
html +=   "<li><a href=ingredients.html?id="+id+" data-ajax=false>Ingredients</a></li>";
html +=   "<li><a href=steps.html?id="+id+" data-ajax=false>Steps</a></li>";
html +=   "</ul>";
html +=   "</div>";
html += "</div>";

$("#picture").append (html);		
	
	
	function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
