<?php
namespace UserDB;

class userDB{

	private $conn;

	public function __construct()
    {
        $this->conn = mysqli_connect("localhost", "root","root","tastyaccounts");

	    if(!$this->conn){
			die("Connection failed: ".mysql_connect_error());
		}

    }

	public function fetchUser(string $uid, string $pwd){
		$sql = "SELECT * FROM users WHERE uid ='$uid'";
		$result = $this->conn->query($sql);
		$loginStatus = TRUE;
			if(!$row = mysqli_fetch_assoc($result)){
				$loginStatus = FALSE;
			}else{
				if(password_verify($pwd, $row['pwd'])) {
						$_SESSION['id'] = $row['id'];
						$_SESSION['first'] = $row['first'];
						$_SESSION['uid'] = $row['uid'];

				} else {
					$loginStatus = FALSE;
				} 
			}
		return $loginStatus;
	}
	public function storeUser($first, $last, $uid, $hashedPwd){
		$sql = "INSERT INTO users (first, last, uid, pwd)
		VALUES ('$first','$last','$uid','$hashedPwd')";
		mysqli_query($this->conn,$sql);
	}
}