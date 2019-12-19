jQuery(document).ready(function(){

    $('#movies').html('<img src="images/loadingg.jpg">');

   axios.get('https://csc225.mockable.io/movies')   
          .then(function(response)
        {           
           
            console.log(response.data);
            
           
            
            var moviesHTML = response.data.map(function(movie){
                
            return '<p class="movie" data-movie="'+movie.id+'">' + 
                movie.title + '</p>' ;
             
            });
            
            $('#movies').html(moviesHTML);          

        });
        
        $('body').on('click', '.movie', function(){
            var id = $(this).data('movie');
            var url = 'https://csc225.mockable.io/movies/' + id;
            
            axios.get(url).then(function(response){
                var movie = response.data;   
                MovieHTML ='<img src ="'+movie.poster + '">';            
                MovieHTML += '<h1>' + movie.title + '</h1>';                
                MovieHTML += '<h2>' + movie.release + '</h2>';
                MovieHTML += '<h3>' + movie.director + '</h3>';
                
                $('#card').html(MovieHTML);
                
            })

            $('#card').html('<img src="images/loadingg.jpg">');

        });
       
});

