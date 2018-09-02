# robs-cropper
This is a version of fengyuanchen's cropperjs it has an image upload function added and a convert to jpg function 

index3.php
passes the cropped image to upload.php which converts to jpg and moves to uploads/ directory this can be changed by editing uplods.php line 2 

$target_dir = "uploads/";

to compser install use : composer require robert-mill/robs-cropmaster2 dev-master
1 create/open a page where to add the cropperjs application

include files at bottom of page:

 <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.bundle.min.js"></script>
  <script src="dist/cropper.js"></script>
  <script src="src/js/imageCopprJS.js"></script>


not the latest versions of jquery,  and bootstrap- this is for future projects.

example : upload-cropped-image-to-server.html or index3.php

