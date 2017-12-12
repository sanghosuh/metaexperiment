// Append HTML to body



// Append HTML to transcription panel 
// var imgPanelElement = '<div class="img-panel"><img></div>';
// var firstImgElement = imgPanelElement.replace("img-panel", "img-panel active");
// var firstImgElement = firstImgElement.replace("img","img src=" + HTMLtranscriptionImgURLs[0]);

// for (i=0;i<HTMLtranscriptionImgURLs.length;i++) {
// 	if(i==0){
// 		$('#transcription-panel').append(firstImgElement);
// 	}
// 	else {
// 		$('#transcription-panel').append(imgPanelElement.replace("img","img src=" + HTMLtranscriptionImgURLs[i]));
// 	}
// };


// Append HTML to transcription panel 
$("#transcription-panel").append(HTMLtranscriptionPanel);

// Append HTML to metacognition panel 
$("#metacognition-panel").append(HTMLquestionPanel);

// Append HTML to navigation bar area
$("#navbar").append(HTMLnavbar);