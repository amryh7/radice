
<?php

function auto_mail($mail_array){
	// ---- creating message
	$to = 'amryh7@gmail.com';
	// -- note the comma for multiple recipients
	//$to =  'michelle@radicelawstl.com' . ', ';
	
	// -- subject
	$subject = 'Request for Consultation from : ' . $mail_array['Name'];

	// -- message
	$message = '
		<html>
			<head>			
				<title>Request for Quote</title>				
			</head>
			<body>
				<div>
					<div>
						<h1>Personal Info</h1>
						<div class="form-group">
							<div class="col-xs-6">
							  <h4 style="display: inline">First Name: </h4>
							  '. $mail_array['Name'] .'
							</div>
						</div>					
						<div class="form-group">
							<div class="col-xs-6">
							  <h4 style="display: inline">Email: </h4>
							  '. $mail_array['Email'] .'
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-6">
							  <h4 style="display: inline">Phone: </h4>
							  '. $mail_array['Phone'] .'
							</div>
						</div>
					</div>
						<div class="form-group">
							<div class="col-xs-4">
							  <h4 style="display: inline">Message: </h4>
							  '. $mail_array['Message'] .'
							</div>
						</div>
					</div>
				</div>
				<hr>
			</body>
		</html>';

	// ---- Sending mail 
	
	$hash = md5(uniqid(time()));

    $header = 'From: RadiceLawStl.com <michelle@radicelawstl.com>' . "\r\n";
	$header .= 'Reply-To:' . $mail_array['Name'] . '<' . $mail_array['Email'] . '>' . "\r\n";
	
				// To send HTML mail, the Content-type header must be set
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: multipart/mixed; boundary=\"".$hash."\"\r\n\r\n";
	
				// Additional headers
    $header .= "This is a multi-part message in MIME format.\r\n";
    $header .= "--".$hash."\r\n";
    $header .= "Content-type:text/html; charset=iso-8859-1\r\n";
    $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $header .= $message."\r\n\r\n";
	
	    // $message is already in header
    return mail($to, $subject, "", $header);
}
?>

