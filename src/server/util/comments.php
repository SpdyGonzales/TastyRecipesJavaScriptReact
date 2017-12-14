<?php 
error_reporting(-1);
ini_set('display_errors', 'On');
session_start();

header('Content-Type: application/json');

include ($_SERVER['DOCUMENT_ROOT'].'/tastyrecipes/src/server/controller/controller.php');
use ContrHandler\Controller as logContr;

$contr = new logContr();
if(isset($_POST['commentSubmit'])) {
  if($_SESSION['uid']) {
      $uid = $_POST['uid'];
      $date = $_POST['date'];
      $message = $_POST['message'];
      if(ctype_print($message)){
        $contr->setComments($recipesite, $uid, $date, $message);
      }else{
        echo "Your comment can only contain letters and digits";
      }
  } else{
      echo "please log in to comment";
    }
}

if(isset($_GET['recipe'])) {
    $commentList = [];
    $result = $contr->getComments($_GET['recipe']);
    foreach ($result as $row){
        if($_GET['recipe'] == $row['site']){
            array_push($commentList, $row);
        }
    }
    echo json_encode($commentList);
}

?>     