define({ 

  onNavigate: function() {
    this.view.preShow = this.handlePreshow;
  },
  
  handlePreshow: function() {
    var data = [
        {
//           	"imgClock": "time.png",
          	"lblTime": "<div>3<sup>rd</sup> July, 2018 @ 3:15 PM</div>",
          	"flxPost": {
              	"shadowDepth": 2
            },
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
                "src": "wall2.png"
            },
            "imgComment": {
                "src": "commentactive.png"
            },
            "imgLike": {
                "src": "likeactive.png"
            },
            "imgMore": {
                "src": "moreoptions.png"
            },
            "imgShare": {
                "src": "shareactive.png"
            },
            "lblCount": {
                "text": "+5"
            },
            "lblDesc": {
                "text": "<div>Lorem ipsum doet ipul edicsion ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui </div>"
            },
            "tagText1": {
                "text": "#tag1"
            },
            "tagText2": {
                "text": "#tag2"
            },
            "tagText3": {
                "text": "#tag3"
            }
        },
        {
//           	"imgClock": "time.png",
          	"lblTime": "<div>3<sup>rd</sup> July, 2018 @ 3:15 PM</div>",
          	"flxPost": {
              	"shadowDepth": 2
            },
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
                "src": "wall2.png"
            },
            "imgComment": {
                "src": "commentactive.png"
            },
            "imgLike": {
                "src": "likeactive.png"
            },
            "imgMore": {
                "src": "moreoptions.png"
            },
            "imgShare": {
                "src": "shareactive.png"
            },
            "lblCount": {
                "text": "+5"
            },
            "lblDesc": {
                "text": "<div>Lorem ipsum doet ipul edicsion ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui </div>"
            },
            "tagText1": {
                "text": "tag1"
            },
            "tagText2": {
                "text": "tag2"
            },
            "tagText3": {
                "text": "tag3"
            }
        },
        {
//           	"imgClock": "time.png",
          	"lblTime": "<div>3<sup>rd</sup> July, 2018 @ 3:15 PM</div>",
          	"flxPost": {
              	"shadowDepth": 2
            },
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
                "src": "wall2.png"
            },
            "imgComment": {
                "src": "commentactive.png"
            },
            "imgLike": {
                "src": "likeactive.png"
            },
            "imgMore": {
                "src": "moreoptions.png"
            },
            "imgShare": {
                "src": "shareactive.png"
            },
            "lblCount": {
                "text": "+5"
            },
            "lblDesc": {
                "text": "<div>Lorem ipsum doet ipul edicsion ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui iasetyio ok jyui </div>"
            },
            "tagText1": {
                "text": "tag1"
            },
            "tagText2": {
                "text": "tag2"
            },
            "tagText3": {
                "text": "tag3"
            }
        }
    ];
    
    this.view.segPosts.setData(data);
  }

});