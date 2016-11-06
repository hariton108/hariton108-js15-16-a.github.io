$('#query').focus();

function getImages() {

	$("#content").empty();

	var query = $("#query").val();

	var API_KEY = '3641906-bd8c312699f00fe3b3eac5cd0';

	var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+query+"&image_type=photo&orientation=horizontal&per_page=28";

	$.getJSON(URL, function(data) {

		console.log(data);

	    if (parseInt(data.totalHits) > 0)

	        $.each(data.hits, function(i, hit){

	        	$("<img/>").attr("src", hit.previewURL).appendTo("#content"); 
	        });
	    else
	        $("<p>").text('no image found').appendTo("#content");
	});
};

$("#search").click(getImages);

$('#query').on('keydown', function(e) {

    if (e.keyCode === 13) {

    	getImages();
    }
});

$('#query').focus(function() {

	$(this).val('');
});

$("#clear").click(function(){

	$("#content").empty();
});