define({ 

  onNavigate:function(tab){
    controllerReference = this;
    curTab = tab ?tab :3;
    this.view.preShow = this.handlePreshow;
    this.view.onDeviceBack = function() { kony.application.exit(0); };    
  },
  increamentCustCounter : function()
  {
    if(custCounter <= custCounterVal )
      {
        this.view.custCountLbl.text = "+" + parseInt(custCounter) + " Customers";
        custCounter+=1;
      }
    else
      {
        try
	{
		kony.timer.cancel("mytimer");
	} 
	catch(err)
	{
		alert("error in second button onclick and err is:: "+err);
	}
      }
  },
  increamenttotalCounter : function()
  {
    if(totalEarningCounter <= totalEarningVal )
      {
        this.view.totalEarnedLbl.text = parseInt(totalEarningCounter) + "K";
        totalEarningCounter+=1;
      }
    else
      {
        try
	{
		kony.timer.cancel("totalEarn");
	} 
	catch(err)
	{
		alert("error in second button onclick and err is:: "+err);
	}
      }
  },
  increamentChainCounter : function()
  {
    if(chainEarningCounter <= chainEarningVal )
      {
        this.view.chainEarnedLbl.text = parseInt(chainEarningCounter) + "K";
        chainEarningCounter+=1;
      }
    else
      {
        try
	{
		kony.timer.cancel("chainEarn");
	} 
	catch(err)
	{
		alert("error in second button onclick and err is:: "+err);
	}
      }
  },
  animateCounter : function()
  {
    if(tabFlag===1)
      {
    var customerTimer = parseFloat(1/custCounterVal);
    kony.timer.schedule("customer",this.increamentCustCounter,customerTimer,true);
    var totalEarnTimer = parseFloat(1/totalEarningVal);
    kony.timer.schedule("totalEarn",this.increamenttotalCounter,totalEarnTimer,true);
    var chainEarnTimer = parseFloat(1/chainEarningVal);
    kony.timer.schedule("chainEarn",this.increamentChainCounter,chainEarnTimer,true);
    //alert(totalEarnTimer + " " + chainEarnTimer);
     tabFlag=0; 
      }
},
  animateLine : function() {
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
    //this.posts = JSON.parse(kony.store.getItem("posts"));

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
    
    var blank = true;
    for(var j in post){ 
      if(post[j]) { blank = false; break; }      
    }
    
    if(!blank) {
      posts.unshift(post);      
      kony.store.setItem("posts", JSON.stringify(posts));
    }
    post={};
    this.view.flxNoPosts.isVisible = posts.length===0;
    this.view.segPosts.setData(posts);
    //this.loadNotifications();

    // Set Posts
    // this.loadPosts();
  },
  shareContent:function(){
    var selectedIndex = this.view.segPosts.selectedIndex[1];
    var data = this.view.segPosts.selectedItems[0];
    var description =  data["lblDesc"]["text"];
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
      this.loadPosts();
      this.view.imgLogo.isVisible = true;
      this.view.lblNotifications.isVisible = false;
      this.view.lblTraffic.isVisible = false;
      this.view.lblEarnings.isVisible = false;
    }else{
      this.loadNotifications();
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
      this.loadPosts();
    }else if(tabId == 4) {
      this.loadNotifications();
      this.view.imgLogo.isVisible = false;
      this.view.lblNotifications.isVisible = true;
      this.view.lblTraffic.isVisible = false;
      this.view.lblEarnings.isVisible = false;
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
    //var data = [], temp;
    //     for(var i in posts) {
    //       temp = posts[i];
    //       data.push({
    //         flxPost: {shadowDepth: 2},
    //         countComment: temp.comments,
    //         countLike: temp.reactions,
    //         countShare: temp.shares,
    //         imgArticle: "selena2.jpg",
    //         imgComment: "commentactive1.png",
    //         imgLike: "likeactive1.png",
    //         imgMore: "moreoptions.png",
    //         imgShare: "shareactive1.png",
    //         lblCount: temp.tags.length > 4 ? "+"+temp.tags.length-4 : "",
    //         lblDesc: "<div>" + temp.message.length > 150 ? temp.message.length.substr(150)+"..." : temp.message + "</div>",
    //         lblTime: temp.createdAt,
    //         tagText1: temp.tags[0],
    //         tagText2: temp.tags[1],
    //         tagText3: temp.tags[2],
    //         tagText4: temp.tags[3],
    //         tag1: {isVisible: temp.tags[0] ? true : false},
    //         tag2: {isVisible: temp.tags[1] ? true : false},
    //         tag3: {isVisible: temp.tags[2] ? true : false},
    //         tag4: {isVisible: temp.tags[3] ? true : false},        
    //       });
    //     }
    
    var data = posts;//JSON.parse(kony.store.getItem("posts"));
    kony.print("Post Loading >> " + JSON.stringify(data) );
    this.view.flxNoPosts.isVisible = data.length === 0;
    kony.print("Posts >> Length = " + data.length);
    kony.print("Posts >> " + JSON.stringify(data));
    this.view.segPosts.setData(data);
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
    this.animateCounter();
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