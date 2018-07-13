define({ 

  onNavigate:function(){
    controllerReference = this;
    this.view.preShow = this.handlePreshow;
  },

  handlePreshow:function(){
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
    }else if(tabId == 2){
      this.getEarnings();
    }
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

  myEarnings:function(){
    var chart = this.kdv_createChartWidget();
    this.view.flxGraph.add(chart);
  },

  getEarnings:function(){
    var chart = this.kdv_createChartWidget1();
    this.view.flxDialer.add(chart);
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



  kdv_createChartWidget1:function() {
    var chartObj = this.kdv_createChartJSObject1();
    var chartWidget = new kony.ui.Chart2D3D({
      "id": "chartid1",
      "isVisible": true,
      "top":"30%",
      "height":"80%"
    }, {
      "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "containerWeight": 100
    }, chartObj);
    return chartWidget;
  },


  kdv_createChartJSObject1:function() {

    var chartJSObj =
        {
          "chartProperties":
          {
            "drawEntities":["dialerChart"],
            "chartHeight":200,

            "dialerChart":
            {
              "radius" : 100,

              //Change the below option to get different viewArea


              "viewArea" : "topHalf",
              "animations":{"onInitAnimation":true },
              "background" :
              {
                "transparency": 100
              },

              "axis":["axisOne"],

              "axisOne":
              {
                "visible" : true,
                "radius" : 150,

                "startValue" : 10,
                "endValue" : 40,

                "majorIntervals": 3,
                "minorIntervals": 5,

                //Change the below properties to reflect viewArea accordingly 

                "startAngle" : 90,
                "endAngle" : 270,
                "lineColors" :
                [
                  {
                    "fromAngle" : 90,
                    "toAngle" : 150,
                    "color" : "0x00c876ff"
                  },
                  {
                    "fromAngle" : 150,
                    "toAngle" : 210,
                    "color" : "0x20d6b2ff"
                  },
                  {
                    "fromAngle" : 210,
                    "toAngle" : 270,
                    "color" : "0x0092b6ff"
                  }
                ],
                "lineWidth" : 20,

                "intervalMarks":
                {
                  "visible": true,

                  "major":
                  {
                    "visible": true,
                    "placement": "outsideAxis",
                    "length": -3,

                    "line":
                    {
                      "width":[3],
                      "color":["0x000000ff"],
                      "transparency":[0]
                    },

                    "labels":
                    {
                      "visible": true,
                      "placement": "outsideAxis",
                      "gap": 0,
                      "orientationAngle": 0,

                      "font":
                      {
                        "family":["Verdana"],
                        "style":["normal"],
                        "size":[20],
                        "transparency":[0],
                        "color":["0x616161ff"]
                      }
                    }
                  },

                  "minor":
                  {
                    "visible": true,
                    "placement": "outsideAxis",
                    "length": -1.5,

                    "line":
                    {
                      "width":[1],
                      "color":["0x000000ff"],
                      "transparency":[0]
                    },

                    "labels":
                    {
                      "visible": false
                    }
                  }
                },

                "pointer":
                {
                  "visible" : true,
                  "radius" : 140,

                  "borderLine":
                  {
                    "width":[2],
                    "visible":true,
                    "color":["0x000000ff"],
                    "transparency":[50]
                  },

                  "background" : 
                  {

                    "fillType": "gradient",
                    "color": ["0x00c876ff", "0xffffffff"]
                  }
                }
              }
            }
          }
          ,

          "chartData":
          {
            "columnNames":
            {
              "values":["Amount1"]
            },
            "data":
            {
              "Amount1":[30]
            },
            "rowNames":
            {
              "values":["aaa"]
            }
          }
        };
    return chartJSObj;

  }



});