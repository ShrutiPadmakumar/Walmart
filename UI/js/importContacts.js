$(document).ready(function(e){
    var matches = [];
   
    $(".reviewButton").click(function(){
    location.href="review.html";
    });
    $("#buddyMap").click(function(){
        location.href="buddyMap.html";
        });
    $("#friends").click(function(){
       var contacts = document.getElementsByTagName('textarea')[0].value;
        var contactArray=contacts.split(",");
        var walmartContacts=' 20mz31@psgtech.ac.in, 20mz04@psgtech.ac.in, 20mz06@psgtech.ac.in, 20mz35@psgtech.ac.in';
        walmartContacts=walmartContacts.split(",");
           
        
            for ( var i = 0; i < contactArray.length; i++ ) {
                for ( var e = 0; e < walmartContacts.length; e++ ) {

                    var c= contactArray[i];
                    var w =walmartContacts[e];
                    if ( c === w ) {
                       
                        matches.push( contactArray[i] );

                    }
                   
                }
            }
            matches= [' 20mz06@psgtech.ac.in',' 20mz35@psgtech.ac.in',' 20mz31@psgtech.ac.in',' 20mz04@psgtech.ac.in']
            var map = { ' 20mz06@psgtech.ac.in': "Priyanka S", ' 20mz35@psgtech.ac.in': "Zina Garcia",' 20mz31@psgtech.ac.in': "Brabhalaxmi R", ' 20mz04@psgtech.ac.in': "Mano Vikashini" }
            var mapImage = { ' 20mz06@psgtech.ac.in': "images/emoji1.jpg", ' 20mz35@psgtech.ac.in': "images/emoji2.jpg",' 20mz31@psgtech.ac.in': "images/emoji4.jpg", ' 20mz04@psgtech.ac.in': "images/emoji5.jpg" }
            var url="review.html"

function get(k){
  return map[k];
}
function getImage(k){
    return mapImage[k];
  }
var i;
$("#DisplayFriends").css("display", "block");
$("#DisplayFriends").append('<br>')
$("#DisplayFriends").append('<br>');
$(".reviewButton").toggle();

            
            
            
      
    });
})