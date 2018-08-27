<?php
/**
 * Created by PhpStorm.
 * User: rmill_000
 * Date: 27/08/2018
 * Time: 11:58
 */

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["avatar"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
echo 'start';

    echo 'top';
    $check = getimagesize($_FILES["avatar"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        if (move_uploaded_file($_FILES["avatar"]["tmp_name"], $target_file)) {
            img2jpg($target_file);
            echo "The file ". basename( $_FILES["avatar"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }



    function img2jpg($filePath){
        $image = imagecreatefrompng($filePath);
        $bg = imagecreatetruecolor(imagesx($image), imagesy($image));
        imagefill($bg, 0, 0, imagecolorallocate($bg, 255, 255, 255));
        imagealphablending($bg, TRUE);
        imagecopy($bg, $image, 0, 0, 0, 0, imagesx($image), imagesy($image));
        imagedestroy($image);
        $quality = 100; // 0 = worst / smaller file, 100 = better / bigger file
        $new_image = imagejpeg($bg, $filePath . ".jpg", $quality);
        imagedestroy($bg);
        return $new_image;
    }
