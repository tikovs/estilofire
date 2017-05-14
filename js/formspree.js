$(document).ready(function() {

    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
          $btn = $("button#myButton").button('loading');
        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#comments').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'https://formspree.io/tikovs@gmail.com',
            method:'POST',
            data:{
                Nome:name,
                 Email:email,
                Mensagem:comments
            },
            dataType:"json",
            success:function() {
                $('#mail-message-area').show();
                 $btn.button('reset');
            }   

        });     
        
    });

}); 
