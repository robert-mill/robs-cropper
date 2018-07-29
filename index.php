<!DOCTYPE html>
<!-- saved from url=(0041)https://fengyuanchen.github.io/cropperjs/ -->
<html lang="en" class="gr__fengyuanchen_github_io"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="JavaScript image cropper.">
    <meta name="author" content="Chen Fengyuan">
    <title>Cropper.js</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    <link  href="./node_modules/cropperjs/dist/cropper.css" rel="stylesheet">
    <link href="css/cropper.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
</head>
<body>
<!--[if lt IE 9]>
<div class="alert alert-warning alert-dismissible fade show m-0 rounded-0" role="alert">
    You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<![endif]-->

<!-- Header -->
<header class="navbar navbar-light navbar-expand-md">
    <div class="container">
        <a class="navbar-brand" href="https://fengyuanchen.github.io/cropperjs/">Cropper.js</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbar-collapse" role="navigation">
            <nav class="nav navbar-nav">
                <a class="nav-link" href="https://github.com/fengyuanchen/cropperjs/blob/master/README.md" data-toggle="tooltip" title="" data-original-title="View the documentation">Docs</a>
                <a class="nav-link" href="https://fengyuanchen.github.io/photo-editor" data-toggle="tooltip" title="" data-original-title="An advanced example of Cropper.js">Photo Editor</a>
                <a class="nav-link" href="https://github.com/fengyuanchen/cropperjs" data-toggle="tooltip" title="" data-original-title="View the GitHub project">GitHub</a>
                <a class="nav-link" href="https://fengyuanchen.github.io/" data-toggle="tooltip" title="" data-original-title="More projects">More</a>
                <a class="nav-link" href="https://chenfengyuan.com/" data-toggle="tooltip" title="" data-original-title="About the author">About</a>
            </nav>
        </div>

    </div></header>

<!-- Jumbotron -->
<div class="jumbotron bg-primary text-white rounded-0">
    <div class="container">
        <div class="row">
            <div class="col-md">
                <h1>Cropper.js <small class="h6">v1.4.1</small></h1>
                <p class="lead">JavaScript image cropper.</p>
            </div>
            <div class="col-md">
                <div class="carbonads">
                    <script id="_carbonads_js" src="./js/carbon.js" async=""></script><div id="carbonads"><span><span class="carbon-wrap"><a href="https://srv.carbonads.net/ads/click/x/GTND42QICVSI4K3UCVSLYKQMCK7DKKJYCEYICZ3JCW7I62Q7CYBD4KQKC6BICKJUCT7IKK3EHJNCLSIZ?segment=placement:fengyuanchengithubio;" class="carbon-img" target="_blank" rel="noopener"><img src="./Cropper.js_files/1530364656-1527799156-white_logo.png" alt="" border="0" height="100" width="130" style="max-width: 130px;"></a><a href="https://srv.carbonads.net/ads/click/x/GTND42QICVSI4K3UCVSLYKQMCK7DKKJYCEYICZ3JCW7I62Q7CYBD4KQKC6BICKJUCT7IKK3EHJNCLSIZ?segment=placement:fengyuanchengithubio;" class="carbon-text" target="_blank" rel="noopener">All the tools your team needs in one place. Slack: Where work happens.</a></span><a href="http://carbonads.net/?utm_source=fengyuanchengithubio&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon" class="carbon-poweredby" target="_blank" rel="noopener">ads via Carbon</a><img src="./Cropper.js_files/cvo.gif" border="0" height="1" width="1" style="display: none;"></span></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Content -->
