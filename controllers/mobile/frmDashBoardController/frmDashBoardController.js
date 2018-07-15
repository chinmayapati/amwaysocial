define({ 

  posts : [
    {
      "flxPost": {"shadowDepth": 5},
      "countComment": {
        "text": "23"
      },
      "countLike": {
        "text": "10"
      },
      "countShare": {
        "text": "3"
      },
      "imgArticle": {
        "src": "p1.png"
      },
      "imgComment": {
        "src": "commentactive1.png"
      },
      "imgLike": {
        "src": "likeactive1.png"
      },
      "imgMore": {
        "src": "moreoptions.png"
      },
      "imgShare": {
        "src": "shareactive1.png"
      },
      "lblCount": {
        "text": "+5"
      },
      "lblDesc": {
        "text": "<div>Lorem ipsum doet ipul edicsion ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui... </div>"
      },
      "lblTime": {
        "text": "Thrusday, 3pm"
      },
      "tagText1": {
        "text": "amway"
      },
      "tagText2": {
        "text": "product"
      },
      "tagText3": {
        "text": "amway"
      },
      "tagText4": {
        "text": "amway"
      }
    },
    {
      "flxPost": {"shadowDepth": 5},
      "countComment": {
        "text": "23"
      },
      "countLike": {
        "text": "10"
      },
      "countShare": {
        "text": "3"
      },
      "imgArticle": {
        "src": "p2.png"
      },
      "imgComment": {
        "src": "commentactive1.png"
      },
      "imgLike": {
        "src": "likeactive1.png"
      },
      "imgMore": {
        "src": "moreoptions.png"
      },
      "imgShare": {
        "src": "shareactive1.png"
      },
      "lblCount": {
        "text": "+5"
      },
      "lblDesc": {
        "text": "<div>Lorem ipsum doet ipul edicsion ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui... </div>"
      },
      "lblTime": {
        "text": "Thrusday, 3pm"
      },
      "tagText1": {
        "text": "amway"
      },
      "tagText2": {
        "text": "product"
      },
      "tagText3": {
        "text": "amway"
      },
      "tagText4": {
        "text": "amway"
      }
    },
    {
      "flxPost": {"shadowDepth": 5},
      "countComment": {
        "text": "23"
      },
      "countLike": {
        "text": "10"
      },
      "countShare": {
        "text": "3"
      },
      "imgArticle": {
        "src": "p3.png"
      },
      "imgComment": {
        "src": "commentactive1.png"
      },
      "imgLike": {
        "src": "likeactive1.png"
      },
      "imgMore": {
        "src": "moreoptions.png"
      },
      "imgShare": {
        "src": "shareactive1.png"
      },
      "lblCount": {
        "text": "+5"
      },
      "lblDesc": {
        "text": "<div>Lorem ipsum doet ipul edicsion ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui... </div>"
      },
      "lblTime": {
        "text": "Thrusday, 3pm"
      },
      "tagText1": {
        "text": "amway"
      },
      "tagText2": {
        "text": "product"
      },
      "tagText3": {
        "text": "amway"
      },
      "tagText4": {
        "text": "amway"
      }
    },
    {
      "flxPost": {"shadowDepth": 5},
      "countComment": {
        "text": "23"
      },
      "countLike": {
        "text": "10"
      },
      "countShare": {
        "text": "3"
      },
      "imgArticle": {
        "src": "p4.png"
      },
      "imgComment": {
        "src": "commentactive1.png"
      },
      "imgLike": {
        "src": "likeactive1.png"
      },
      "imgMore": {
        "src": "moreoptions.png"
      },
      "imgShare": {
        "src": "shareactive1.png"
      },
      "lblCount": {
        "text": "+5"
      },
      "lblDesc": {
        "text": "<div>Lorem ipsum doet ipul edicsion ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui... </div>"
      },
      "lblTime": {
        "text": "Thrusday, 3pm"
      },
      "tagText1": {
        "text": "amway"
      },
      "tagText2": {
        "text": "product"
      },
      "tagText3": {
        "text": "amway"
      },
      "tagText4": {
        "text": "amway"
      }
    },   
  ],
  onNavigate:function(tab){
    controllerReference = this;
    curTab = tab ?tab :3;
    this.view.preShow = this.handlePreshow;

  },
  handlePreshow:function(){

    this.view.footer.shadowDepth = 5;
    this.view.flxCamera.shadowDepth = 8;
    this.view.flxCircle.shadowDepth = 2;
    this.view.flxHeader.shadowDepth = 3;
    this.view.flxGraph.shadowDepth = 3;
    this.selectedTab(curTab);
    this.view.flxCamera.onClick = this.navNewPost;
    this.view.flxPopup.onClick = this.closePop;
    this.view.flxGalleryBtn.onClick = this.openGallery;
    this.view.flxCameraBtn.onClick = this.openCamera;
    //this.view.segPosts.onRowClick = this.showTags;
    for(var i=1;i<=4;i++){
      this.view["flxImg"+i].onClick = this.toggleTabs;
    }
    // Set notifications
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
    if(post.hasOwnProperty("flxMore"))
      post.flxMore.onClick = this.shareContent;

    if(post.hasOwnProperty("flxArticle"))
      post.flxArticle.onClick = this.showTags;
    
    this.posts.unshift(post);
    kony.store.setItem("posts", JSON.stringify(this.posts));
    post={};
    this.view.segPosts.setData(this.posts);
  },


  shareContent:function(){
    var selectedIndex = this.view.segPosts.selectedIndex[1];
    var data = this.view.segPosts.selectedItems[0];
    var description =  data["lblDesc"]["text"].replace("<div>", "").replace("</div>", "");
    shareContentAndroid(description, data.imageName);
  },
  showTags:function(){
    var index = this.view.segPosts.selectedIndex[1];
    var data = this.view.segPosts.selectedItems[0];
    if(!data.showTags){
      data.imgArticle.src = data.imgWithTags;
      data.showTags = true;
    }else{
      data.imgArticle.src = data.imgWithoutTags;
      data.showTags = false;
    }

    this.view.segPosts.setDataAt(data, index);
  },
  navNewPost:function(){
    var ntf = new kony.mvc.Navigation("frmNewPost");
    ntf.navigate();
  },
  openGallery:function(){
    alert("gallery to be opened");
  },
  openCamera:function(){
    alert("camera to be opened");
  },
  selectedTab:function(tabId){
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

    if(tabId == 1){
      this.myEarnings();
      this.view.imgLogo.isVisible = false;
      this.view.lblNotifications.isVisible = false;
      this.view.lblTraffic.isVisible = true;
      this.view.lblEarnings.isVisible = false;
    }else if(tabId == 2){
      this.getEarnings();
      this.view.imgLogo.isVisible = false;
      this.view.lblNotifications.isVisible = false;
      this.view.lblTraffic.isVisible = false;
      this.view.lblEarnings.isVisible = true;
    }else if(tabId == 3){
      this.view.imgLogo.isVisible = true;
      this.view.lblNotifications.isVisible = false;
      this.view.lblTraffic.isVisible = false;
      this.view.lblEarnings.isVisible = false;
    }else{
      this.view.imgLogo.isVisible = false;
      this.view.lblNotifications.isVisible = true;
      this.view.lblTraffic.isVisible = false;
      this.view.lblEarnings.isVisible = false;
    }
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
    if(tabId == 1){
      this.myEarnings();
      this.view.imgLogo.isVisible = false;
      this.view.lblNotifications.isVisible = false;
      this.view.lblTraffic.isVisible = true;
      this.view.lblEarnings.isVisible = false;
    }else if(tabId == 2){
      this.getEarnings();
      this.view.imgLogo.isVisible = false;
      this.view.lblNotifications.isVisible = false;
      this.view.lblTraffic.isVisible = false;
      this.view.lblEarnings.isVisible = true;
    }else if(tabId == 3){
      this.view.imgLogo.isVisible = true;
      this.view.lblNotifications.isVisible = false;
      this.view.lblTraffic.isVisible = false;
      this.view.lblEarnings.isVisible = false;
    }else{
      this.view.imgLogo.isVisible = false;
      this.view.lblNotifications.isVisible = true;
      this.view.lblTraffic.isVisible = false;
      this.view.lblEarnings.isVisible = false;
    }
  },
  closePop:function(){
    animate(this.view.flxOuterBox,{centerY:"150%"},0.25,this.closePopup);
  },
  closePopup:function(){
    this.view.flxPopup.skin = "opacity0";
    this.view.flxPopup.top = "100%";
  },
  openPop:function(){
    this.view.flxPopup.top = "0%";
    animate(this.view.flxOuterBox,{centerY:"50%"},0.25);
    this.view.flxPopup.skin = "opacity40";
  },
  myEarnings:function(){
    var chart = this.kdv_createChartWidget();
    this.view.flxGraph.add(chart);
  },
  getEarnings:function(){

  },
  kdv_createChartWidget:function () {
    var chartObj = controllerReference.kdv_createChartJSObject();
    var chartWidget = new kony.ui.Chart2D3D({
      "id": "chartid",
      "isVisible": true,
      "top":"0",
      "height":"90%",
      "width":"90%",
      "centerX":"50%",
      "centerY":"50%"
    }, {
      "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "containerWeight": 100
    }, chartObj);
    return chartWidget;
  },
  kdv_createChartJSObject:function () {
    var chartJSObj ={
      "chartProperties":{
        "chartHeight": 50,
        "drawEntities":["axis","","areaChart"],            
        "areaChart":{
          "columnId": [0],
          "animations": {
            "onInitAnimation": true,
          },
          "graphType": "normal",
          "lineType": "normal",
          "dataAlignToAxis": ["primaryYAxis"],
          "plotMissingValues": "assumeZero",
          /////// chart area
          "area": {
            "fillType": ["color"],
            "transparency": [0],
            "color": ["0xd9e2f1ff"],
            "colorAboveXAxis": ["0xd9e2f1ff"],
            "colorBelowXAxis": ["0xd9e2f1ff"],
          },
          /////// chart line
          "line": {
            "visible": true,
            "color": ["0x6999f2ff"],
            "width": [1],
            "transparency": [0],
          },
          /////// chart plot markers
          "plotPoints": {
            "visible": false,
            "colorIndicator": "columns",
            "marker": {
              "type": ["circle"],
              "fillType": "color",
            },
            "color": ["0x6f6f6fff"],
            "transparency": [0],
            "size": [24],
          },
          /////// chart datalabels
          "dataLabels": {
            "visible": true,
            "indicators": ["numberValue"],
            "separator": "space",
            "placement": "left",
            "orientationAngle": 0,
            "font": {
              "size": [18],
              "family": ["Lato-Bold"],
              "style": ["Bold"],
              "color": ["0x6f6f6fff"],
              "transparency": [0]
            },
          }
        }
      },
      "chartData":{
        "columnNames":{
          "values":["customers"]
        },
        "rowNames":{
          "values":["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
        },
        "data":{
          "customers":[10, 36, 24, 44,5,50,7,23,17,39,32,23],

        }
      }
    };
    return chartJSObj;

  },


});