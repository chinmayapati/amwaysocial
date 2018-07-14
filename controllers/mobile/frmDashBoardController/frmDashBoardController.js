define({ 

  onNavigate:function(){
    controllerReference = this;
    this.view.preShow = this.handlePreshow;
	this.view.onDeviceBack = function() { kony.application.exit(0); };    
  },
  animateLine : function()
  {
    var self = this;
	
    function MOVE_ACTION____e461951b7b7640b78e57b274bcfbe3cb_Callback() {}
    self.view.Color.animate(
    kony.ui.createAnimation({
        "100": {
          	"left":"-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": MOVE_ACTION____e461951b7b7640b78e57b274bcfbe3cb_Callback
    });
    
    self.view.ArrowFlx.isVisible = true;
    self.view.ArrowFlx.animate(
    kony.ui.createAnimation({
        "100": {
          	"centerX":"50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": MOVE_ACTION____e461951b7b7640b78e57b274bcfbe3cb_Callback
    });
  },

  handlePreshow:function(){
    this.view.TotalEarns.shadowDepth = 3;
    this.view.ChainFlex.shadowDepth = 3;
    this.view.footer.shadowDepth = 7;
    this.view.flxCamera.shadowDepth = 2;
    this.view.flxCircle.shadowDepth = 2;
    this.view.flxHeader.shadowDepth = 3;
    this.view.flxGraph.shadowDepth = 3;
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

    // Set notifications
	this.loadNotifications();
    
    // Set Posts
    var posts = [
      {
        "flxPost": {"shadowDepth": 2},
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
          "src": "selena2.jpg"
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
        "flxPost": {"shadowDepth": 2},
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
          "src": "selena1.jpg"
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
        "flxPost": {"shadowDepth": 2},
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
          "src": "selena2.jpg"
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
        "flxPost": {"shadowDepth": 2},
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
          "src": "taylor.jpg"
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
      
      
      
     
     
    
    
     
      
    ];
    this.view.segPosts.setData(posts);
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
    if(tabId == 1){
      this.myEarnings();
    }
    else if(tabId == 2){
      this.getEarnings();
    }
    else if(tabId == 4) {
      this.loadNotifications();
    }
  },

  loadNotifications: function() {
    /*var data = [
      {
        "badge": "badgeblue.png",
        "imgProfile": "dummy.jpg",
        "lblInfo": "<div><b>John Doe</b> commented on your post.</div>",
        "lblTime": "03/04/2018 @ 1:11 PM"
      }
    ];*/
    var data = [], temp, badge;
    kony.print("Notifications >> Loading : " + JSON.stringify(notifications));
    for(var i in notifications) {
      temp = notifications[i];
      badge = temp.userType==1 ? "badgeblue.png" : temp.userType==2 ? "badgeorange.png" : "badgegreen.png";
      data.push({
        badge: badge,
        imgProfile: "dummy.jpg",
        lblInfo: temp.msg,
        comment: temp.comment || "",
        lblTime: temp.createdAt || ""
      });
    }
    this.view.flxNoNotifications.isVisible = (data.length === 0);
    this.view.segNotifications.setData(data);
  },
  closePop:function(){
    animate(this.view.flxOuterBox,{centerY:"150%"},0.25,this.closePopup);
  },

  closePopup:function(){
    this.view.flxPopup.skin = "opacity0";
    this.view.flxPopup.top = "100%";
  },

  openPop:function(){
    kony.print("posts :" + posts);
    kony.print("money: " + earnings);
    kony.print("traffic: " + traffic);
    kony.print("notif: " + notifications);
    kony.print("user: "+  user);
    this.view.flxPopup.top = "0%";
    animate(this.view.flxOuterBox,{centerY:"50%"},0.25);
    this.view.flxPopup.skin = "opacity40";
  },

  myEarnings:function(){
    var chart = this.kdv_createChartWidget();
    this.view.flxGraph.add(chart);
  },

  getEarnings:function(){
    this.animateLine();    
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
          "customers": traffic,

        }
      }
    };
    return chartJSObj;

  },
});