function get(url, intent) {
  kony.print("Request url >> " + url);
  switch(intent) {
    case "Me":
      user = {
        "name": "Kartik Mehra",
        "id": "1866831260039602"
      };
      break;
    case "Posts":
      var tempPosts = [
        {
          "message": "test9",
          "created_time": "2018-07-16T10:04:30+0000",
          "id": "1866831260039602_1870720559650672",
          "reactions": "1",
          "comments": [
            {
              "created_time": "2018-07-16T10:04:40+0000",
              "from": {
                "name": "Kartik Mehra",
                "id": "1866831260039602"
              },
              "message": "hhsfvs"
            }
          ],
          "shares": [],
          "tags": [
            "#amway"
          ],
          "createdAt": "Monday, 10:04 AM",
          "commentsCount": "1",
          "sharesCount": "0"
        },
        {
          "message": "test6",
          "created_time": "2018-07-16T07:41:58+0000",
          "id": "1866831260039602_1870584312997630",
          "reactions": "1",
          "comments": [
            {
              "created_time": "2018-07-16T07:42:14+0000",
              "from": {
                "name": "Kartik Mehra",
                "id": "1866831260039602"
              },
              "message": "dummmy"
            },
            {
              "created_time": "2018-07-16T07:42:17+0000",
              "from": {
                "name": "Kartik Mehra",
                "id": "1866831260039602"
              },
              "message": "ymmug"
            }
          ],
          "shares": [],
          "tags": [
            "#amway"
          ],
          "createdAt": "Monday, 7:41 AM",
          "commentsCount": "2",
          "sharesCount": "0"
        },
        {
          "message": "test4",
          "created_time": "2018-07-16T07:19:43+0000",
          "id": "1866831260039602_1870562169666511",
          "reactions": "1",
          "comments": [],
          "shares": [],
          "tags": [
            "#amway"
          ],
          "createdAt": "Monday, 7:19 AM",
          "commentsCount": "0",
          "sharesCount": "0"
        },
        {
          "message": "test1",
          "created_time": "2018-07-16T07:01:10+0000",
          "id": "1866831260039602_1870535696335825",
          "reactions": "1",
          "comments": [],
          "shares": [],
          "tags": [
            "#amway"
          ],
          "createdAt": "Monday, 7:01 AM",
          "commentsCount": "0",
          "sharesCount": "0"
        },
        {
          "message": "Test Post",
          "created_time": "2018-07-16T06:32:46+0000",
          "id": "1866831260039602_1870507059672022",
          "reactions": "1",
          "comments": [],
          "shares": [],
          "tags": [
            "#amway"
          ],
          "createdAt": "Monday, 6:32 AM",
          "commentsCount": "0",
          "sharesCount": "0"
        }
      ];

      // Sync With Store
      for(var i in tempPosts) {
        for(var j in posts) {
          if(!posts[j].lblDesc) continue;
          posts[j].lblDesc.text = posts[j].lblDesc.text.replace("<div>","").replace("</div>","");
          if( posts[j].lblDesc.text == tempPosts[i].message ) {
            posts[j].countLike.text = tempPosts[i].reactions;
            posts[j].countComment.text = tempPosts[i].commentsCount;
            posts[j].countShare.text = tempPosts[i].sharesCount;              
          }
        }
      }
      kony.print("Post Updating >> " + JSON.stringify(posts) );
      break;
    case "Traffic":
      traffic = [
        16,
        17,
        17,
        24,
        16,
        18,
        23,
        23,
        24,
        7,
        1,
        5
      ];
      break;
    case "Earnings":
      earnings = {
        "totalEarnings": {
          "amount": 9693,
          "level": 9
        },
        "chainEarnings": {
          "amount": 3457,
          "connections": 106,
          "depth": 1
        }
      };
      break;
    case "Notifications":
      notifications = [
        {
          "msg": "<div><b>Kartik Mehra</b> liked  your post.</div>",
          "userType": 1
        },
        {
          "msg": "<div><b>Kartik Mehra</b> commented on your post.</div>",
          "userType": 2,
          "comment": "hhsfvs",
          "createdAt": "16/07/2018 @ 10:4 AM"
        },
        {
          "msg": "<div><b>Kartik Mehra</b> reacted HAHA on your post.</div>",
          "userType": 1
        },
        {
          "msg": "<div><b>Kartik Mehra</b> commented on your post.</div>",
          "userType": 2,
          "comment": "ymmug",
          "createdAt": "16/07/2018 @ 07:42 AM"
        },
        {
          "msg": "<div><b>Kartik Mehra</b> commented on your post.</div>",
          "userType": 2,
          "comment": "ymmug",
          "createdAt": "16/07/2018 @ 07:42 AM"
        },
        {
          "msg": "<div><b>Kartik Mehra</b> liked  your post.</div>",
          "userType": 1
        },
        {
          "msg": "<div><b>Kartik Mehra</b> liked  your post.</div>",
          "userType": 1
        },
        {
          "msg": "<div><b>Kartik Mehra</b> liked  your post.</div>",
          "userType": 1
        }
      ];
      kony.print("Response >> new notifications : " + JSON.stringify(notifications));
      break;
  }

  //request.open(constants.HTTP_METHOD_GET, url);
  //request.send();
}

