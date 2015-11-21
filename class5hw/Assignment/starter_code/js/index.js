$(document).ready(function() {

 // Create a function that runs whenever the submit button is clicked
 function iHaveBeenClicked(){
   //prevent the submit button from refreshing the page
   event.preventDefault();
   //get the value of the #mood input and correct for capitalization
   var city = jQuery('#city-type').val();
   console.log(city)

   city = city.toLowerCase().trim();
   console.log(city)

   //if the user inputs New York/New York City/NYC change the CSS class to "NYC"
   if(city == "new york" || city == "new york city" || city == "nyc")
       $("body").attr('class', 'nyc');

  //if the user inputs San Francisco/SF/Bay Area change the CSS class to "SF"
   if(city == "san francisco" || city == "sf" || city == "bay area")
       $("body").attr('class','sf');

   //if the user inputs Los Angeles/LA/LAX change the CSS class to "LA"
    if(city == "los angeles" || city == "la" || city == "lax")
       $("body").attr('class','la');

   //if the user inputs Austin/ATX change the CSS class to "Austin"
   if(city == "austin" || city == "atx")
       $("body").attr('class','austin');

   //if the user inputs Sydney/SYD change the CSS class to "Sydney"
   if(city == "sydney" || city == "syd")
       $("body").attr('class','sydney');
}

    jQuery('#submit-btn').click(iHaveBeenClicked);

});