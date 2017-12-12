// Add functions to previous and next buttons

// $("#previous-btn").click(function(){
//     var cur = $('.img-panel').index($('.img-panel.active'));
//     console.log(cur);
//     console.log('prev-btn pressed');
//     if (cur!=0) {
//         $('.img-panel').removeClass('active');
//         $('.img-panel').eq(cur-1).addClass('active');
//         document.getElementById('progress-indicator').innerText = 'Task ' + (cur) + '/30';

//     }
// });

// change metacognitive questions
function changeMetaQuestion(idx) {
    document.getElementById('metacognitive-question').innerText = metacognitiveQuestions['questions'][idx]['question'];
    document.getElementById('answer1').innerText = metacognitiveQuestions['questions'][idx]['answers'][0];
    document.getElementById('answer2').innerText = metacognitiveQuestions['questions'][idx]['answers'][1];
    document.getElementById('answer3').innerText = metacognitiveQuestions['questions'][idx]['answers'][2];
    document.getElementById('answer4').innerText = metacognitiveQuestions['questions'][idx]['answers'][3];
    document.getElementById('answer5').innerText = metacognitiveQuestions['questions'][idx]['answers'][4];
}

// check whether both information were given by user
function validateAllInputs(){
    
    var is_checked = false;
    $('.meta-choice').each(function(){
       is_checked = is_checked || $(this).is(':checked');
    });

    var is_written = false || $('#transcription-answer').val();

    if (is_checked && is_written) {  return true;     }
    else {  return false;    }
}

// empty previous inputs 
function resetInputs() {
    // empty out metacognition panel radio button 
    $('.meta-choice').each(function(){
       if($(this).is(':checked')) {
            this.checked = false;
       };
    });  
    // empty out transcription input field
    document.getElementById('transcription-answer').value = "";
}

// add functionalities to submit button
$("#next-btn").click(function(){

    if(!validateAllInputs()) { 
        alert('please complete both fields')
    }
    else {

        var r = confirm("Do you want to submit it?");

        if (r == true) {
            var cur = $('.img-panel').index($('.img-panel.active'));
            // console.log(cur+1);
            console.log('submit button pressed');
            if (cur!=$('.img-panel').length-1) {
                $('.img-panel').removeClass('active');
                $('.img-panel').eq(cur+1).addClass('active');
                document.getElementById('progress-indicator').innerText = 'Task ' + (cur+2) + '/30';
                changeMetaQuestion(formattedIdxArray[cur+1]);
                // console.log(formattedIdxArray[cur+1]);
                // changeMetaQuestion(formattedIdxArray[cur]);
                resetInputs();
            }
        } 
        else {

        }
    }
});

// add functionality to quit button
$('#quit-btn').click(function(){
     $('#modal1').modal('open');     
});