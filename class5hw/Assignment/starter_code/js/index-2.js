//wait for the DOM elements to load before executing
$(document).ready(function() {

  // Create a function that runs whenever the submit button is clicked
function iHaveBeenClicked(){

    //prevent the submit button from refreshing the page
event.preventDefault();

    //get the value of the #mood input and correct for capitalization
var city = $('#city-type').val();

city = city.toLowerCase().trim();

console.log(city);

    // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
if (city == "new york" || city == "new york city" || city == "nyc"){
	$('body').attr('class','nyc');
}

}

$('#submit-btn').click(iHaveBeenClicked); 


});