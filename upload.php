<?php
$output_dir = "uploads/";
if(isset($_FILES["myfile"]))
{
	$ret = array();

	$error =$_FILES["myfile"]["error"];

    $path = $output_dir . $_POST['email'] .'/';

    if(!file_exists($path)) {
        mkdir($path, 0744);
    } else {
        //header('HTTP/1.0 403 Exists email', true, 500);
        //die(json_encode(array('error'=>'Участник с таким E-mail уже зарегистрирован')));
    }

    if (!is_writable($path)) {
        header('HTTP/1.0 500 Upload catalog is not writeble', true, 500);
        die(json_encode(array('error'=>'Каталог не имеет прав на запись')));
    }

	//You need to handle  both cases
	//If Any browser does not support serializing of multiple files using FormData() 
	if(!is_array($_FILES["myfile"]["name"])) //single file
	{
 	 	$fileName = time() . '_' . $_FILES["myfile"]["name"];
 		move_uploaded_file($_FILES["myfile"]["tmp_name"], $path . $fileName);
    	$ret[]= $fileName;
	}
	else  //Multiple files, file[]
	{
	  $fileCount = count($_FILES["myfile"]["name"]);
	  for($i=0; $i < $fileCount; $i++)
	  {
	  	$fileName = time() . '_' . $_FILES["myfile"]["name"][$i];
		move_uploaded_file($_FILES["myfile"]["tmp_name"][$i], $path . $fileName);
	  	$ret[]= $fileName;
	  }
	
	}

    $author_txt = implode(PHP_EOL, $_POST);

    file_put_contents($path . 'author.txt', $author_txt);
    echo json_encode($ret);
 }