define({ 

  onNavigate:function(){
    controllerReference = this;
    this.view.preShow = this.handlePreshow;
    this.view.onDeviceBack = function() { kony.application.exit(0); };    
  },

  incrementCustomers : function() {
    if(customerCounter >= earnings.chainEarnings.connections) {
    this.view.custCountLbl.text = "+" + earnings.chainEarnings.connections + " Customers";
      try {
        kony.timer.cancel("incrementCustomer");
      } catch(e) { kony.print("Unable to cancel cust timer"); }
    }
    this.view.custCountLbl.text = "+"+customerCounter+" Customers";
    customerCounter +=  Math.floor(earnings.chainEarnings.connections/10);
  },
  incrementTotal : function() {
    if(totalEarningCounter >= earnings.totalEarnings.amount) {
      this.view.totalEarnedLbl.text = "$" + earnings.totalEarnings.amount;
      try {
        kony.timer.cancel("incrementTotal");
      } catch(e) { kony.print("Unable to cancel total timer"); }
    }
    this.view.totalEarnedLbl.text = "$" + totalEarningCounter;
    totalEarningCounter += Math.floor(earnings.totalEarnings.amount/10);
  },
  incrementChain : function() {
    if(chainEarningCounter >= earnings.chainEarnings.amount) {
      this.view.chainEarnedLbl.text = "$" + earnings.chainEarnings.amount;
      try {
        kony.timer.cancel("incrementChain");
      } catch(e) { kony.print("Unable to cancel chain timer"); }
    }
    this.view.chainEarnedLbl.text = "$" + chainEarningCounter;
    chainEarningCounter += Math.floor(earnings.chainEarnings.amount/10);
  },
  incrementDepth: function() {
    if(depthCounter >= earnings.chainEarnings.depth) {
      this.view.countLbl.text = "" + depthCounter;
      try {
        kony.timer.cancel("incrementDepth");
      } catch(e) { kony.print("Unable to cancel depth timer"); }
    }
    this.view.countLbl.text = "" + depthCounter;
    depthCounter +=  1;
  },
  animateCounter:function() {
    try {
      kony.timer.schedule("incrementCustomer",this.incrementCustomers, 0.05, true);
      kony.timer.schedule("incrementTotal",this.incrementTotal, 0.05, true);
      kony.timer.schedule("incrementChain",this.incrementChain, 0.05, true);
      kony.timer.schedule("incrementDepth", this.incrementDepth, 0.05, true);
    } catch(e) { kony.print("Unable to set timers."); }
  },
  animateLine : function() {
    animate(this.view.Color,{"left":"-50%"},1);
    this.view.ArrowFlx.isVisible = true;
    animate(this.view.ArrowFlx,{"centerX":"50%"},1);
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
    this.loadPosts();
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
      this.loadEarnings();
    }
    else if(tabId == 3) {
      this.loadPosts();
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
  
  loadPosts: function() {
    /*var posts = [
      {
        "flxPost": {"shadowDepth": 2},
        "countComment": "23",
        "countLike": "10",
        "countShare": "3",
        "imgArticle": "selena2.jpg",
        "imgComment": "commentactive1.png",
        "imgLike": "likeactive1.png",
        "imgMore": "moreoptions.png",
        "imgShare": "shareactive1.png",
        "lblCount": "+5",
        "lblDesc": "<div>" + "Lorem ipsum doet ipul edicsion ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui... " + "</div>",
        "lblTime": "Thrusday, 3pm",
        "tagText1": "amway",
        "tagText2": "product",
        "tagText3": "amway",
        "tagText4": "amway"
      }
    ];*/
    var data = [], temp;
    for(var i in posts) {
      temp = posts[i];
      data.push({
        flxPost: {shadowDepth: 2},
        countComment: temp.commentsCount,
        countLike: temp.reactions,
        countShare: temp.sharesCount,
        imgArticle: "selena2.jpg",
        imgComment: "commentactive1.png",
        imgLike: "likeactive1.png",
        imgMore: "moreoptions.png",
        imgShare: "shareactive1.png",
        lblCount: temp.tags.length > 4 ? "+"+temp.tags.length-4 : "",
        lblDesc: "<div>" + temp.message.length > 150 ? temp.message.length.substr(150)+"..." : temp.message + "</div>",
        lblTime: temp.createdAt,
        tagText1: temp.tags[0],
        tagText2: temp.tags[1],
        tagText3: temp.tags[2],
        tagText4: temp.tags[3],
        tag1: {isVisible: temp.tags[0] ? true : false},
        tag2: {isVisible: temp.tags[1] ? true : false},
        tag3: {isVisible: temp.tags[2] ? true : false},
        tag4: {isVisible: temp.tags[3] ? true : false},        
      });
    }
    this.view.flxNoPosts.isVisible = data.length === 0;
    kony.print("Posts >> Length = " + data.length);
    kony.print("Posts >> " + JSON.stringify(data));
    this.view.segPosts.setData(data);
  },

  loadEarnings:function(){
    if(tab2Surfed === 1)
    {
      this.animateLine();
      this.animateCounter();
      tab2Surfed = 0;
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