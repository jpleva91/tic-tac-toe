/*	JS LOADED  */
console.log("JS is loaded!");

/*	JQUERY LOADED  */
$(document).ready(function() {
	console.log("Ready to go!");
	/*  GAME RESET  */
	$('#clear-btn').on('click', function(evt) {
		console.log(evt);
		console.log(this);
	});

	/*  GAME PIECES */
	var xPiece;
	var oPiece;

	/*	GAME CONTROLLER  */
	$('#box-1').on('click', function(evt) {
		console.log(evt);
		console.log(this);
	})
	$('#box-2').on('click', function(evt) {
	console.log(evt);
	console.log(this);
	})	
	$('#box-3').on('click', function(evt) {
	console.log(evt);
	console.log(this);
	})
	$('#box-4').on('click', function(evt) {
	console.log(evt);
	console.log(this);
	})	
	$('#box-5').on('click', function(evt) {
	console.log(evt);
	console.log(this);
	})	
	$('#box-6').on('click', function(evt) {
	console.log(evt);
	console.log(this);
	})	
	$('#box-7').on('click', function(evt) {
	console.log(evt);
	console.log(this);
	})	
	$('#box-8').on('click', function(evt) {
	console.log(evt);
	console.log(this);
	})	
	$('#box-9').on('click', function(evt) {
	console.log(evt);
	console.log(this);
	})
});