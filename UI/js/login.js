$(document).ready(function(e){
    $("#login").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
       
        // Checking for blank fields.
        if( email =='Alice@gmail.com' && password =='Alice123'){
            window.location.replace("afterLogin.html");
        } else {
            $('#error').css("text-align:center");
            $('#error').text("Wrong Combination!Try again!");
          
        }
        e.preventDefault();
    })
})