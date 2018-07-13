define({  
  onNavigate:function(){
    this.view.preShow = this.handlePreshow;
  },
  handlePreshow:function(){
    this.view.btnCancel.onClick= this.CancelButton;
    this.view.btnGallery.onClick= this.openGallery;
    this.view.lblAddPhoto.onTouchStart=this.SelectPhoto;
  },

  CancelButton:function(){
    //alert("done");
    // this.view.flxSelect.isVisible=true;
    this.view.imgPhoto.src="images.jpg";
    this.view.btnCancel.isVisible=false;
    this.view.flxSelect.isVisible=false;
    this.view.flxSelect1.isVisible=true;
    this.view.flxPhoto.isVisible=false;
    this.view.flxTag.isVisible=false;
  },

  SelectPhoto:function()
  {
    this.view.flxSelect.isVisible=true;
    this.view.btnGallery.onTouchStart= this.openGallery;
    this.view.btnCamera.onCapture=this.CameraClick;
    this.view.btnCancel.isVisible=true;
    this.view.flxSelect1.isVisible=false;
    this.view.flxPhoto.isVisible=true;
  },
  CameraClick:function()
  {
    this.view.imgPhoto.rawBytes=this.view.btnCamera.rawBytes;
    this.view.flxSelect1.isVisible=false;
    this.view.flxSelect.isVisible=false;
    this.view.btnCancel.isVisible=true;
    this.view.flxPhoto.onTouchStart=this.touchMove.bind();
  },
  openGallery:function() {
    querycontext = {
      mimetype: "image/*"
    };
    try{
      var returnStatus = kony.phone.openMediaGallery(this.onselectioncallback, this.querycontext);
    }
    catch(E){alert(E);}
  },
  onselectioncallback: function(raw) {
    if (raw === null) {
      alert("Please select an Image");
      return;
    }
    this.view.imgPhoto.rawBytes=raw;
    this.view.flxSelect.isVisible=false;
    this.view.flxSelect1.isVisible=false;
    this.view.btnCancel.isVisible=true;
    this.view.flxPhoto.onTouchStart=this.touchMove.bind();
    // alert("ok");
  },

  touchMove: function(src, x, y) {
    alert(x+","+y);
    i=i+1;
    this.view.flxTag.left = x-100 + "dp";
    this.view.flxTag.top = y +"dp";
    this.SearchBar(x,y);
  },

  SearchBar:function(x,y){
    this.view.flxTag.isVisible=true;
    this.view.flxTag.left="0dp";
    this.view.flxTag.top="0dp";
    this.view.txtSearch.onDone=this.addTag2.bind(this,x,y);
    this.view.flxCancelSearch.onTouchStart=this.ofTag;
  },
  ofTag:function()
  {
    this.view.flxTag.isVisible=false;
  },
  
  addTag2: function(x, y) {

    textBoxS=this.view.txtSearch.text;
    this.view.txtSearch.text="";
    if(textBoxS===null||textBoxS==="")
    {
      alert("Search Box is Empty!!");
    }
    else{
      //alert(textBoxS);
      this.view.flxTag.isVisible=false;

      var flxTag1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxTag" + i,
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": x-30+"dp",
        "skin": "slFbox",
        "top": y-10+"dp",
        "width": "30%",
        "zIndex": 10
      }, {}, {});
      flxTag1.setDefaultUnit(kony.flex.DP);
      var Label0a692166533e94e = new kony.ui.Label({
        "bottom": "-3dp",
        "centerX": "50%",
        "id": "Label0a692166533e94e" + i,
        "isVisible": true,
        "skin": "CopyslLabel0ga50fff77f1f4d",
        "text": "^",
        "textStyle": {
          "letterSpacing": 0,
          "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {
        "textCopyable": false
      });
      var FlexContainer0c411502f62de43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 0,
        "clipBounds": true,
        "height": "30%",
        "id": "FlexContainer0c411502f62de43" + i,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0fb4c2c7e579c41",
        "width": "100%",
        "zIndex": 1
      }, {}, {});
      FlexContainer0c411502f62de43.setDefaultUnit(kony.flex.DP);
      var Label0c61a6fe79a8f4c = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0c61a6fe79a8f4c" + i,
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0cc04412bbf2e4c",
        "text": textBoxS,
        "textStyle": {
          "letterSpacing": 0,
          "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {
        "textCopyable": false
      });
      FlexContainer0c411502f62de43.add(Label0c61a6fe79a8f4c);
      flxTag1.add(Label0a692166533e94e, FlexContainer0c411502f62de43);
      this.view.flxPhoto.add(flxTag1);
      textBoxS="";
    }

  },
  responseCallBack: function() {
    try {
      if (request.readyState == constants.HTTP_READY_STATE_DONE) {
        alert("this.responseType " + JSON.stringify(request));

      }
    } catch (e) {
      kony.print("Exception is " + e);
    }
  }

});