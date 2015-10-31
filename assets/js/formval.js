// ---- creating objects in memory for form validation
// ---- this is so the DOM will only haved to be traversed once; means faster code processing
var $IName = $('#exampleInputName');
var $IEmail = $('#exampleInputEmail1');
var $INumber = $('#exampleInputNumber');
var $IMessage = $('#exampleInputMessage');

// ---- chenking when window loads if form.val()s contain values; might happen in a window reload
// ---- setting css to match forms state
$(window).load(function(){
		//alert("checking form");
	if ($IName.val() == ""){
		$IName.siblings().css({"color":"#F96D55"});
		$IName.css({"border":"1px solid #F96D55"});
	} else {
		$IName.siblings().css({"color":"#CCC"});
		$IName.css({"border":"1px solid #CCC"});
	};
	if ($IEmail.val() == ""){
		$IEmail.siblings().css({"color":"#F96D55"});
		$IEmail.css({"border":"1px solid #F96D55"});
	} else {
		$IEmail.siblings().css({"color":"#CCC"});
		$IEmail.css({"border":"1px solid #CCC"});
	};
	if ($INumber.val() == ""){
		$INumber.siblings().css({"color":"#F96D55"});
		$INumber.css({"border":"1px solid #F96D55"});
	} else {
		$INumber.siblings().css({"color":"#CCC"});
		$INumber.css({"border":"1px solid #CCC"});
	};
	if ($IMessage.val() == ""){
		$IMessage.siblings().css({"color":"#F96D55"});
		$IMessage.css({"border":"1px solid #F96D55"});
	} else {
		$IMessage.siblings().css({"color":"#CCC"});
		$IMessage.css({"border":"1px solid #CCC"});
	};
});

// ---- setting form inputs to respond as user enters information
$IName.keyup(function(){
	if ($IName.val() == ""){
		$IName.siblings().css({"color":"#F96D55"});
		$IName.css({"border":"1px solid #F96D55"});
	} else {
		$IName.siblings().css({"color":"#CCC"});
		$IName.css({"border":"1px solid #CCC"});
	};
});
$IEmail.keyup(function(){
	if ($IEmail.val() == ""){
		$IEmail.siblings().css({"color":"#F96D55"});
		$IEmail.css({"border":"1px solid #F96D55"});
	} else {
		$IEmail.siblings().css({"color":"#CCC"});
		$IEmail.css({"border":"1px solid #CCC"});
	};
});
$INumber.keyup(function(){
	if ($INumber.val() == ""){
		$INumber.siblings().css({"color":"#F96D55"});
		$INumber.css({"border":"1px solid #F96D55"});
	} else {
		$INumber.siblings().css({"color":"#CCC"});
		$INumber.css({"border":"1px solid #CCC"});
	};
});
$IMessage.keyup(function(){
	if ($IMessage.val() == ""){
		$IMessage.siblings().css({"color":"#F96D55"});
		$IMessage.css({"border":"1px solid #F96D55"});
	} else {
		$IMessage.siblings().css({"color":"#CCC"});
		$IMessage.css({"border":"1px solid #CCC"});
	};
});

// ---- setting form validation
// ---- all JS to make sure older browsers will respond
$('button[type="submit"]').on('click', function(evt){
		// alert("Submit Clicked");
	// - limiting event to fire only this function
	evt.preventDefault();

	var $form_check = 0;
	if (!$IName.val()){
		$IName.css({"border":"2px solid #F96D55"}).attr( "placeholder", "Michelle Radice" ).val("");
		$IName.siblings().css({"color":"#F96D55"});
		$form_check++;
	} else {
		// -- checking for valid name format; all characters
		var regex = /^[a-z ,-]+$/i;
		if (regex.test($IName.val()) == false){
		$IName.css({"border":"2px solid #F96D55"}).attr( "placeholder", "Michelle Radice" ).val("");
		$IName.siblings().css({"color":"#F96D55"});
		$form_check++;
		};
	};
	if (!$IEmail.val()){
		$IEmail.css({"border":"2px solid #F96D55"}).attr( "placeholder", "michelle@radicelawstl.com" ).val("");
		$IEmail.siblings().css({"color":"#F96D55"});
		$form_check++;
	} else {
		// -- checking for valid email format; characters@characters.characters
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (regex.test($IEmail.val()) == false){
		$IEmail.css({"border":"2px solid #F96D55"}).attr( "placeholder", "michelle@radicelawstl.com" ).val("");
		$IEmail.siblings().css({"color":"#F96D55"});
		$form_check++;
		};
	};
	if (!$INumber.val()){
		$INumber.css({"border":"2px solid #F96D55"}).attr( "placeholder", "(314)241-4505" ).val("");
		$INumber.siblings().css({"color":"#F96D55"});
		$form_check++;
	} else {
		// -- checking for valid phone format; 9+ numbers with/without "()-."
		var regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
		if (regex.test($INumber.val()) == false){
		$INumber.css({"border":"2px solid #F96D55"}).attr( "placeholder", "(314)241-4505" ).val("");
		$INumber.siblings().css({"color":"#F96D55"});
		$form_check++;
		};
	};
	if (!$IMessage.val()){
		$IMessage.css({"border":"2px solid #F96D55"});
		$IMessage.siblings().css({"color":"#F96D55"});
		$form_check++;
	};
		
	if($form_check > 0){
		return false;
		} else {
			$('form[name="contact-form"]').submit();
		};
});
		
	//var form_inputs = "Name: " + $IName + "\nEmail: " + $IEmail + "\nNumber: " + $INumber + "\nMessage: " + $IMessage;
	
	//alert(form_inputs);
