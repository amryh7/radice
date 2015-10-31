
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
			<body style="margin: 0;">
				<div style="border-top: 5px solid #F55E45;border-bottom: 5px solid #222222; border-radius: 5px;background-color:#FFFFFF; margin: 5px;">
					<div>
						<h1 style="line-height: 2em;background-color: #222222; color: #fff; padding-left: 20px; margin: 0;font-family:Helvetica,Arial,sans-serif">Request for Consultation</h1>
						<div>
							<div style="padding: 20px 0px 20px 20px;">
							  <h2 style="display: inline;">Client Name: </h2><h2 style="display: inline;">
							  '. $mail_array['Name'] .'</h2>
							</div>
						</div>					
						<div>
							<div style="padding: 0px 0px 20px 20px;">
							  <h3 style="display: inline">Email: </h3><h3 style="display: inline;">
							  '. $mail_array['Email'] .'</h3>
							</div>
						</div>
						<div>
							<div style="padding: 0px 0px 20px 20px;">
							  <h3 style="display: inline">Phone: </h3><h3 style="display: inline;">
							  '. $mail_array['Phone'] .'</h3>
							</div>
						</div>
						<div style="border-bottom: 5px solid #F55E45;"">
							<div style="padding: 0px 0px 20px 20px;">
							  <h3 style="display: inline">Message: </h3>
							  '. $mail_array['Message'] .'
							</div>
						</div>
					</div>
				</div>
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

