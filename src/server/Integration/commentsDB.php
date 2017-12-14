<?php
namespace CommentsDB;

class commentsDB{

	private $conn;

	public function __construct()
    {
        $this->conn = mysqli_connect("localhost", "root","root","commentsection");

	    if(!$this->conn){
			die("Connection failed: ".mysql_connect_error());
		}

    }

	function setComments($recipesite, $uid, $date, $message){

			$sql = "INSERT INTO commentsnew (uid, date, message, site) 
			VALUES ('$uid', '$date', '$message','$recipesite')";
			$result = mysqli_query($this->conn,$sql);
	}

	function getComments($recipesite){
		$sql = "SELECT * FROM commentsnew";
		$result = $this->conn->query($sql);
		if (!$result) {
  			printf("Query failed: %s\n", $mysqli->error);
  			exit;
		}     
		$rows = [];
		while($row = $result->fetch_assoc()) {
			if($row['site'] === $recipesite) {
  				$rows[]=$row;
  			}
		}
		return $rows;
	}

	function deleteComment($cId) {
		$sql = "DELETE FROM commentsnew WHERE cid='$cId'";
		$delResult = $this->conn->query($sql);
		return $delResult;
	}
}