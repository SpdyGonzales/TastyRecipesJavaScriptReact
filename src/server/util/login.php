<?php
error_reporting(-1);
ini_set('display_errors', 'On');
session_start();

header('Content-Type: application/json');

include ($_SERVER['DOCUMENT_ROOT'].'/tastyrecipes/src/server/controller/controller.php');
use ContrHandler\Controller as logContr;

$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST["uid"]) && isset($_POST['pwd'])) {
$uid = $_POST['uid'];
$pwd = $_POST['pwd'];

$contr = new logContr();
$result = $contr->getUser($uid, $pwd);

if($result === false){
	header("Status: 404 Not Found");	
	echo json_encode("Your username or password is incorrect");
}else{
	$userInfo = [
	'id' => $_SESSION['id'],
	'first' => $_SESSION['first'],
	'uid' => $_SESSION['uid']
	];
	echo json_encode($userInfo);
	};
} else {
	echo 'please provide login information';
}
?>