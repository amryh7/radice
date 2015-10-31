<?php
//START TESTING --  START TESTING --  START TESTING --  START TESTING --  START TESTING --  START TESTING --  START TESTING --  START TESTING --  START TESTING --  START TESTING --  START TESTING --  
	// writing starter test for connection and http passing
// echo "script connected". "<hr>";
// echo '$_SERVER: <br>'; print_r($_SERVER);  echo '<hr>';
// echo '$_REQUEST: <br>'; print_r($_REQUEST);  echo '<hr>';
// echo '$_POST: <br>'; print_r($_POST);  echo '<hr>';
// echo '$_GET: <br>'; print_r($_GET);  echo '<hr>';
// echo '$_FILES: <br>'; print_r($_FILES);  echo '<hr>';

//END TESTING --  END TESTING --  END TESTING --  END TESTING --  END TESTING --  END TESTING --  END TESTING --
//START FUNCTIONS -- START FUNCTIONS -- START FUNCTIONS -- START FUNCTIONS -- START FUNCTIONS -- START FUNCTIONS -- 
function formatPhone($number){
	$num_ray = str_split($number);
	if(count($num_ray) == 10){
		$fnum = "(".$num_ray[0].$num_ray[1].$num_ray[2].")".$num_ray[3].$num_ray[4].$num_ray[5]."-".$num_ray[6].$num_ray[7].$num_ray[8].$num_ray[9];
		return $fnum;
	} else if(count($num_ray) == 11 && $num_ray[0] == 1){
		$fnum = $num_ray[0]."(".$num_ray[1].$num_ray[2].$num_ray[3].")".$num_ray[4].$num_ray[5].$num_ray[6]."-".$num_ray[7].$num_ray[8].$num_ray[9].$num_ray[10];
		return $fnum;
	} else {
		$fnum = "? ";
		for($i = 0; $i < count($num_ray); $i++){
			$fnum .= $num_ray[$i];
		}
		return $fnum;
	};
};
//END FUNCTIONS -- END FUNCTIONS -- END FUNCTIONS -- END FUNCTIONS -- END FUNCTIONS -- END FUNCTIONS -- 
//START CODING --  START CODING -- START CODING -- START CODING -- START CODING -- START CODING -- START CODING

$stripChrsA = array("<", ">", "!", "$", "%", "*", "{", "}", "|");
$stripChrsB = array("<", ">", 				 "*",		    "|");

	$stripiName = str_replace($stripChrsA, "", $_REQUEST['iName']);// passed to next line
$iName =  ucwords(strtolower($stripiName));// capitalizing first letter after lowercasing string
$iEmail =  str_replace($stripChrsA, "", $_REQUEST['iEmail']);
	$stripiPhone =  str_replace($stripChrsA, "", $_REQUEST['iPhone']);
$iPhone = formatPhone($stripiPhone);
	$stripiPhone =  preg_replace("[\D]", "", $_REQUEST['iPhone']);
$iPhone = formatPhone($stripiPhone);
	$stripcontact_message =  str_replace($stripChrsB, "", $_REQUEST['contact_message']);
	$stripcontact_message = str_replace("!", ".", $_REQUEST['contact_message']);// passed to next line
	$stripcontact_message = str_replace("{", "(", $stripcontact_message);// passed to next line
	$stripcontact_message = str_replace("}", ")", $stripcontact_message);// passed to next line
$contact_message =  ucfirst(strtolower($stripcontact_message));// capitalizing first letter after lowercasing string

$mail_array = [
	"Name" =>  $iName,
	"Email" =>  $iEmail,
	"Phone" =>  $iPhone,
	"Message" =>  $contact_message,
];

// echo '<hr>' . $iName . '<br>' . $iEmail. '<br>' . $iPhone. '<br>' . $contact_message;
 
require_once('auto-mail.php');
auto_mail($mail_array);

$forwardURL = 'http://www.anthonyroy.info/VWS/radice/thankyou.html';
//$forwardURL = 'http://www.radicelawstl.com/thankyou.html';
header('Location: ' .  $forwardURL);
die();
?>
