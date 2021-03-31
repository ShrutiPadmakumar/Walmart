This project facilitates the purchase of groceries by taking references from our Buddies!!

Technologies used for implementation
1) Javascript
2)Jquery
3) HTML
4) Google Maps Javascript API
5) Google Maps Geocoding API
6)Google Maps Places API
7)CloudSponge API for importing contacts

The output Screenshots are placed inside the UI folder

Files and their purpose
1) index.html - 
  It is the home page that is first seen when the customer visits our site. 
  This is built using Jquery and HTML. 
  The js files bootstrap.js and custom.js are used for responsiveness.
  
 2) Login.html:
    It is the login Page that displays the text box for user email and password.
    In this application
    user email : Alice@gmail.com
    password: Alice123
    Built using Jquery, Js and HTML (related js file: login.js)
    
 3) AfterLogin.html:
    This is the personalized home page for the loggen In User
    Has a Button called 'Buy Together', which is the main functionality of this project
    
 4) ImportContacts.html
    This Page occurs when buy together option is clicked.This implements four Functionalities
    i) Import Contact module:
       Import contacts using cloudsponge API
       The email for which this api is configured in '20mz34@psgtech.ac.in'
       Select the contacts you want to import to your site. (related js file: importContacts.js)
      
    ii) Walmart Buddies:
        This module shows your contacts who hav account in Walmart
        Clicking on them leads to viewing the reviews they have provided earlier(This functionality is defined in review.html')
        
    iii)My coupons:
        This toggle displays the no of persons, who have referred you for their product purchase
        It also displays the dollars added to the walmart pay, as a result of the above actions
        
    iv) Buddy Map:
        Clicking on this module leads you to a map, that shows the location where your buddy has made his.her purchase at the walmart store.
        Its functionality is defined in buddyMap.html
        The API's used in this module are
         * Google Maps Javascript API
         * Google Maps Geocoding API
         * Google Maps Places API
    
 
    
  
  
  
