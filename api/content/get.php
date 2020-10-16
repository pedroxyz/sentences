<?php 

	error_reporting(0);
	include_once ('../database/connection.php');

	$curso = $_POST['curso'];

	$sql = "SELECT
				course,
				unit,
				exercise,
				phrase,
				answer1,
				answer2,
				answer3,
				answer4,
				correct,
				version,
				image
			FROM sentences
			WHERE course = '$curso'
			ORDER BY RAND()
			LIMIT 10";

	$getData = mysqli_query( $conn, $sql );

	if( mysqli_num_rows($getData) > 0 ){

		$result = array();

		while( $row = mysqli_fetch_assoc( $getData ) ){

			array_push(
				$result, 
				array(
						'curso'			=> $row['course'],
						'unidad'		=> $row['unit'],
						'ejercicio'		=> $row['exercise'],
						'frase'			=> utf8_encode($row['phrase']),
						'respuesta1'	=> utf8_encode($row['answer1']),
						'respuesta2'	=> utf8_encode($row['answer2']),
						'respuesta3'	=> utf8_encode($row['answer3']),
						'respuesta4'	=> utf8_encode($row['answer4']),
						'correcta'		=> utf8_encode($row['correct']),
						'version'		=> $row['version'],
						'imagen'		=> $row['image']
				)
			);

		}

		mysqli_close($conn);
		echo json_encode($result);

	} else {

		$result = array(
			'message' => 'error'
		);

		mysqli_close($conn);
		echo json_encode($result);

	}

?>