// JavaScript Document
var imageUploader = function(options){
	"use strict";
			var privateOptions  = {
				width:0,  // required width of image
				height:0, // required height of image
				//imgname :"",
				uploadpath:"/",
				Supplier_ID:"",
				Display_Type :"",   //  image type -- gallery, slider, displaylogo, listlogo. pdf, usefullinks, videoFiles
				Show_ID:"",
				Item_ID_1:"",       //  spare input id
				Item_name_1:"",     //  spare input id
				Item_ID_2:"",       //  spare input id
				Item_name_2:"",     //  spare input id
				Item_ID_3:"",       //  spare input id
				Item_name_3:"",     //  spare input id
				dbuploadpth:"",
				uploadDir:"",
				actUpdataGallery:"",
				//fixedAspectCropbox:"",
				uploadDirectoryName:"",  // path to  kdfunction_imgeditor/uploader.cfm
				minheight:"",  // Mininum height allowed
				minwidth:"",   // Mininum width allowed
				masterImageName:"",  // name required for image to assiegned to the file and database
				allowDB:"NO",
				displayImagesPath:"",
				Show_CaptionBox:"no",
			//	beginUpload:"NO",
			//	dbt:"",
			//	addImagesToDBPath:"",
				redirectPath:"",
				dimensionPriority:"",  //widthPriority,heightPriority,fixedsize,arbitrary
				maxHeight:3000,  // Maximum height
				maxWidth:3000,   // Maximum width for calculations not used but required
			};
	
			this.initReload ="true"; //Debug allows error messages to be retained and prevents window reloading
	
		  this.errorWidthMessage = "Oops image not wide enough";
			this.errorHeightMessage = "Oops image not high enough";	
			this.supplier_upgraded_orientation="landscape";
			this.errorFileSizeMessage = "The files size is too small!";
			this.imageRotationDegreeLeft = -90;  // This is not used currently
			this.imageRotationDegreeRight = 90;  // This is not used currently
		  this.allowedImages = ['jpg','JPG','png','PNG','gif','GIF','jpeg','JPEG'];   // File types that are allowed

    /*
     * Constructor
     */
    this.construct = function( options){
					$.extend(privateOptions, options);
					if(privateOptions.Show_CaptionBox==="YES"){
						$("#Gallery_Caption").show();
					}
					if(privateOptions.dimensionPriority ===""){
						 $('.alert').show().addClass('alert-success').text('Warning the dimension priority has not been set please contact the administrator');	
						 $.extend(privateOptions, {dimensionPriority:"arbitrary"});
					}
			
		};		
			
			this.getDimensionPriority = function(){	// get the orientation priority -- widthPriority,heightPriority,fixedsize,arbitrary		
				return privateOptions.dimensionPriority;
			};
			
	
			this.setDimensionPriority = function(priority){				
				$.extend(privateOptions,{dimensionPriority:priority});
			};
	
	
			this.getMaxHeight = function(){
				return  Number(privateOptions.maxHeight);
			};
			this.getMaxWidth = function(){
				return  Number(privateOptions.maxWidth);
			};

			this.setMaxHeight = function(height){
				$.extend(privateOptions,{maxHeight:height});
			};
			this.setMaxWidth = function(width){
				$.extend(privateOptions,{maxWidth:width});
			};
	
	
	
			this.getRedirectPath = function(){
				return privateOptions.redirectPath;
			};
			this.getInitReload = function(){
				return this.initReload;
			};
   		/*this.getImageRotationDegreeLeft = function(){
				return this.imageRotationDegreeLeft;
			};
			this.getImageRotationDegreeRight = function(){
				return this.imageRotationDegreeRight;
			};		*/	
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
				return Number(privateOptions.width);
			};
			this.getHeight = function(){
				return Number(privateOptions.height);
			};
			/*this.getdbt = function(){
				return privateOptions.dbt;
			};*/
			/*this.getAddImagesToDBPath = function(){
				return privateOptions.addImagesToDBPath;
			};*/
			/*this.getAllowDB = function(){
				return privateOptions.allowDB;
			};*/
		/*	this.getBeginUpload = function(){
				return privateOptions.beginUpload;
			};*/
			this.getMinWidth = function(){
				return  Number(privateOptions.minwidth);
			};
			this.getMinHeight = function(){
				return  Number(privateOptions.minheight);
			};
			this.getMasterImageName = function(){
				return privateOptions.masterImageName + ".jpg";
			};
			//this.setMasterImageName = function(imgname){
				
		//		$.extend(privateOptions, {masterImageName:imgname + ".jpg"});
				/*if(imgname.indexOf(".jpg")=== -1){
					$.extend(privateOptions, {masterImageName:imgname + "." + this.getFileExtension()});
				}else{
					$.extend(privateOptions, {masterImageName:imgname});
				}*/
		//	};
		/*	this.fixedAspectCropbox = function(){
				return privateOptions.fixedAspectCropbox;
			};*/
			this.setSupplier_upgraded_orientation = function(supplier_upgraded_orientation){
				this.supplier_upgraded_orientation = supplier_upgraded_orientation;
			};
			this.getSupplier_upgraded_orientation = function(){
				return this.supplier_upgraded_orientation;
			};
			this.getUploadPath = function(){
				return privateOptions.uploadpath;
			};			
			/*this.getDisplayImagesPath = function(){
				return (privateOptions.displayImagesPath!=="")?privateOptions.displayImagesPath:"";
			};*/
			this.getUploadDir = function(){			

				return privateOptions.uploadDir;
			};

			this.getdbuploadpth = function(){
				return privateOptions.dbuploadpth;
			};
		/*	this.setFileExtension = function(ext){	
				this.ext= ext;
			};*/
		/*	this.getFileExtension = function(){				
				if(this.ext && this.ext.toLowerCase()==="jpeg"){
					this.ext = 'jpg';
				}
				return this.ext;
			};*/
			this.Show_CaptionBox = function(){
				return privateOptions.Show_CaptionBox;
			};
		/*	this.setImageCaption = function(caption){
				this.imageCaption = caption;
			};*/
			this.getImageCaption  = function(){
				return this.imageCaption;
			};

			/*this.getSupplierImagePath = function(){
				return privateOptions.supplierImages;
			};*/
