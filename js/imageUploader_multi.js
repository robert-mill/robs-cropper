// JavaScript Document
var imageUploader = function(options){
	"use strict";

			var privateOptions  = {
				width:0,
				height:0,
				imgname :"",
				uploadpath:"/",
				Supplier_ID:"",
				Display_Type :"",
				Show_ID:"",
				Item_ID_1:"",
				Item_name_1:"",
				Item_ID_2:"",
				Item_name_2:"",
				Item_ID_3:"",
				Item_name_3:"",
				dbuploadpth:"",
				uploadDir:"",
				actUpdataGallery:"",
				fixedAspecCropbox:"",
				uploadDirectoryName:"",
				minheight:"",
				minwidth:"",
				masterImageName:"",
				allowDB:"NO",
				displayImagesPath:"",
				Show_CaptionBox:"no",
				beginUpload:"NO",
				dbt:"",
				addImagesToDBPath:"",
			};
	
	
			this.initReload ="true"; //Debug allows error messages to be retained and prevents window reloading
	
		  this.errorWidthMessage = "Oops image not wide enough";
			this.errorHeightMessage = "Oops image not high enough";	
			this.supplier_upgraded_orientation="landscape";
			this.errorFileSizeMessage = "The files size is too small!";
			this.imageRotationDegreeLeft = -90;
			this.imageRotationDegreeRight = 90;

    /*
     * Constructor
     */
    this.construct = function( options){
					$.extend(privateOptions, options);
					if(privateOptions.Show_CaptionBox==="YES"){
						$("#Gallery_Caption").show();
					}
		};

    var root = this;


			this.getInitReload = function(){
				return this.initReload;
			};
   		this.getImageRotationDegreeLeft = function(){
				return this.imageRotationDegreeLeft;
			};
			this.getImageRotationDegreeRight = function(){
				return this.imageRotationDegreeRight;
			};
			
			this.getSupplier_ID = function(){
				return privateOptions.Supplier_ID;
			};

			this.getShowID = function(){
				return privateOptions.Show_ID;
			};
			this.getDisplayType = function(){
				return privateOptions.Display_Type;
			};

			this.getItem_ID_1 = function(){
				return privateOptions.Item_ID_1;
			};
			this.getItem_ID_2 = function(){
				return privateOptions.Item_ID_2;
			};
			this.getItem_ID_3 = function(){
				return privateOptions.Item_ID_3;
			};
			this.getItem_Name_1 = function(){
				return privateOptions.Item_Name_1;
			};
			this.getItem_Name_2 = function(){
				return privateOptions.Item_Name_2;
			};
			this.getItem_Name_3 = function(){
				return privateOptions.Item_Name_3;
			};

			this.setImageID = function(imgid){
					this.imageID = imgid;
			};
			this.getImageID = function(){
				return this.imageID;
			};
			this.getUploadDirectoryName = function(){
				return privateOptions.uploadDirectoryName;
			};
			this.getActUpdataGallery = function(){
				return privateOptions.actUpdataGallery;
			};

			this.getWidth = function(){
				return privateOptions.width;
			};
			this.getHeight = function(){
				return privateOptions.height;
			};

			this.getdbt = function(){
				return privateOptions.dbt;
			};
			this.getAddImagesToDBPath = function(){
				return privateOptions.addImagesToDBPath;
			};
			

			this.getAllowDB = function(){
				return privateOptions.allowDB;
			};

			this.getBeginUpload = function(){
				return privateOptions.beginUpload;
			};


			this.getMinWidth = function(){
				return privateOptions.minwidth;
			};

			this.getMinHeight = function(){
				return privateOptions.minheight;
			};

			this.getMasterImageName = function(){
				return privateOptions.masterImageName;
			};

			this.setMasterImageName = function(imgname){
				if(imgname.indexOf(".jpg")=== -1){
					$.extend(privateOptions, {masterImageName:imgname + "." + this.getFileExtension()});
				}else{
					$.extend(privateOptions, {masterImageName:imgname});
				}
				
				//alert(">>>>"+privateOptions.masterImageName);
			};
			this.fixedAspecCropbox = function(){
				return privateOptions.fixedAspecCropbox;
			};

			this.setSupplier_upgraded_orientation = function(supplier_upgraded_orientation){
				this.supplier_upgraded_orientation = supplier_upgraded_orientation;
			};
			this.getSupplier_upgraded_orientation = function(){
				return this.supplier_upgraded_orientation;
			};

			this.getUploadPath = function(){
				return privateOptions.uploadpath;
			};
			
			this.getDisplayImagesPath = function(){
				return (privateOptions.displayImagesPath!=="")?privateOptions.displayImagesPath:"";
			};

			this.getUploadDir = function(){			

				return privateOptions.uploadDir;
			};


			this.getdbuploadpth = function(){
				return privateOptions.dbuploadpth;
			};	

			this.setFileExtension = function(ext){	
				this.ext= ext;
			};
			this.getFileExtension = function(){
				
				if(this.ext && this.ext.toLowerCase()==="jpeg"){
					this.ext = 'jpg';
				}
			
				return this.ext;
			};


			


			this.Show_CaptionBox = function(){
				return privateOptions.Show_CaptionBox;
			};



			this.setImageCaption = function(caption){
				this.imageCaption = caption;
			};
			this.getImageCaption  = function(){
				return this.imageCaption;
			};

			this.getSupplierImagePath = function(){
				return privateOptions.supplierImages;
			};
			this.formatTime = function(unixTimestamp){
				var dt = new Date(unixTimestamp);
				var hours = dt.getHours();
				var minutes = dt.getMinutes();
				var seconds = dt.getSeconds();
				var year  = this.pad(dt.getFullYear());
				var month = this.pad(dt.getMonth() + 1);
				var day   = this.pad(dt.getDate());
			return year + "" + month + "" + day + "" +  this.pad(hours) + "" + this.pad( minutes) + "" + this.pad(seconds);
			};
			this.setHeight = function(height){
				$.extend(privateOptions,{height:height});
			};
			this.setWidth = function(width){
				$.extend(privateOptions,{width:width});
			};
			
			this.addRecordToDB = function(){
				$.ajax(imageUploader.getdbuploadpth()+imageUploader.getParamString(), {
						method: 'POST',									
						success: function(data){
							imageUploader.setMasterImageName("fred");
						}
				});
			};
			
			this.getParamString = function(){			
				
				var paramstringStart = "?"; 
				var paramstring = ""; 
				var Supplier_ID = this.getSupplier_ID();
				var Show_ID = this.getShowID();
				var Display_Type = this.getDisplayType();
				var Item_ID_1 = this.getItem_ID_1();
				var Item_ID_2 = this.getItem_ID_2();
				var Item_ID_3 = this.getItem_ID_3();
				var Item_Name_1 = this.getItem_Name_1();
				var Item_Name_2 = this.getItem_Name_2();
				var Item_Name_3 = this.getItem_Name_3();
				var dbt = this.getdbt();
								
				if(Supplier_ID!==""){
					if(paramstring.length>0){
						paramstring = paramstring + "&";
					}
					paramstring = paramstring + "Supplier_ID="+Supplier_ID;
				}				
				if(Show_ID!==""){
					if(paramstring.length>0){
						paramstring = paramstring + "&";
					}
					paramstring = paramstring + "Show_ID="+Show_ID;
				}
				
				if(Display_Type!==""){
					if(paramstring.length>0){
						paramstring = paramstring + "&";
					}
					paramstring = paramstring + "Display_Type="+Display_Type;
				}
				if(Item_ID_1>0){
					if(paramstring.length>0){
						paramstring = paramstring + "&";
					}
					if(Item_Name_1 !=="" &&  Item_Name_1 !== undefined && Item_Name_1 !== null){
						paramstring = paramstring + "Item_ID_1="+Item_ID_1 + "&Item_Name_1="+Item_Name_1;
					}else{
						paramstring = paramstring + "Item_ID_1="+Item_ID_1;
					}
					
				}	
				
				
			
				
				if(Item_ID_2>0){
					if(paramstring.length>0){
						paramstring = paramstring + "&";
					}
					if(Item_Name_2 !==""){
						paramstring = paramstring + "Item_ID_2="+Item_ID_2 + "&Item_Name_2="+Item_Name_2;
					}else{
						paramstring = paramstring + "Item_ID_2="+Item_ID_2;
					}
				}				
				if(Item_ID_3>0){
					if(paramstring.length>0){
						paramstring = paramstring + "&";
					}
					if(Item_Name_3 !==""){
						paramstring = paramstring + "Item_ID_3="+Item_ID_3 + "&Item_Name_1="+Item_Name_3;
					}else{
						paramstring = paramstring + "Item_ID_3="+Item_ID_3;
					}
				}				
				if(paramstring.length>0){
					paramstringStart = paramstringStart +  paramstring;
					
				}else{
					paramstringStart ="";
				}		
				return paramstringStart;				
		};
		
		this.setFileSize = function(filesize){
			this.fileSize = filesize;
		};
		this.getFilseSize = function(){
			return this.fileSize;
		};
		
		this.gcd_two_numbers = function(){
			this.x = imageUploader.getWidth();	
			this.y = imageUploader.getHeight();	
			this.x = Math.abs(this.x);
			this.y = Math.abs(this.y);
				while(this.y) {
					this.t = this.y;
					this.y = this.x % this.y;
					this.x = this.t;
				}
				return this.x;
			};
			this.getRatio = function(r){
				this.w = imageUploader.getWidth();
				this.h = imageUploader.getHeight();
				this.rw=this.w/r;
				this.rh=this.h/r;
				if(this.rw > this.rh){
					return this.rw/this.rh;
				}else{
					return this.rh/this.rw;
				}
			};	
			this.ratioCalculator = function(width,height){
				var iwidth = width;
				var iheight= height;
				var	modalImageContainerh = $(".img-container").height();
				var	modalImageContainerw = $(".img-container").width();
				var stp1 = modalImageContainerh/iheight;
				var stp2 = imageUploader.getMinHeight() *stp1;
				var stp3 = modalImageContainerw/iwidth;
				var stp4 = imageUploader.getMinWidth() *stp3;
				var minCroboxwidth =   stp4;
				var minCroboxheight =  stp2;				
				return {width:minCroboxwidth,height:minCroboxheight};
			};
			
	this.updateDataBase = function(){
	
	
		//if(this.getAllowDB==="YES"){
		
		
	
				if(imageUploader.getWidth() > imageUploader.getHeight()){
					imageUploader.setSupplier_upgraded_orientation ("landscape");
				}else{
					imageUploader.setSupplier_upgraded_orientation ("portrait");
				}
					var formData = {Supplier_ID: imageUploader.getSupplier_ID(), Supplier_Upgraded_Images_ID : imageUploader.getImageID(),  Supplier_image_name: imageUploader.getMasterImageName(), Supplier_upgraded_type : imageUploader.getDisplayType(), Supplier_upgraded_width : imageUploader.getWidth(), Supplier_upgraded_height : imageUploader.getHeight(), Supplier_upgraded_filesize : imageUploader.getFilseSize(), Supplier_upgraded_orientation : imageUploader.getSupplier_upgraded_orientation(), Gallery_Caption:this.getImageCaption(),dbt:imageUploader.getdbt(), Item_ID_1: imageUploader.getItem_ID_1};	
					
					
					$.ajax(imageUploader.getActUpdataGallery()+imageUploader.getParamString(), {
							method : "POST",
							data:formData,
							success: function(data){
								$('.alert').show().addClass('alert-success').text('Upload success ....--> ' +data);	
								if(imageUploader.getdbuploadpth()!==""){
									
								}
								return false;
							},
							error: function(xhr, status, error){
							 var err = eval("(" + xhr.responseText + ")");
  							alert("error " +xhr.responseText);
							},
							complete: function(){
							if(imageUploader.getInitReload()==="true"){
								window.location.reload(true);
							}
							
							}
							
						});
					//}else{
					//window.location.reload(true);
					//}
		};
			
			
    this.construct(options);
}
window.addEventListener('DOMContentLoaded', function () {
    var avatar = document.getElementById('avatar');
    var image = document.getElementById('image');
    var input = document.getElementById('input');
    var croppercropbox = $('.cropper-crop-box');
    var $progress = $('.progress');
    var $progressBar = $('.progress-bar');
    var $alert = $('.alert');
    var $modal = $('#modal');
    var cropper,sizes,iwidth,iheight;
		var rotateLeftClick = document.getElementById('rotate-left');
		var rotateRightClick = document.getElementById('rotate-right');


    $('[data-toggle="tooltip"]').tooltip();
    input.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
            input.value = '';
            image.src = url;
            $alert.hide();
            $modal.modal('show');
        };
        var reader;
        var file;
        var url;
				
        if (files && files.length > 0) {
            file = files[0];
					var thisFile = $(this).val();
					var fileExtension = thisFile.substring(thisFile.lastIndexOf(".") + 1, thisFile.length);
					if(fileExtension.indexOf("png")<0){
						imageUploader.setFileExtension(fileExtension);
					}else{
						imageUploader.setFileExtension("jpg");
					}	
						imageUploader.setMasterImageName(imageUploader.getMasterImageName());
						var filetest = input.files && input.files[0];
						var imgtest = new Image();
						imgtest.src = window.URL.createObjectURL(filetest);
						imgtest.onload = function() {
							iwidth = imgtest.naturalWidth;
							iheight = imgtest.naturalHeight;
							if (iwidth === undefined || iwidth === null) {
									return false;
							}
							if (iheight === undefined || iheight === null) {
									return false;
							}
								var widthChk = imageUploader.getMinWidth();
								var heightChk = imageUploader.getMinHeight();
								if(iwidth < widthChk || iheight < heightChk){
											if(iwidth < widthChk){
												imageUploader.setWidth(imageUploader.getMinWidth());
											}

											if(iheight < heightChk){
												imageUploader.setHeight(imageUploader.getMinHeight());	
											}
									}
									if(iwidth < widthChk){
											$modal.modal('hide');
											$('.alert').show().addClass('alert-success').text(imageUploader.errorWidthMessage + ". It's  width is " + iwidth + " and needs to be "  + widthChk);
											return false;
									}else if(iheight < heightChk ){								
										$modal.modal('hide');
										$('.alert').show().addClass('alert-success').text(imageUploader.errorHeightMessage + ". It's height is " + iheight+ " and needs to be " + heightChk);
										return false;
									}else{
										var done = function (url) {
											input.value = '';
											image.src = url;
											$alert.hide();
											$modal.modal('show');
											};
											var reader;
											var file;
											if (files && files.length > 0) {
												file = files[0];
												imageUploader.setFileSize(file.size);
												if(file.size <= 2500){
													$('.alert').show().addClass('alert-success').text(imageUploader.errorFileSizeMessage);
														
													if(imageUploader.getInitReload()==="true"){
														if(imageUploader.getInitReload()==="true"){
															window.location.reload(true);
														}
													}
													
													return false;
												}
												if (URL) {
														done(URL.createObjectURL(file));
												} else if (FileReader) {
														reader = new FileReader();
														reader.onload = function () {
																done(reader.result);
														};
														reader.readAsDataURL(file);
												}
										 } 
									}
								};
        }
    });

    $modal.on('shown.bs.modal', function () {
        $(".cropper-crop-box").next(function(){
            var thisbox = $(".cropper-crop-box").length;
        });				
				if(imageUploader.fixedAspecCropbox().toLowerCase() === "yes"){
						var ndata = imageUploader.ratioCalculator(iwidth,iheight);
								var minCroboxwidth =   ndata.width;
								var minCroboxheight =  ndata.height;
								this.ratio = imageUploader.gcd_two_numbers();
								this.nratio = imageUploader.getRatio(this.ratio);
								cropper = new Cropper(image, {
												aspectRatio: this.nratio,	
												viewMode: 2,
												cropBoxWidth: minCroboxwidth,
												minCanvasWidth:imageUploader.getMinWidth(),
												minCropBoxWidth: minCroboxwidth,
												minCropBoxHeight: minCroboxheight,
														movable: true,
														//autoCropArea: croparea,
														rotatable: true,
														cropBoxResizable: true,
									});
				
				}else{
						var ndata = imageUploader.ratioCalculator(iwidth,iheight);
								var minCroboxwidth =   ndata.width;
								var minCroboxheight =  ndata.height;
								this.ratio = imageUploader.gcd_two_numbers();
								this.nratio = imageUploader.getRatio(this.ratio);
								cropper = new Cropper(image, {
												viewMode: 2,
												cropBoxWidth: minCroboxwidth,
												minCanvasWidth:imageUploader.getMinWidth(),
												minCropBoxWidth: minCroboxwidth,
												minCropBoxHeight: minCroboxheight,
														movable: true,
														//autoCropArea: croparea,
														rotatable: true,
														cropBoxResizable: true,
									});
				}			

    }).on('hidden.bs.modal', function () {
        cropper.destroy();
        cropper = null;
    });		
		rotateLeftClick.addEventListener("click", function(){
				cropper.rotate(imageUploader.getImageRotationDegreeLeft());						
		});
		rotateRightClick.addEventListener("click", function(){
				cropper.rotate(imageUploader.getImageRotationDegreeRight());						
		});
		 document.getElementById('croptop').addEventListener('click', function () {
		 		$('#crop').trigger("click");
		 });
		
		
    document.getElementById('crop').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas,Gallery_Caption;
				imageUploader.setFileExtension("jpg");
        $modal.modal('hide');
        if (cropper) {
            canvas = cropper.getCroppedCanvas({ });
            initialAvatarURL = avatar.src;
            $progress.show();
            $alert.removeClass('alert-success alert-warning');
						var whratio =0;
						sizes =  cropper.getCroppedCanvas({});
						var requiredHeight = Math.ceil(imageUploader.getHeight());
						var requiredWidth = Math.ceil(imageUploader.getWidth());
						var croppedHeight = Math.ceil(sizes.height);
						var croppedWidth =Math.ceil( sizes.width);
						var cropperCanvasHeight=0;
						var cropperCanvasWidth=0;												
						var minimumHeight = imageUploader.getMinHeight();
						var minimumWidth = imageUploader.getMinWidth();	
						if(croppedHeight > requiredHeight ){												
								cropperCanvasHeight = requiredHeight;
								whratio = requiredHeight/croppedHeight;
								cropperCanvasWidth = croppedWidth*whratio;
								if( cropperCanvasWidth > requiredWidth){
									cropperCanvasWidth = requiredWidth;
									whratio = requiredWidth/croppedWidth;
									cropperCanvasHeight = croppedHeight * whratio;
								}
						}else if(croppedWidth > requiredWidth){
								cropperCanvasWidth = requiredWidth;
								whratio = requiredWidth/croppedWidth;
								cropperCanvasHeight = croppedHeight * whratio;
						}else{											
								cropperCanvasHeight = croppedHeight;
								cropperCanvasWidth = croppedWidth;
						}
						if(cropperCanvasHeight > cropperCanvasWidth){
									canvas = cropper.getCroppedCanvas({
									 height: Math.ceil(cropperCanvasHeight),
									});
						}else{
									canvas = cropper.getCroppedCanvas({
									 width: Math.ceil(cropperCanvasWidth),
									});
						}
						initialAvatarURL = avatar.src;
						//avatar.src = canvas.toDataURL();/****** Uncomment this to show preview on page while uploadeing ***/
            canvas.toBlob(function (blob) {
                var formData = new FormData();
                formData.append('avatar', blob);
								formData.append('imgname', imageUploader.getMasterImageName());
								formData.append('Display_Type', imageUploader.getDisplayType());
								formData.append('Gallery_Caption', Gallery_Caption);
								formData.append('UploadPath', imageUploader.getUploadPath());
								formData.append('FileExtension', imageUploader.getFileExtension());
								formData.append('uploadDir', imageUploader.getUploadDir());
								formData.append('dbt', imageUploader.getdbt());
								formData.append('addImagesToDBPath', imageUploader.getAddImagesToDBPath());
								$progress.show();
								$alert.removeClass('alert-success alert-warning');
                $.ajax(imageUploader.getUploadDirectoryName(), {
                    method: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    xhr: function () {
                        var xhr = new XMLHttpRequest();

                        xhr.upload.onprogress = function (e) {
                            var percent = '0';
                            var percentage = '0%';

                            if (e.lengthComputable) {
                                percent = Math.round((e.loaded / e.total) * 100);
                                percentage = percent + '%';
                                $progressBar.width(percentage).attr('aria-valuenow', percent).text(percentage);
                            }
                        };
                        return xhr;
                    },
                    success: function (data) {
										//alert(">>>>>>>>>>"+data);
                        $alert.show().addClass('alert-success').text('Upload success...' );												
													imageUploader.updateDataBase();
                    },
                    error: function () {
										//alert(99);
                        avatar.src = initialAvatarURL;
                        $alert.show().addClass('alert-warning').text('Upload error');
                    },
                    complete: function () {
										//alert(787);
											//	$alert.show().addClass('alert-success').text('Upload success OK');	
                        $progress.hide();
											
											  
                    },
                });
            });
        }
    });
});