<div class="container">
    <div class="row">
        <div class="col-md-9">
            <!-- <h3>Demo:</h3> -->
            <div class="img-container">
                <img src="./images/houses.JPG" alt="Picture" class="cropper-hidden">
                <div class="cropper-container cropper-bg" touch-action="none" style="width: 825px; height: 497px;">
                    <div class="cropper-wrap-box"
                        <div class="cropper-canvas" style="width: 825px; height: 464.062px; transform: translateY(16.4688px);">
                            <img src="./images/houses.JPG" class="cropper-hide" style="width: 825px; height: 464.062px; transform: none;">
                        </div>
                    </div>
                    <div class="cropper-drag-box cropper-crop cropper-modal" data-cropper-action="crop"></div>
                    <div class="cropper-crop-box" style="width: 660px; height: 371.25px; transform: translateX(82.5px) translateY(62.875px);">
                        <span class="cropper-view-box"><img src="./images/houses.JPG" style="width: 825px; height: 464.062px; transform: translateX(-82.5px) translateY(-46.4062px);"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face cropper-move" data-cropper-action="all"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>
            </div>
        </div>
        <div class="col-md-3">
            <!-- <h3>Preview:</h3> -->
            <div class="docs-preview clearfix">
                <div class="img-preview preview-lg" style="width: 256px; height: 144px;"><img src="./images/houses.JPG" style="display: block; width: 320px; height: 180px; min-width: 0px !important; min-height: 0px !important; max-width: none !important; max-height: none !important; transform: translateX(-32px) translateY(-18px);"></div>
                <div class="img-preview preview-md" style="width: 128px; height: 72px;"><img src="./images/houses.JPG" style="display: block; width: 160px; height: 90px; min-width: 0px !important; min-height: 0px !important; max-width: none !important; max-height: none !important; transform: translateX(-16px) translateY(-9px);"></div>
                <div class="img-preview preview-sm" style="width: 64px; height: 36px;"><img src="./images/houses.JPG" style="display: block; width: 80px; height: 45px; min-width: 0px !important; min-height: 0px !important; max-width: none !important; max-height: none !important; transform: translateX(-8px) translateY(-4.5px);"></div>
                <div class="img-preview preview-xs" style="width: 32px; height: 18px;"><img src="./images/houses.JPG" style="display: block; width: 40px; height: 22.5px; min-width: 0px !important; min-height: 0px !important; max-width: none !important; max-height: none !important; transform: translateX(-4px) translateY(-2.25px);"></div>
            </div>

            <!-- <h3>Data:</h3> -->
            <!-- <h3>Data:</h3> -->
            <div class="docs-data">
                <div class="input-group input-group-sm">
            <span class="input-group-prepend">
              <label class="input-group-text" for="dataX">X</label>
            </span>
                    <input type="text" class="form-control" id="dataX" placeholder="x">
                    <span class="input-group-append">
              <span class="input-group-text">px</span>
            </span>
                </div>
                <div class="input-group input-group-sm">
            <span class="input-group-prepend">
              <label class="input-group-text" for="dataY">Y</label>
            </span>
                    <input type="text" class="form-control" id="dataY" placeholder="y">
                    <span class="input-group-append">
              <span class="input-group-text">px</span>
            </span>
                </div>
                <div class="input-group input-group-sm">
            <span class="input-group-prepend">
              <label class="input-group-text" for="dataWidth">Width</label>
            </span>
                    <input type="text" class="form-control" id="dataWidth" placeholder="width">
                    <span class="input-group-append">
              <span class="input-group-text">px</span>
            </span>
                </div>
                <div class="input-group input-group-sm">
            <span class="input-group-prepend">
              <label class="input-group-text" for="dataHeight">Height</label>
            </span>
                    <input type="text" class="form-control" id="dataHeight" placeholder="height">
                    <span class="input-group-append">
              <span class="input-group-text">px</span>
            </span>
                </div>
                <div class="input-group input-group-sm">
            <span class="input-group-prepend">
              <label class="input-group-text" for="dataRotate">Rotate</label>
            </span>
                    <input type="text" class="form-control" id="dataRotate" placeholder="rotate">
                    <span class="input-group-append">
              <span class="input-group-text">deg</span>
            </span>
                </div>
                <div class="input-group input-group-sm">
            <span class="input-group-prepend">
              <label class="input-group-text" for="dataScaleX">ScaleX</label>
            </span>
                    <input type="text" class="form-control" id="dataScaleX" placeholder="scaleX">
                </div>
                <div class="input-group input-group-sm">
            <span class="input-group-prepend">
              <label class="input-group-text" for="dataScaleY">ScaleY</label>
            </span>
                    <input type="text" class="form-control" id="dataScaleY" placeholder="scaleY">
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="actions">
        <div class="col-md-9 docs-buttons">
            <!-- <h3>Toolbar:</h3> -->
            <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="move" title="Move">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.setDragMode(&quot;move&quot;)">
              <span class="fa fa-arrows"></span>
            </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="crop" title="Crop">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.setDragMode(&quot;crop&quot;)">
              <span class="fa fa-crop"></span>
            </span>
                </button>
            </div>

            <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="zoom" data-option="0.1" title="Zoom In">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.zoom(0.1)">
              <span class="fa fa-search-plus"></span>
            </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="zoom" data-option="-0.1" title="Zoom Out">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.zoom(-0.1)">
              <span class="fa fa-search-minus"></span>
            </span>
                </button>
            </div>

            <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="move" data-option="-10" data-second-option="0" title="Move Left">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.move(-10, 0)">
              <span class="fa fa-arrow-left"></span>
            </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="move" data-option="10" data-second-option="0" title="Move Right">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.move(10, 0)">
              <span class="fa fa-arrow-right"></span>
            </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="move" data-option="0" data-second-option="-10" title="Move Up">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.move(0, -10)">
              <span class="fa fa-arrow-up"></span>
            </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="move" data-option="0" data-second-option="10" title="Move Down">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.move(0, 10)">
              <span class="fa fa-arrow-down"></span>
            </span>
                </button>
            </div>

            <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="rotate" data-option="-45" title="Rotate Left">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.rotate(-45)">
              <span class="fa fa-rotate-left"></span>
            </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="rotate" data-option="45" title="Rotate Right">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.rotate(45)">
              <span class="fa fa-rotate-right"></span>
            </span>
                </button>
            </div>

            <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="scaleX" data-option="-1" title="Flip Horizontal">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.scaleX(-1)">
              <span class="fa fa-arrows-h"></span>
            </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="scaleY" data-option="-1" title="Flip Vertical">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.scaleY(-1)">
              <span class="fa fa-arrows-v"></span>
            </span>
                </button>
            </div>

            <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="crop" title="Crop">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.crop()">
              <span class="fa fa-check"></span>
            </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="clear" title="Clear">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.clear()">
              <span class="fa fa-remove"></span>
            </span>
                </button>
            </div>

            <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="disable" title="Disable">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.disable()">
              <span class="fa fa-lock"></span>
            </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="enable" title="Enable">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.enable()">
              <span class="fa fa-unlock"></span>
            </span>
                </button>
            </div>

            <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="reset" title="Reset">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.reset()">
              <span class="fa fa-refresh"></span>
            </span>
                </button>
                <label class="btn btn-primary btn-upload" for="inputImage" title="Upload image file">
                    <input type="file" class="sr-only" id="inputImage" name="file" accept="image/*">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="Import image with Blob URLs">
              <span class="fa fa-upload"></span>
            </span>
                </label>
                <button type="button" class="btn btn-primary" data-method="destroy" title="Destroy">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.destroy()">
              <span class="fa fa-power-off"></span>
            </span>
                </button>
            </div>

            <div class="btn-group btn-group-crop">
                <button type="button" class="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;maxWidth&quot;: 4096, &quot;maxHeight&quot;: 4096 }">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.getCroppedCanvas({ maxWidth: 4096, maxHeight: 4096 })">
              Get Cropped Canvas
            </span>
                </button>
                <button type="button" class="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.getCroppedCanvas({ width: 160, height: 90 })">
              160×90
            </span>
                </button>
                <button type="button" class="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">
            <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.getCroppedCanvas({ width: 320, height: 180 })">
              320×180
            </span>
                </button>
            </div>

            <!-- Show the cropped image in modal -->
            <div class="modal fade docs-cropped" id="getCroppedCanvasModal" role="dialog" aria-hidden="true" aria-labelledby="getCroppedCanvasTitle" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="getCroppedCanvasTitle">Cropped</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <a class="btn btn-primary" id="download" href="javascript:void(0);" download="cropped.jpg">Download</a>
                        </div>
                    </div>
                </div>
            </div><!-- /.modal -->

            <button type="button" class="btn btn-secondary" data-method="getData" data-option="" data-target="#putData">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.getData()">
            Get Data
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="setData" data-target="#putData">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.setData(data)">
            Set Data
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="getContainerData" data-option="" data-target="#putData">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.getContainerData()">
            Get Container Data
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="getImageData" data-option="" data-target="#putData">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.getImageData()">
            Get Image Data
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="getCanvasData" data-option="" data-target="#putData">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.getCanvasData()">
            Get Canvas Data
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="setCanvasData" data-target="#putData">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.setCanvasData(data)">
            Set Canvas Data
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="getCropBoxData" data-option="" data-target="#putData">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.getCropBoxData()">
            Get Crop Box Data
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="setCropBoxData" data-target="#putData">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.setCropBoxData(data)">
            Set Crop Box Data
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="moveTo" data-option="0">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.moveTo(0)">
            Move to [0,0]
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="zoomTo" data-option="1">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.zoomTo(1)">
            Zoom to 100%
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="rotateTo" data-option="180">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.rotateTo(180)">
            Rotate 180°
          </span>
            </button>
            <button type="button" class="btn btn-secondary" data-method="scale" data-option="-2" data-second-option="-1">
          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.scale(-2, -1)">
            Scale (-2, -1)
          </span>
            </button>
            <textarea class="form-control" id="putData" rows="1" placeholder="Get data to here or set data with this value"></textarea>

        </div><!-- /.docs-buttons -->

        <div class="col-md-3 docs-toggles">
            <!-- <h3>Toggles:</h3> -->
            <div class="btn-group d-flex flex-nowrap" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" class="sr-only" id="aspectRatio1" name="aspectRatio" value="1.7777777777777777">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 16 / 9">
              16:9
            </span>
                </label>
                <label class="btn btn-primary">
                    <input type="radio" class="sr-only" id="aspectRatio2" name="aspectRatio" value="1.3333333333333333">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 4 / 3">
              4:3
            </span>
                </label>
                <label class="btn btn-primary">
                    <input type="radio" class="sr-only" id="aspectRatio3" name="aspectRatio" value="1">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 1 / 1">
              1:1
            </span>
                </label>
                <label class="btn btn-primary">
                    <input type="radio" class="sr-only" id="aspectRatio4" name="aspectRatio" value="0.6666666666666666">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 2 / 3">
              2:3
            </span>
                </label>
                <label class="btn btn-primary">
                    <input type="radio" class="sr-only" id="aspectRatio5" name="aspectRatio" value="NaN">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: NaN">
              Free
            </span>
                </label>
            </div>

            <div class="btn-group d-flex flex-nowrap" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" class="sr-only" id="viewMode0" name="viewMode" value="0" checked="">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="View Mode 0">
              VM0
            </span>
                </label>
                <label class="btn btn-primary">
                    <input type="radio" class="sr-only" id="viewMode1" name="viewMode" value="1">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="View Mode 1">
              VM1
            </span>
                </label>
                <label class="btn btn-primary">
                    <input type="radio" class="sr-only" id="viewMode2" name="viewMode" value="2">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="View Mode 2">
              VM2
            </span>
                </label>
                <label class="btn btn-primary">
                    <input type="radio" class="sr-only" id="viewMode3" name="viewMode" value="3">
                    <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="View Mode 3">
              VM3
            </span>
                </label>
            </div>

            <div class="dropdown dropup docs-options">
                <button type="button" class="btn btn-primary btn-block dropdown-toggle" id="toggleOptions" data-toggle="dropdown" aria-expanded="true">
                    Toggle Options
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="toggleOptions">
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="responsive" type="checkbox" name="responsive" checked="">
                            <label class="form-check-label" for="responsive">responsive</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="restore" type="checkbox" name="restore" checked="">
                            <label class="form-check-label" for="restore">restore</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="checkCrossOrigin" type="checkbox" name="checkCrossOrigin" checked="">
                            <label class="form-check-label" for="checkCrossOrigin">checkCrossOrigin</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="checkOrientation" type="checkbox" name="checkOrientation" checked="">
                            <label class="form-check-label" for="checkOrientation">checkOrientation</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="modal" type="checkbox" name="modal" checked="">
                            <label class="form-check-label" for="modal">modal</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="guides" type="checkbox" name="guides" checked="">
                            <label class="form-check-label" for="guides">guides</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="center" type="checkbox" name="center" checked="">
                            <label class="form-check-label" for="center">center</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="highlight" type="checkbox" name="highlight" checked="">
                            <label class="form-check-label" for="highlight">highlight</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="background" type="checkbox" name="background" checked="">
                            <label class="form-check-label" for="background">background</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="autoCrop" type="checkbox" name="autoCrop" checked="">
                            <label class="form-check-label" for="autoCrop">autoCrop</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="movable" type="checkbox" name="movable" checked="">
                            <label class="form-check-label" for="movable">movable</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="rotatable" type="checkbox" name="rotatable" checked="">
                            <label class="form-check-label" for="rotatable">rotatable</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="scalable" type="checkbox" name="scalable" checked="">
                            <label class="form-check-label" for="scalable">scalable</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="zoomable" type="checkbox" name="zoomable" checked="">
                            <label class="form-check-label" for="zoomable">zoomable</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="zoomOnTouch" type="checkbox" name="zoomOnTouch" checked="">
                            <label class="form-check-label" for="zoomOnTouch">zoomOnTouch</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="zoomOnWheel" type="checkbox" name="zoomOnWheel" checked="">
                            <label class="form-check-label" for="zoomOnWheel">zoomOnWheel</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="cropBoxMovable" type="checkbox" name="cropBoxMovable" checked="">
                            <label class="form-check-label" for="cropBoxMovable">cropBoxMovable</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="cropBoxResizable" type="checkbox" name="cropBoxResizable" checked="">
                            <label class="form-check-label" for="cropBoxResizable">cropBoxResizable</label>
                        </div>
                    </li>
                    <li class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input" id="toggleDragModeOnDblclick" type="checkbox" name="toggleDragModeOnDblclick" checked="">
                            <label class="form-check-label" for="toggleDragModeOnDblclick">toggleDragModeOnDblclick</label>
                        </div>
                    </li>
                </ul>
            </div><!-- /.dropdown -->

            <a class="btn btn-success btn-block" data-toggle="tooltip" href="https://fengyuanchen.github.io/photo-editor" title="" data-original-title="An advanced example of Cropper.js">Photo Editor</a>

        </div><!-- /.docs-toggles -->
    </div>
</div>
<form id="imageupload" action="upload.php" method="post" enctype="multipart/form-data" style="display: none;">
    <input type="file" name="fileToUpload" id="fileToUpload" value="">
    <input type="submit" value="Upload Image" name="submit">
</form>
<!-- Footer -->
<footer class="footer">
    <div class="container">

    </div>
</footer>

<!-- Scripts -->
<script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>


<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>

<script src="./node_modules/cropperjs/dist/cropper.js"></script><!-- Cropper.js is required -->
<script src="js/canvas-to-blob.js" ></script>
<script src="js/common.js"></script>
<script src="./node_modules/jquery-cropper/dist/jquery-cropper.js"></script>
<script src="js/main.js"></script>
<script>
    $("#fileToUpload").on("change", function(){
        alert();
        $("#imageupload").submit();
    });
    $(function(){
        $("#download").on("click", function(){
            var $base64_string = $(this).attr("href");
            $output_file  = 'testfile';
            //var data = {croppedImage: href};

            $("#fileToUpload").val($base64_string);



            });

        });

</script>

</body></html>