/*			this.formatTime = function(unixTimestamp){
				var dt = new Date(unixTimestamp);
				var hours = dt.getHours();
				var minutes = dt.getMinutes();
				var seconds = dt.getSeconds();
				var year  = this.pad(dt.getFullYear());
				var month = this.pad(dt.getMonth() + 1);
				var day   = this.pad(dt.getDate());
			return year + "" + month + "" + day + "" +  this.pad(hours) + "" + this.pad( minutes) + "" + this.pad(seconds);
			};*/
			this.setHeight = function(height){
				$.extend(privateOptions,{height:Math.round(height)});
			};
			this.setWidth = function(width){
				$.extend(privateOptions,{width:Math.round(width)});
			};
			
		/*	this.addRecordToDB = function(){
				$.ajax(imageUploader.getdbuploadpth()+imageUploader.getParamString(), {
						method: 'POST',									
						success: function(data){
							//imageUploader.setMasterImageName("fred");
						}
				});
			};*/
			
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
				//var dbt = this.getdbt();
								
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
						paramstring = paramstring + "Item_ID_3="+Item_ID_3 + "&Item_Name_3="+Item_Name_3;
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
	/*	this.gcd_two_numbers = function(){
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
			};	*/
			/*this.getRatio = function(r){
				this.w = imageUploader.getWidth();
				this.h = imageUploader.getHeight();
				this.rw=this.w/r;
				this.rh=this.h/r;
				if(this.rw > this.rh){
					return this.rw/this.rh;
				}else{
					return this.rh/this.rw;
				}
			};	*/
			this.ratioCalculator = function(width,height){
				var iwidth = width;
				var iheight= height;
				var	modalImageContainerh = $(".img-container").height();
				var	modalImageContainerw = $(".img-container").width();
				var stp1 = modalImageContainerh/iheight;
				var stp2 = imageUploader.getMinHeight() *stp1;
				var stp3 = modalImageContainerw/iwidth;
				var stp4 = imageUploader.getMinWidth() *stp3;
				var minCropBoxWidth =   stp4;
				var minCropBoxHeight =  stp2;	
				return {width:minCropBoxWidth,height:minCropBoxHeight};
			};
			
	this.updateDataBase = function(){
				if(imageUploader.getWidth() > imageUploader.getHeight()){
					imageUploader.setSupplier_upgraded_orientation ("landscape");
				}else{
					imageUploader.setSupplier_upgraded_orientation ("portrait");
				}
		
					var formData = {Supplier_ID: imageUploader.getSupplier_ID(), Supplier_Upgraded_Images_ID : imageUploader.getImageID(),  Supplier_image_name: imageUploader.getMasterImageName(), Supplier_upgraded_type : imageUploader.getDisplayType(), Supplier_upgraded_width : imageUploader.getWidth(), Supplier_upgraded_height : imageUploader.getHeight(), Supplier_upgraded_filesize : imageUploader.getFilseSize(), Supplier_upgraded_orientation : imageUploader.getSupplier_upgraded_orientation(), Gallery_Caption:this.getImageCaption(),/*dbt:imageUploader.getdbt(),*/ Item_ID_1: imageUploader.getItem_ID_1};
					$.ajax(imageUploader.getActUpdataGallery()+imageUploader.getParamString(), {
							method : "POST",
							data:formData,
							success: function(data){
								$('.alert').show().addClass('alert-success').text('Upload success ....--> ');	
								/*if(imageUploader.getdbuploadpth()!==""){
									
								}*/
								return false;
							},
							error: function(xhr, status, error){
							// var err = eval("(" + xhr.responseText + ")");
  							alert("error " +xhr.responseText);
							},
							complete: function(){
									if(imageUploader.getInitReload()==="true"){
										if(imageUploader.getRedirectPath()!==""){
											window.location.replace(imageUploader.getRedirectPath());
										}else{
											window.location.reload(true);
										}
									}
							}
						});
		};			
			
    this.construct(options);
};
window.addEventListener('DOMContentLoaded', function () {
		"use strict";	
    var avatar = document.getElementById('avatar');
    var image = document.getElementById('image');
    var input = document.getElementById('input');
    var $progress = $('.progress');
    var $progressBar = $('.progress-bar');
    var $alert = $('.alert');
    var $modal = $('#modal');
    var cropper,iwidth,iheight;
		$('[data-toggle="tooltip"]').tooltip();
	/*	if(imageUploader.fixedAspectCropbox().toLowerCase() === "yes"){					
				var priority = 'fixedsize';
				imageUploader.setDimensionPriority(priority);
		}	*/
	   input.addEventListener('change', function (e) {
			 		
					var files = e.target.files;
					var done = function (url) {
							input.value = '';
							image.src = url;
							$alert.hide();
							//$modal.modal('show');
					};
					var reader;
					var file;
					var url;
			 	  
					if (files && files.length > 0) {
							file = files[0];

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
													$('.alert').show().addClass('alert-success').text(imageUploader.errorWidthMessage + ". Its width is " + iwidth + " and needs to be "  + widthChk);
													$modal.modal('hide');
													return false;
											}else if(iheight < heightChk ){								
												$modal.modal('hide');
												$('.alert').show().addClass('alert-success').text(imageUploader.errorHeightMessage + ". Its height is " + iheight+ " and needs to be " + heightChk);
												$modal.modal('hide');
												return false;
											}else{
												$modal.modal('show');
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
																	if(imageUploader.getRedirectPath()!==""){
																		window.location.replace(imageUploader.getRedirectPath());
																	}else{
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
									}
						 
							if (URL) {
									done(URL.createObjectURL(file));
							} else if (FileReader) {
									reader = new FileReader();
									reader.onload = function (e) {
											done(reader.result);
									};
									reader.readAsDataURL(file);
							}
					}
			});
	
	    $modal.on('shown.bs.modal', function () {       
				var minCropBoxWidth,minCropBoxHeight,ndata;
						ndata = imageUploader.ratioCalculator(iwidth,iheight);	
						minCropBoxWidth =   ndata.width;
						minCropBoxHeight =  ndata.height;
				var getDimensionPriority = imageUploader.getDimensionPriority();	
				var requestedWidth = imageUploader.getWidth();
				var requestedHeight = imageUploader.getHeight();	
				
				switch(getDimensionPriority){//widthPriority,heightPriority,fixedsize,arbitrary										
							case "widthPriority":	
							 cropper = new Cropper(image, {
												viewMode: 0,
											minCropBoxWidth: minCropBoxWidth,  
											minCropBoxHeight: minCropBoxHeight,		 
										});
							break;
							case "heightPriority":	
								 cropper = new Cropper(image, {
												viewMode: 0,
											minCropBoxWidth: minCropBoxWidth,  
											minCropBoxHeight: minCropBoxHeight,						 
										});
							break;
							case "fixedsize":
								 cropper = new Cropper(image, {
												aspectRatio: requestedWidth/requestedHeight,
												viewMode: 0,
												rotatable:true,
											minCropBoxWidth: minCropBoxWidth,  
											minCropBoxHeight: minCropBoxHeight,						 

										});
							break;
							default:	//arbitrary
									 cropper = new Cropper(image, {
												viewMode: 0,
											minCropBoxWidth: minCropBoxWidth,  
											minCropBoxHeight: minCropBoxHeight,
										});
				}

    }).on('hidden.bs.modal', function () {
        cropper.destroy();
        cropper = null;

    });
	
	document.getElementById('crop').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;
				var getDimensionPriority = imageUploader.getDimensionPriority();
        $modal.modal('hide');
        if (cropper) {
							var requestedWidth = imageUploader.getWidth();
							var requestedHeight = imageUploader.getHeight();
						  var requestedMaxWidth = imageUploader.getMaxWidth();
							var requestedMaxHeight =  imageUploader.getMaxHeight();	
							var sizes =  cropper.getCroppedCanvas({});
					
							var choosePritorityDimension = (sizes.height > sizes.width)?"h":"w";
					
						 switch(getDimensionPriority){//widthPriority,heightPriority,fixedsize,arbitrary										
									 case "widthPriority":	
									 	canvas = cropper.getCroppedCanvas({
												width: requestedWidth,
												maxWidth: requestedMaxWidth,
										});
									 break;									 
									case "heightPriority":	
										 canvas = cropper.getCroppedCanvas({
												height:requestedHeight,
											  maxWidth: requestedMaxHeight,
											  maxHeight: requestedMaxHeight,
										});
									 break;								
									 case "fixedsize":
											canvas = cropper.getCroppedCanvas({
											 aspectRatio: requestedWidth/requestedHeight,
												width:requestedWidth,
													maxWidth: requestedMaxWidth,
											   	maxHeight: requestedMaxHeight,
											});
									 break;
									 default:	//arbitrary
								 		switch(choosePritorityDimension){
															case "h":																	
																	 canvas = cropper.getCroppedCanvas({
																		 aspectRatio: 1,
																		 	height:requestedMaxHeight,
																	});
															break;
															case "w":
																	 canvas = cropper.getCroppedCanvas({
																		 aspectRatio: 1,
																		 	width:requestedMaxWidth,
																	});
															break;
													 }
								 
								 
										
									 
						}
					
            initialAvatarURL = avatar.src;
            avatar.src = canvas.toDataURL('image/jpeg', 1.0);
            $progress.show();
            $alert.removeClass('alert-success alert-warning');
            canvas.toBlob(function (blob) {
                var formData = new FormData();
                formData.append('avatar', blob);
								formData.append('imgname', imageUploader.getMasterImageName());
								formData.append('Display_Type', imageUploader.getDisplayType());
								//formData.append('Gallery_Caption', Gallery_Caption);
								formData.append('UploadPath', imageUploader.getUploadPath());
								formData.append('FileExtension', '.jpg');
								formData.append('uploadDir', imageUploader.getUploadDir());
								//formData.append('dbt', imageUploader.getdbt());
								//formData.append('addImagesToDBPath', imageUploader.getAddImagesToDBPath());
								$progress.show();
								$alert.removeClass('alert-success alert-warning');						
							
                $.ajax(imageUploader.getUploadDirectoryName(), { // send form data to 
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
                        $alert.show().addClass('alert-success').text('Upload success' + data);
											  imageUploader.updateDataBase();
											
                    },
                    error: function () {
                        avatar.src = initialAvatarURL;
                        $alert.show().addClass('alert-warning').text('Upload error');
                    },
                    complete: function () {
                        $progress.hide();
                    },
                });
            }, "image/jpeg", 1.0);
        }
    });
	
});


