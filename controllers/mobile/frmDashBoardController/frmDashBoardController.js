define({ 

  onNavigate:function(){
    this.view.preShow = this.handlePreshow;
  },

  handlePreshow:function(){
    this.view.footer.shadowDepth = 7;
    this.view.flxCamera.shadowDepth = 2;
    this.view.flxCircle.shadowDepth = 2;
    this.view.flxHeader.shadowDepth = 3;
    this.view.imgInActive3.isVisible = false;
    this.view.flxTab3.left = "0%";
    this.view.lblTab3.skin = "lblActive";
    this.view.flxCamera.onClick = this.openPop;
    this.view.flxPopup.onClick = this.closePop;
    this.view.flxGalleryBtn.onClick = this.openGallery;
    this.view.flxCameraBtn.onClick = this.openCamera;
    for(var i=1;i<=4;i++){
      this.view["flxImg"+i].onClick = this.toggleTabs;
    }
    var data = [
      {
        "badge": {
          "src": "badgeblue.png"
        },
        "imgProfile": {
          "src": "dummy.jpg"
        },
        "lblInfo": {
          "text": "<div><b>John Doe</b> commented on your post.</div>"
        },
        "lblTime": {
          "text": "03/04/2018 @ 1:11 PM"
        }
      },
      {
        "badge": {
          "src": "badgegreen.png"
        },
        "imgProfile": {
          "src": "dummy.jpg"
        },
        "lblInfo": {
          "text": "<div><b>John Doe</b> reacted HAHA on your post.</div>"
        },
        "lblTime": {
          "text": "03/04/2018 @ 1:11 PM"
        }
      },
      {
        "badge": {
          "src": "badgeorange.png"
        },
        "imgProfile": {
          "src": "dummy.jpg"
        },
        "lblInfo": {
          "text": "<div><b>John Doe</b> shared your post.</div>"
        },
        "lblTime": {
          "text": "03/04/2018 @ 1:11 PM"
        }
      },
      {
        "badge": {
          "src": "badgegreen.png"
        },
        "imgProfile": {
          "src": "dummy.jpg"
        },
        "lblInfo": {
          "text": "<div><b>John Doe</b> reacted HAHA on your post.</div>"
        },
        "lblTime": {
          "text": "03/04/2018 @ 1:11 PM"
        }
      },
      {
        "badge": {
          "src": "badgegreen.png"
        },
        "imgProfile": {
          "src": "dummy.jpg"
        },
        "lblInfo": {
          "text": "<div><b>John Doe</b> reacted HAHA on your post.</div>"
        },
        "lblTime": {
          "text": "03/04/2018 @ 1:11 PM"
        }
      },
      {
        "badge": {
          "src": "badgegreen.png"
        },
        "imgProfile": {
          "src": "dummy.jpg"
        },
        "lblInfo": {
          "text": "<div><b>John Doe</b> reacted HAHA on your post.</div>"
        },
        "lblTime": {
          "text": "03/04/2018 @ 1:11 PM"
        }
      }
    ];
    this.view.segNotifications.setData(data);
  },

  openGallery:function(){
    alert("gallery to be opened");
  },

  openCamera:function(){
    alert("camera to be opened");
  },

  toggleTabs:function(tab){
    var tabId = (tab.id)[(tab.id).length-1];
    if(this.view["imgInActive"+tabId].isVisible){
      for(var i=1;i<=4;i++){
        if(i!=tabId){
          this.view["imgInActive"+i].isVisible = true;
          this.view["flxTab"+i].left = "100%";
          this.view["lblTab"+i].skin = "lblInactive";
        }
      }
    }
    this.view["imgInActive"+tabId].isVisible = false;
    this.view["flxTab"+tabId].left = "0%";
    this.view["lblTab"+tabId].skin = "lblActive";
  },

  closePop:function(){

    animate(this.view.flxOuterBox,{centerY:"150%"},0.25,this.closePopup);

  },

  closePopup:function(){
    this.view.flxPopup.skin = "opacity0";
    this.view.flxPopup.top = "100%"
  },
  openPop:function(){
    this.view.flxPopup.top = "0%"
    animate(this.view.flxOuterBox,{centerY:"50%"},0.25);
    this.view.flxPopup.skin = "opacity40";
  },



});