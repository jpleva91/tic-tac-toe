/*	JS LOADED  */
console.log("JS is loaded!");

/* CONSTRUCTORS */

	function $Box(selector) {
		this.selector = selector;
	}

/*	JQUERY LOADED  */
$(document).ready(function() {
	console.log("Ready to go!");

	/*  GAME FUNCTIONS */
	var $xMarker = false;
	var $oMarker = true;
	var $marker;
	var $lastGameState = 0;

	/*  GAME RESET  */
	function $gameReset() {
		$('td').removeClass('x-move');
		$('td').removeClass('o-move');
		$lastGameState = 0;
	}

	$('#clear-btn').on('click', function() {
		$gameReset();
	});

	/* WINNING COMBINATIONS */
	
	// (1,2,3) (4,5,6) (7,8,9)
	// (1,5,9) (1,4,7) (2,5,8)
	// (3,5,7) (3,6,9) 

	

	function $checkWinner() {
		if(
		// x_(1,2,3)
				( $('#box-1').hasClass('x-move') &&
					$('#box-2').hasClass('x-move') &&
					$('#box-3').hasClass('x-move') ) ||
		// o(1,2,3)
				(	$('#box-1').hasClass('o-move') &&
					$('#box-2').hasClass('o-move') &&
					$('#box-3').hasClass('o-move') ) ||
		// x_(4,5,6)
				( $('#box-4').hasClass('x-move') &&
					$('#box-5').hasClass('x-move') &&
					$('#box-6').hasClass('x-move') ) ||
		// o_(4,5,6)
				( $('#box-4').hasClass('o-move') &&
					$('#box-5').hasClass('o-move') &&
					$('#box-6').hasClass('o-move') ) ||
		// x_(7,8,9)
				( $('#box-7').hasClass('x-move') &&
					$('#box-8').hasClass('x-move') &&
					$('#box-9').hasClass('x-move') ) ||
		// o_(7,8,9)
				( $('#box-7').hasClass('o-move') &&
					$('#box-8').hasClass('o-move') &&
					$('#box-9').hasClass('o-move') ) ||
		// x_(1,5,9)
				( $('#box-1').hasClass('x-move') &&
					$('#box-5').hasClass('x-move') &&
					$('#box-9').hasClass('x-move') ) ||
		// o_(1,5,9)
				( $('#box-1').hasClass('o-move') &&
				  $('#box-5').hasClass('o-move') &&
				  $('#box-9').hasClass('o-move') ) ||
		// x_(1,4,7)
				( $('#box-1').hasClass('x-move') &&
					$('#box-4').hasClass('x-move') &&
					$('#box-7').hasClass('x-move') ) ||
		// o_(1,4,7)
				( $('#box-1').hasClass('o-move') &&
					$('#box-4').hasClass('o-move') &&
					$('#box-7').hasClass('o-move') ) ||
		// x_(2,5,8)
				( $('#box-2').hasClass('x-move') &&
					$('#box-5').hasClass('x-move') &&
					$('#box-8').hasClass('x-move') ) ||
		// o_(2,5,8)
				( $('#box-2').hasClass('o-move') &&
					$('#box-5').hasClass('o-move') &&
					$('#box-8').hasClass('o-move') ) ||
		// x_(3,5,7)
				( $('#box-3').hasClass('x-move') &&
					$('#box-5').hasClass('x-move') &&
					$('#box-7').hasClass('x-move') ) ||
		// o_(3,5,7)
				( $('#box-3').hasClass('o-move') &&
					$('#box-5').hasClass('o-move') &&
					$('#box-7').hasClass('o-move') ) ||
		// x_(3,6,9)
				( $('#box-3').hasClass('x-move') &&
					$('#box-6').hasClass('x-move') &&
					$('#box-9').hasClass('x-move') ) ||
		// o_(3,6,9)
				( $('#box-3').hasClass('o-move') &&
					$('#box-6').hasClass('o-move') &&
					$('#box-9').hasClass('o-move') )
			) {
			alert("winner!");
			$gameReset();
		}
	}

	function $updateGameState(){
	if($lastGameState > 8) {
		$lastGameState = 0;
		} else {
			$lastGameState = $lastGameState + 1;
			console.log($lastGameState);
		};
	};

	function $endGame() {
		if($lastGameState > 8){
			alert("Game Over");
			$gameReset();
		}
	}

	function $placeMarker() {
		if($lastGameState % 2 === 0){
			$marker = $xMarker;
			$('h1').text("It is X's turn");
		} else {
			$marker = $oMarker;
			$('h1').text("It is O's turn");
		}
		console.log($marker);
	};

	/*	GAME CONTROLLER  */
	function $clickValidator($this) {
		if($($this).hasClass('x-move') || $($this).hasClass('o-move')) {
			$lastGameState = $lastGameState -1;
			return;
		}	if(!$marker) {
			$($this).toggleClass('o-move');
		} else {
			$($this).toggleClass('x-move');
		}
	};

	$Box.prototype = {
		$updateGameState: function(){

		},
		$endGame: function (){

		},
		$placeMarker: function(){

		},
		$clickValidator: function(){
			console.log(this);
		if($(this.selector).hasClass('x-move') || $(this.selector).hasClass('o-move')) {
			$lastGameState = $lastGameState -1;
			return;
		}	if(!$marker) {
			$(this.selector).toggleClass('o-move');
		} else {
			$(this.selector).toggleClass('x-move');
		}
		},
		$checkWinner: function(){
			
		}
	}

		var clickBoxOne = new $Box("#box-1");
		$()

		var $clickBoxOne = 
		$('#box-1').on('click', function() {
			$updateGameState();
			$endGame();
		 	$placeMarker();
		 	$clickValidator(this);
			$checkWinner();
		});

		var $clickBoxTwo = 
		$('#box-2').on('click', function() {
			$updateGameState();
			$endGame();
			$placeMarker();
			$clickValidator(this);
			$checkWinner();
		});

		var $clickBoxThree =
		$('#box-3').on('click', function() {
			$updateGameState();
			$endGame();
			$placeMarker();
			$clickValidator(this);
			$checkWinner();
		});

		var $clickBoxFour =
		$('#box-4').on('click', function() {
			$updateGameState();
			$endGame();
			$placeMarker();
			$clickValidator(this);
			$checkWinner();
		})	

		var $clickBoxFive = 
		$('#box-5').on('click', function() {
			$updateGameState();
			$endGame();
			$placeMarker();
			$clickValidator(this);
			$checkWinner();
		})	

		var $clickBoxSix = 
		$('#box-6').on('click', function() {
			$updateGameState();
			$endGame();
			$placeMarker();
			$clickValidator(this);
			$checkWinner();
		})	

		var $clickBoxSeven = 
		$('#box-7').on('click', function() {
			$updateGameState();
			$endGame();
			$placeMarker();
			$clickValidator(this);
			$checkWinner();
		})	

		var $clickBoxEight =
		$('#box-8').on('click', function() {
			$updateGameState();
			$endGame();
			$placeMarker();
			$clickValidator(this);
			$checkWinner();
		})	

		var $clickBoxNine = 
		$('#box-9').on('click', function() {
			$updateGameState();
			$endGame();
			$placeMarker();
			$clickValidator(this);
			$checkWinner();
		})

});