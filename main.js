	// Letters  
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	// Get Array From Letters
	const lettersArr = Array.from(letters)		
	
	// Select Letters Container
	const lettersContaner = document.querySelector('.letters')

	// Generate Letters
	lettersArr.forEach(letter =>{
		// Create Span
		let span = document.createElement('span');
		
		// Create Letter Text Node
		let theLetter = document.createTextNode(letter);
		
		// Append The Letter To Span
		span.append(theLetter);
		// Add Class On Span
		span.className ='letter-box';
		// Append Span To The Letters Container
		lettersContaner.append(span) ;

	});
	
	// Object Of Words + Categories
	const words ={
		programming: ['php','javaScript','go','scala','fortan','r','mysql','python'],
		movies: ['Prestige','Inception','Parasite','Interstellar','Whiplash','Memento','Coco','Up'],
		people: ['Albert Einstein','Hitchcock','Alexander','Cleopatra','Mahatma Ghandi' ],
		countries: ['Syria','Palestine','Yemen','Egypt','Bahrain','Qatar'],
		
	};
	
	// Get Random Property
	let allKeys = Object.keys(words)
	// Random Number Depend On Keys Length		
	let	randomPropNumber = Math.floor(Math.random() * allKeys.length );
	// Category 
	let randomPropName = allKeys[randomPropNumber];
	// Category Words
	let randomPropValue = words[randomPropName];
	
	//Random Number Depend On Keys  
	let randomValueNumber = Math.floor(Math.random() * randomPropValue.length );
	// The Chosen Word
	let randomValueValue = randomPropValue[randomValueNumber];

	// Set Category Info 
	document.querySelector('.container .game-info .category span ').innerHTML = randomPropName;


	let lettersGuessContainer = document.querySelector('.letters-guess');
	
	// Convert Chosen Word To Array 
	let lettersAndSpace = Array.from(randomValueValue)
	
	// Create Span Depened  On Word
	lettersAndSpace.forEach(letter =>{
		
		// Create Element Span
		let emptySpan = document.createElement('span');
		
		// If letter Is Space
		if(letter ===' '){
			// Add class To The Span 
			emptySpan.className = 'has-space';
		}
		// Append Span To The Letters Guess Container
		lettersGuessContainer.appendChild(emptySpan)
	});
	// Select Span
	let guessSpan = document.querySelectorAll('.letters-guess span');

	// Set Wrong Attempts
	let wrongAttempts = 0;
	
	// Select The Draw Element
	let theDraw = document.querySelector('.hangman-draw')
	
	// Handle Clickong On Letters 
	document.addEventListener('click',(e) =>{
			// Set The Status
			let theStatus = false ;
	if(e.target.className === 'letter-box'){

			e.target.classList.add('clicked');

			
			// Get Clicked Letter 
			let theClickedLetter = e.target.innerHTML.toLowerCase();
			
			// The Chosen Word 
			 let  theChosenWord = Array.from(randomValueValue.toLowerCase());

			theChosenWord.forEach((wordLettr , wordindex) =>{
				// If The Clicked Letter Equal To One Of The Chosen Word Letter
				if(theClickedLetter == wordLettr){
					// Set Status To Correct
					theStatus = true;
					
				  // Loop On All Spans
				  guessSpan.forEach((span, spanIndex)=>{
					  if(wordindex === spanIndex){
						  
						  span.innerHTML = wordLettr;
					  }
				  });
				}
			});
			
			// If Letter Is Wrong
			if(theStatus !== true){
				
				// Increase The Wrong Attempts
				wrongAttempts++;
				
				// Add Class Wrong On The Draw Element
				theDraw.classList.add(`wrong-${wrongAttempts}`);
				
				// Play Fall Sound
				document.getElementById('fail').play();
				if(wrongAttempts == 8){
					endGame()

					lettersContaner.classList.add('finished')
				}

			}else{		
			// Play Success Sound
				document.getElementById('success').play();
									
			}
		}
	});

	// End Game Function 
	function endGame(){
		// Create Popup Div
		let div = document.createElement('div');
		// Create text Div
		let divText = document.createTextNode(`Game Over , The Word : ${randomValueValue} `);
		
		// Append Text To Div 
		div.appendChild(divText);
		
		// Add Class On Div
		div.classList.add('popup');
		
		// Append To The Body
		document.body.appendChild(div);
		

	}
	













































