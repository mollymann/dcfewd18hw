//wait for the DOM elements to load before executing
$(document).ready(function() {

  // Create a function that runs whenever the submit button is clicked
    function iHaveBeenClicked(){
        //prevent the submit button from refreshing the page
        event.preventDefault();

        //get the value of the #mood input and correct for capitalization
        var moodvalue = jQuery('#mood').val();


        moodvalue = moodvalue.toLowerCase().trim();

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        if(moodvalue == "ecstatic" || moodvalue == "excited" || moodvalue == "fantastic"){
            $('.moodring div').attr('class','excited');
        }


        // if the user inputs happy/good/great change the CSS class to 'happy'

        // if the user inputs bad/angry change the CSS class to 'bad'
    }

    jQuery('#submit-btn').click(iHaveBeenClicked);

});