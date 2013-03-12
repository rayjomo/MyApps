		$(document).ready(function() { 
	 
		var db = openDatabase('PhoneGap_db', '1.0', '', 2 * 1024 * 1024);
		db.transaction(function (tx) {
								 tx.executeSql('CREATE TABLE IF NOT EXISTS dishdetails (id INTEGER PRIMARY KEY AUTOINCREMENT, dish_name VARCHAR(1000), ingredients TEXT(5000), steps TEXT(5000))');
 		 		});
		
				$.ajax({
				type: "GET",
				url: "http://legalpediamobile.honeyfountainconsult.com/fruits/index2.php",
				dataType: "xml",
				success: function(xml) {
					$(xml).find('dishes').each(function(){
						var title = $(this).find('id').text();
						var url = $(this).find('dish_name').text();
							
							var brief = $(this).find('ingredients').text();
							var long = $(this).find('steps').text();
							
							db.transaction(function (tx) {
           tx.executeSql('INSERT INTO dishdetails (id, dish_name, ingredients, steps) VALUES (?, ?, ?, ?)', [title,url,brief,long]);
        });
						
					});
				}
			});
			
			db.transaction(function (look) {
  look.executeSql('SELECT * FROM dishdetails', [], function (look, results) {
	$('#dishList li').remove();
   var len = results.rows.length, i;
      for (i = 0; i < len; i++){
	   var dish = results.rows.item(i);
    $('#dishList').append('<li><a href="dish.html?id=' + dish.id + '" data-ajax="false">' +
					'<h4>' + dish.dish_name + '</h4></a></li>');
	  
    
   }
 }, null);

});

		
		});
	