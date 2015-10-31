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


//START CODING --  START CODING -- START CODING -- START CODING -- START CODING -- START CODING -- START CODING

$stripChrsA = array("<", ">", "!", "$", "%", "*", "{", "}", "|");
$stripChrsB = array("<", ">", 				 "*",		    "|");

	$stripiName = str_replace($stripChrsA, "", $_REQUEST['iName']);// passed to next line
$iName =  ucwords(strtolower($stripiName));// capitalizing first letter after lowercasing string
$iEmail =  str_replace($stripChrsA, "", $_REQUEST['iEmail']);
$iPhone =  str_replace($stripChrsA, "", $_REQUEST['iPhone']);
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
//require_once(submitionPage.html')
?>
