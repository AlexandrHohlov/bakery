// responsiv nav

$('.mobile-btn').click(function(){
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
  $('.bg-black').toggleClass('active');
});

$('.bg-black').click(function(){
  $('.mobile-btn').removeClass('active');
  $('.mobile-menu').removeClass('active');
  $('.bg-black').removeClass('active');    
});




 $(function(){
        // search
       $("button").click(function(event){
            $(".searchBar").animate({
                width: 'toggle'
                }, 500, function() {
                  // animation complete
            });

        });
        // modal window
        $('#submitForm').on('submit', function(e){
            e.preventDefault();

            var n = $(this).find('input[name="name"]').val();
            var c = $(this).find('textarea[name="email"]').val();

            var data = {
                name: n,
                email: c
            };

            console.info(data);

        });

              $('#search').on('submit', function(e){
            e.preventDefault();

            var n = $(this).find('input[name="search__text"]').val();

            var data = {
                name: n
            };

            console.info(data);

        });
         
    });

 // tabs

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
