var dish;

$('#home').bind('pageinit', function(event) {
  		var db = openDatabase('PhoneGap_db', '1.0', '', 2 * 1024 * 1024);

db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM dishdetails', [], function (tx, results) {
	$('#dishList li').remove();
   var len = results.rows.length, i;
      for (i = 0; i < len; i++){
	   var dish = results.rows.item(i);
    $('#dishList').append('<li><a href="picture.html?id=' + dish.id + '" data-ajax="false">' +
					'<h4>' + dish.dish_name + '</h4></a></li>');
	  $('#dishList').listview('refresh');
		       
    
   }
 }, null);

});


});

