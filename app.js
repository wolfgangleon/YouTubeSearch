$(document).ready(function(){


	$(function() {

		$('#search-video').submit(function(event){

			event.preventDefault();
			$('a').remove();

			var searchTerm = $('#search').val()


			if ( searchTerm == '') {
				alert('Type the title of the video'); // checks for empty input 
				return null
			};	

			getRequest(searchTerm);

			function getRequest(searchTerm){

				var params = { 
					key:'AIzaSyBOPXOEFW_ODQai0-_r1Q_Wn8GMRNB3kUg',
					part:'snippet',
					q: searchTerm
					},

					url = 'https://www.googleapis.com/youtube/v3/search';
					
				$.get(url, params, function(data){
					showResults(data.items);
				},'json');
			}

			function showResults(results){ // showing listed video and clicking to its youtube link

				$.each(results, function(i,search){
					$('#search-list').append('<li class="search-item"><a href="https://www.youtube.com/watch?v='+ search.id.videoId +'"><img class="thumbnails" src="'+ search.snippet.thumbnails.medium.url +'"><p>'+ search.snippet.title +'</p></a></li>')
				});
			}

		});

	});

});