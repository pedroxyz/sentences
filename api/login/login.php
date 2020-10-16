<?php 

	error_reporting(0);

	$user = $_POST['user'];
	$password = $_POST['password'];

	$isRegisteredResponse = array( 'isRegistered' => 'false' );
	$currentCourse = array( 'currentCourse' => '100' );
	$response = array();

	if( $user == 'quizz@quizz.com' && $password == 'quizz'){
		$isRegisteredResponse = array( 'isRegistered' => 'true' );
		$currentCourse = array( 'currentCourse' => '124' );
	}

	$response = array( 
					'isRegistered' => $isRegisteredResponse['isRegistered'],
					'currentCourse' => $currentCourse['currentCourse']
					);

	echo json_encode($response);

?>