//wait for the DOM elements to load before executing
$(document).ready(function() {
  //prevent the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
    //get the value of the #mood input and correct for capitalization
    var myMood = $('#mood').val();
    $('#mood').val('');
    myMood = myMood.toLowerCase().trim();

    // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
    if(myMood == 'excited' || myMood == 'ecstatic' || myMood == 'fantastic') {
      $('.moodring > div').attr('class','excited');
    }

    // if the user inputs happy/good/great change the CSS class to 'happy'
    else if (myMood == 'happy' || myMood == 'good' || myMood == 'great') {
      $('.moodring > div').attr('class','happy');
    }

    // if the user inputs bad/angry change the CSS class to 'bad'
    else if (myMood == 'bad' || myMood == 'angry') {
      $('.moodring > div').attr('class','bad');
    }
  });
});