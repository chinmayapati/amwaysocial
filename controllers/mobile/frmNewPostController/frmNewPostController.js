define({ 

  imgWithoutTags : null,
  imgWithTags : null,
  onNavigate:function(){
    this.view.preShow = this.handlePreshow;
    this.view.postShow = this.handlePostshow;
    tagCount=0;
  },
  searchProducts:function(){
    var keyword = this.view.txtSearch.text;
    this.view.segSearchResults.removeAll();
    this.view.lblNoProducts.isVisible = true;
    this.view.segSearchResults.isVisible = false;
    if(keyword.length < 3){
      return;
    }      
    results = [];
    for(var i=0;i<productList.length;i++){
      if(productList[i].lblName.toLowerCase().indexOf(keyword) > -1){
        results.push(productList[i]);
      }
    }
    if(results.length > 0){
      this.view.lblNoProducts.isVisible = false;
      this.view.segSearchResults.isVisible = true;
      this.view.segSearchResults.addAll(results);
    }else{
      this.view.lblNoProducts.isVisible = true;
      this.view.segSearchResults.isVisible = false;
    }

  },

  doNothing:function(){

  },

  handlePreshow:function(){
    this.view.flxButtons.shadowDepth = 3;
    this.view.flxAddPhoto.shadowDepth = 1;
    this.view.segSearchResults.removeAll();
    this.view.segSearchResults.onRowClick = this.createTag;
    this.view.flxSearch.onClick = this.doNothing;
    this.view.flxSearchresults.onClick =  this.doNothing;
    this.view.txtSearch.onTextChange = this.searchProducts;
    this.view.flxAddPhoto.onClick = this.addPhoto;
    this.view.flxPopup.onClick = this.closePop;
    this.view.btnCamera.onCapture = this.openCamera;
    this.view.flxGalleryBtn.onClick = this.openGallery;
    this.view.btnCancel.onClick = this.closeSearch;
    this.view.flxDiscard.onClick = this.discardAll;
    this.view.txtDescription.onTextChange = this.changeDivider;
    this.view.flxSave.onClick = this.savePost;
    this.view.flxImgSend.onClick = this.shareContent;

    for(var i=1;i<=4;i++){
      this.view["flxImg"+i].onClick = this.toggleTabs;
    }
    productList = [
      {
        "productImage": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "lblName": "CHECK PRINT SHIRT",
        "lblPrice": 110
      },
      {
        "productImage": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "lblName": "GLORIA HIGH LOGO SNEAKER",
        "lblPrice": 91
      },
      {
        "productImage": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "lblName": "CATE RIGID BAG",
        "lblPrice": 94.5
      },
      {
        "productImage": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "lblName": "GUESS CONNECT WATCH",
        "lblPrice": 438.9
      },
      {
        "productImage": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "lblName": "'70s RETRO GLAM KEFIAH",
        "lblPrice": 20
      }
    ];
  },

  toggleTabs:function(tab){
    var tabId = (tab.id)[(tab.id).length-1];
    var ntf = new kony.mvc.Navigation("frmDashBoard");
    ntf.navigate(tabId);
    kony.application.destroyForm("frmNewPost");
  },

  handlePostshow:function(){
    this.aninmateButtons();
  },

  discardAll:function(){
    tagCount = 0;
    hashtagCount = 0;
    this.imgWithoutTags = null;
    this.imgWithTags =  null;
    animate(this.view.flxSave, {"bottom":"-100%"}, 0.5);
    animate(this.view.flxDiscard , {"bottom":"-100%"},0.5);
    animate(this.view.flxDescription, {"bottom":"-100%"}, 0.7);
    this.view.footer.isVisible = true;
    this.view.lblHint.isVisible = false;
    this.view.flxAddPhoto.top = "23%";
    this.view.imgPost.isVisible = false;
    this.view.flxAddPhoto.onClick = this.addPhoto;
    this.view.imgPost.onTouchEnd = null;

    for(var i=1 ; i<=tagCount ;i++)
      this.view.remove(this.view["flxTagOuter"+i]);
  },

  savePost:function(){
    if(this.view.txtDescription.text === null || this.view.txtDescription.text === ""){
      this.view.txtDescription.setFocus(true);
      return;
    }
    this.saveInStore(false);
    var ntf = new kony.mvc.Navigation("frmDashBoard");
    ntf.navigate(3);
    kony.application.destroyForm("frmNewPost");
  },

  saveInStore:function(shared){
	kony.application.showLoadingScreen("loading", "Saving...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    for(var i=1 ; i<= tagCount ; i++){
      this.view["imgCancel"+i].isVisible = false;
    }
    var isShared = false;
    if(shared){
      isShared = true;
    }
    var description = this.view.txtDescription.text;
    var regexp = /#(\w+)/g;
    var match = regexp.exec(description);
    tags =[];
    hashtagCount =0;
    while (match !== null){
      if(hashtagCount<4){
        tags.push(match[1]);
      }
      match = regexp.exec(description);
      hashtagCount = hashtagCount +1;
    }

    this.imgWithTags = kony.image.createImageFromSnapShot(this.view.flxAddPhoto);
    var imageName = Math.floor(10000 + Math.random() * 9000);
    var testRaw = this.imgWithTags.getImageAsRawBytes();
    var filePath = kony.io.FileSystem.getExternalStorageDirectoryPath()+"/Download/";
    var sharedDir = filePath+constants.FILE_PATH_SEPARATOR+"images";
    var sharefolder = new kony.io.File(sharedDir).createDirectory();
    var fileLoc = sharedDir+constants.FILE_PATH_SEPARATOR+imageName+".jpg";
    var myfile=new kony.io.File(fileLoc).createFile();
    var write=new kony.io.File(fileLoc).write(testRaw);

    var dateObj = new Date();
    var date = dateObj.toDateString();
    var obj ={
      "imageName":imageName,
      "flxPost": {"shadowDepth": 5},
      "flxArticle":{"isVisible":true},
      "countComment": {
        "text": "0"
      },
      "countLike": {
        "text": "0"
      },
      "countShare": {
        "text": "0"
      },
      "imgArticle": {
        "src": this.imgWithoutTags
      },
      "imgWithTags": this.imgWithTags,
      "imgWithoutTags" : this.imgWithoutTags,
      "showTags" : false,
      "imgComment": {
        "src": "commentactive1.png"
      },
      "imgLike": {
        "src": "likeactive1.png"
      },
      "imgMore": {
        "src": "shareicon.png"
      },
      "imgShare": {
        "src": "shareactive1.png"
      },
      "lblCount": {
        "text": hashtagCount > 4  ? "+"+(hashtagCount-4).toFixed(0) : "+"+hashtagCount,
        "isVisible": hashtagCount >4 ? true:false
      },
      "lblDesc": {
        "text": description
      },
      "lblTime": {
        "text": date
      },
      "tagText1": {
        "text": tags[0]
      },
      "tagText2": {
        "text": tags[1]
      },
      "tagText3": {
        "text": tags[2]
      },
      "tagText4": {
        "text": tags[3]
      },

      "isShared" : isShared,

      "flxMore": {
        "isVisible" : !isShared
      },
    };
    post = obj;
    kony.application.dismissLoadingScreen();
  },
  

  changeDivider:function(){

    if(this.view.txtDescription.text.length > 0){
      this.view.flxDivider.skin = "CopyslFbox0gc7a749e121745";
      this.view.flxImgSend.skin = "sendActive";
    }else{
      this.view.flxDivider.skin = "CopyslFbox0ae7737532d6649";
      this.view.flxImgSend.skin = "sendinactive";
    }

  },

  openCamera:function(){
    this.setImage(this.view.btnCamera.rawBytes);
  },

  closeSearch:function(){
    this.view.flxSearch.top = "100%";
    this.view.flxDescription.shadowDepth = 7;
    this.view.flxSave.shadowDepth = 7;
    this.view.flxDiscard.shadowDepth = 7;
    this.view.flxAddPhoto.shadowDepth = 1;
  },

  setImage:function(rawBytes){
    this.closePop();
    this.view.flxAddPhoto.top="12%";
    this.view.btnSave.skin = "btnActive";
    this.view.btnShare.skin = "btnActive";
    this.view.lblHint.isVisible = true;
    this.view.imgPost.rawBytes = rawBytes;

    this.view.imgPost.isVisible = true;
    this.view.footer.isVisible = false;
    this.view.flxAddPhoto.onClick = null;
    this.view.imgPost.onTouchEnd = this.addTag;
    this.view.flxDescription.shadowDepth = 7;
    this.view.flxSave.shadowDepth = 7;
    this.view.flxDiscard.shadowDepth = 7;
    animate(this.view.flxDescription, {"bottom":"-5%"}, 0.7,this.animateSaveFlx);


  },

  animateSaveFlx:function(){
    this.view.flxSave.bottom ="8%";
    this.view.flxDiscard.bottom = "8%";
    animate(this.view.flxSave, {"bottom":"12%"}, 0.5);
    animate(this.view.flxDiscard , {"bottom":"12%"},0.5);
    this.imgWithoutTags = kony.image.createImageFromSnapShot(this.view.flxAddPhoto);
  },

  createTag:function(){
    tagCount = tagCount + 1;
    var name = this.view.segSearchResults.selectedRowItems[0].lblName;

    var flxTagOuter = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
      "clipBounds": false,
      "height": "18%",
      "id": "flxTagOuter"+tagCount,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": gblX-30+"dp",
      "width":"30%",
      "top": gblY-20+"dp",
      "zIndex": 1000
    }, {}, {});

    var flxTag =  new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
      "clipBounds": false,
      "height": "40%",
      "id": "flxtag"+tagCount,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "0dp",
      "width":"30%",
      "skin": "flxTag",
      "bottom": "0dp",
      "zIndex": 1000
    }, {}, {});

    flxTag.setDefaultUnit(kony.flex.DP);

    var lblTag = new kony.ui.Label({
      "height": kony.flex.USE_PREFERED_SIZE,
      "width":kony.flex.USE_PREFERED_SIZE,
      "id": "lblTag"+tagCount,
      "isVisible": true,
      "centerX":"50%",
      "centerY":"48%",
      "skin": "lblTag",
      "text": name.toLowerCase(),
      "textStyle": {
        "letterSpacing": 0,
        "strikeThrough": false
      },
      "zIndex": 1000
    },
                                   {
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {
      "textCopyable": false
    });

    var imgCancel = new kony.ui.Image2({
      "top":"35%",
      "right":"-8%",
      "height": "48%",
      "width": "20dp",    
      "id": "imgCancel"+tagCount,
      "isVisible": false,
      "src": "cancel.png",
      "zIndex": 1001,
    },
                                       {
      "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {});


    var imgTag = new kony.ui.Image2({
      "top":"8%",
      "centerX":"50%",
      "height": "85%",
      "width": "50%",    
      "id": "imgTag"+tagCount,
      "isVisible": true,
      "src": "menuup.png",
      "zIndex": 1000,
    },
                                    {
      "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {});

    flxTag.add(lblTag);
    flxTagOuter.add(flxTag,imgTag,imgCancel);
    this.view.flxAddPhoto.add(flxTagOuter);
    kony.timer.schedule("timerid", this.callback, 0.1, false);
  },


  callback:function(){
    this.view["flxTagOuter"+tagCount].width = this.view["lblTag"+tagCount].frame.width +15+"dp";
    this.view["flxtag"+tagCount].width =  this.view["lblTag"+tagCount].frame.width +15+"dp";
    this.closeSearch();
    kony.timer.cancel("timerid");
    this.view["flxTagOuter"+tagCount].onClick = this.toggleDelete;
    this.view["imgCancel"+tagCount].onTouchStart = this.deleteTag;
  },

  deleteTag:function(src){
    this.view.remove(src.parent);
  },

  toggleDelete:function(src){

    var id = src.id[src.id.length-1];
    if(this.view["imgCancel"+id].isVisible){
      this.view["imgCancel"+id].isVisible = false
    }else{
      this.view["imgCancel"+id].isVisible =  true;
    }

  },

  addTag:function(src,x,y){
    gblX = x;
    gblY = y;
    this.view.txtSearch.text = "";
    this.view.flxButtons.shadowDepth = 0;
    this.view.flxAddPhoto.shadowDepth = 0;
    this.view.flxDescription.shadowDepth = 0;
    this.view.flxSave.shadowDepth = 0;
    this.view.flxDiscard.shadowDepth =0;
    this.view.segSearchResults.removeAll();
    this.view.flxSearch.top = 0;
  },

  openGallery:function(){
    var querycontext = {
      mimetype: "image/*"
    };
    try{
      var returnStatus = kony.phone.openMediaGallery(this.onSelectionCallback, querycontext);
    }
    catch(e){
      alert(e);
    }
  },

  onSelectionCallback:function(rawBytes){
    if(rawBytes)
      this.setImage(rawBytes);
  },

  addPhoto:function(){
    this.openPop();
  },

  aninmateButtons:function(){
    animate(this.view.flxButtons,{bottom:"-8dp"},0.35);
  },

  openPop:function(){
    this.view.flxAddPhoto.shadowDepth = 0;
    this.view.flxPopup.top = "0%";
    animate(this.view.flxOuterBox,{centerY:"45%"},0.35);
    this.view.flxPopup.skin = "opacity40";    
  },

  closePop:function(){
    animate(this.view.flxOuterBox,{centerY:"-150%"},0.25,this.closePopup);
  },

  closePopup:function(){
    this.view.flxAddPhoto.shadowDepth = 1;
    this.view.flxPopup.skin = "opacity0";
    this.view.flxPopup.top = "-100%";
  },

  shareContent:function(){
    if(this.view.txtDescription.text === null || this.view.txtDescription.text === ""){
      this.view.txtDescription.setFocus(true);
      return;
    }
    shared = true;
    this.saveInStore(true);
    shareContentAndroid(this.view.txtDescription.text , post.imageName);
  }

});