$('#search').keyup(function(){
var search =$('#search').val();
$.ajax({
	url:'search.php'
	data:'usearch='+s,
	success:function(data){
		$('#foodback')html(data);
	}
})
});