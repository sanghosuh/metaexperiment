
// ------ global variable + function ------ 

// create an array with range(1,31)
var idxArray = [];
for (i=1;i<31;i++) {
	idxArray.push(i);
}

// shuffle elements in given array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



// ------ HTML data ------ 

var HTMLprogressIndicator = '<div class="col s12"><h6 id="progress-indicator" class="right-align" style="color:white"></h6></div>';
var HTMLquitButton = '';

var HTMLtranscriptionPanel = `
						<br><br>
							<div class="img-panel active">
								<img src="https://fontmeme.com/permalink/171212/5d6138cf4a3315bb538abfa73f01ffdf.png" alt=""/>
							</div>
							<div class="img-panel">
								<img src="https://fontmeme.com/permalink/171212/57647a79140422407e9b7b385df7d5f6.png" alt="" />
							</div>
							<div class="img-panel"> 
								<img src="https://fontmeme.com/permalink/171212/bc7646af6ed503b46b1e74bbd0353ed7.png" alt=""/>
							</div>
							<div class="img-panel">
								<img src="https://fontmeme.com/permalink/171212/6aa0a9a9a27408b4672fe8dd19e62b55.png" alt="" />
							</div>
							<div class="img-panel"> 
								<img src="https://fontmeme.com/permalink/171212/7e64f3cb8155be1cb9f02c90dfcd236d.png" alt=""/>
							</div>	
							<div class="img-panel"> 
								<img src="https://fontmeme.com/permalink/171212/bb084d177bcbb6451191d226d483f736.png" alt=""/>
							</div>	
						<br><br><br>
						<span class="transcription-mark">Your transcription</span>
						<input type="text" id="transcription-answer" tabindex="1">
`;


var HTMLquestionPanel = `
					  	<p id="metacognitive-question">{{metacognitive-question}}</p>
					    <p>
					      <input name="group1" class="meta-choice" type="radio" id="test1" tabindex="2" /> 
					      <label id="answer1" for="test1">{{answer1}}</label>
					    </p>
					    <p>
					      <input name="group1" class="meta-choice" type="radio" id="test2" tabindex="3" />
					      <label id="answer2" for="test2">{{answer2}}</label>
					    </p>
					    <p>
					      <input name="group1" class="meta-choice" type="radio" id="test3" tabindex="4" />
					      <label id="answer3" for="test3">{{answer3}}</label>
					    </p>
					    <p>
					        <input name="group1" class="meta-choice" type="radio" id="test4" tabindex="5" />
					        <label id="answer4" for="test4">{{answer4}}</label>
					    </p>
					    <p>
					        <input name="group1" class="meta-choice" type="radio" id="test5" tabindex="6" />
					        <label id="answer5" for="test5">{{answer5}}</label>
					    </p>					    
`;

var HTMLnavbar = `
					<!--	<a id="previous-btn" class="waves-effect waves-light btn" tabindex="6">PREVIOUS</a>  -->
						<a id="next-btn" class="waves-effect waves-light btn" tabindex="7">SUBMIT<i class="material-icons right">send</i></a>		
`;

var HTMLtranscriptionImgURLs= ['https://fontmeme.com/permalink/171212/5d6138cf4a3315bb538abfa73f01ffdf.png',
'https://fontmeme.com/permalink/171212/57647a79140422407e9b7b385df7d5f6.png',
'https://fontmeme.com/permalink/171212/bc7646af6ed503b46b1e74bbd0353ed7.png',
'https://fontmeme.com/permalink/171212/6aa0a9a9a27408b4672fe8dd19e62b55.png',
'https://fontmeme.com/permalink/171212/7e64f3cb8155be1cb9f02c90dfcd236d.png',
'https://fontmeme.com/permalink/171212/bb084d177bcbb6451191d226d483f736.png',
'https://fontmeme.com/permalink/171212/ee9bf87bf97977a97ef6761bebdf65c5.png',
'https://fontmeme.com/permalink/171212/54a4ae27481d4a8a4ddae934eec7c617.png',
'https://fontmeme.com/permalink/171212/f9863561fe2c4a2274316608055db909.png',
'https://fontmeme.com/permalink/171212/f62a8843f3a3a227dd38c795611dec16.png'
]

var metacognitiveQuestions = { 
	"questions": 
	[ 
				{ "question":"How confident are you? 1", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 2", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 3", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 4", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 5", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 6", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 7", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 8", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 9", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 10", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 11", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 12", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 13", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 14", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 15", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 16", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 17", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 18", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 19", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 20", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 21", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 22", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 23", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 24", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 25", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 26", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 27", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 28", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 29", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]},

				{ "question":"How confident are you? 30", 
					 "answers":["very confident","confident","somehwat", "not really", "not confident"]}
	]
};
