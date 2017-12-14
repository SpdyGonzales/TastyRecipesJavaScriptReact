<?php 
header('Content-Type: application/json');
$xml=simplexml_load_file("../xml/recipes.xml") or die("Error: Cannot create object");
if(isset($_GET['recipe'])){
    $xmlArray= [];
foreach ($xml->children() as $recipe) {
    if($recipe['name'] == $_GET['recipe']) { 
        array_push($xmlArray, $recipe);
    }
}
// $xml = simplexml_load_string($xml_string);
echo json_encode($xmlArray);
} else {
    echo 'please specify recipe';
}

?>