function responseCallBackMe(){
  try{
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
      kony.print("Response >> "+ JSON.stringify(this.responseText));
      user = JSON.parse(this.responseText);
    }
  }catch(e){
    kony.print("Response >> Exception is " + e);
  }
}

function responseCallBackPosts(){
  try{
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
      kony.print("Response >> "+ JSON.stringify(this.responseText));
      var tempPosts = JSON.parse(this.responseText);
      
      // Sync With Store
      var storedPosts = JSON.parse(kony.store.getItem("posts"));
      kony.print("Match Greet>> " + JSON.stringify(storedPosts));
      for(var i in tempPosts) {
//         for(var j in storedPosts) {
//           if( !storedPosts[j].lblDesc ) continue;
//           if( !posts[j].lblDesc ) continue;
//           storedPosts[j].lblDesc.text = storedPosts[j].lblDesc.text.replace("<div>","").replace("</div>","");
//           posts[j].lblDesc.text = tempPosts[j].lblDesc.text.replace("<div>","").replace("</div>","");
          
//           if( tempPosts[i].message == storedPosts[j].lblDesc.text ) {
//             storedPosts[j].countLike = tempPosts[i].reactions;
//             storedPosts[j].countComment = tempPosts[i].commentsCount;
//             storedPosts[j].countShare = tempPosts[i].sharesCount;              
//           }
//           if( tempPosts[i].message == posts[j].lblDesc.text ) {
//             posts[j].countLike = tempPosts[i].reactions;
//             posts[j].countComment = tempPosts[i].commentsCount;
//             posts[j].countShare = tempPosts[i].sharesCount;              
//           }
//         }
        for(var j in posts) {
          if(!posts[j].lblDesc) continue;
          posts[j].lblDesc.text = posts[j].lblDesc.text.replace("<div>","").replace("</div>","");
          if( posts[j].lblDesc.text == tempPosts[i].message ) {
            posts[j].countLike.text = tempPosts[i].reactions;
            posts[j].countComment.text = tempPosts[i].commentsCount;
            posts[j].countShare.text = tempPosts[i].sharesCount;              
          }
        }
      }
      kony.print("Post Updating >> " + JSON.stringify(posts) );

//       kony.store.setItem("posts", JSON.stringify(storedPosts));
      
    }
  }catch(e){
    kony.print("Response >> Exception is " + e);
  }
}

function responseCallBackNotifications(){
  try{
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
      kony.print("Response >> "+ JSON.stringify(this.responseText));
      notifications = JSON.parse(this.responseText);
      kony.print("Response >> new notifications : " + JSON.stringify(notifications));
    }
  }catch(e){
    kony.print("Response >> Exception is " + e);
  }
}

function responseCallBackEarnings(){
  try{
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
      kony.print("Response >> "+ JSON.stringify(this.responseText));
      earnings = JSON.parse(this.responseText);
    }
  }catch(e){
    kony.print("Response >> Exception is " + e);
  }
}

function responseCallBackTraffic(){
  try{
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
      kony.print("Response >> "+ JSON.stringify(this.responseText));
      traffic = JSON.parse(this.responseText);
    }
  }catch(e){
    kony.print("Response >> Exception is " + e);
  }
}

function fetchData() {
  kony.print("Response >> fetch data called");
  var baseUrl = "https://amway-chinmayapati.c9users.io/";
 
  // Get Me
  get(baseUrl, "Me");

  // Get Posts
  get(baseUrl+"posts", "Posts");

  // Get Notifications
  get(baseUrl+"notifications", "Notifications");

  // Get Traffic
  get(baseUrl+"traffic", "Traffic");

  // Get Earnings
  get(baseUrl+"earnings", "Earnings");
}

function registerServiceCall() {
  try {
    kony.print("Response >> Service registered");
    kony.timer.schedule("fetchData", fetchData, 15, true);
  } catch(e) { kony.print("Fetching Data Failed"); }
}