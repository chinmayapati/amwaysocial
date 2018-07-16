define({ 

  onNavigate: function() {
    //this.view.postShow = this.handlePostshow;
    this.view.flxMsg.centerY = "50%";
    this.view.flxMsg.isVisible = false;
    this.view.flxLoading.isVisible = true;

    if( !user || !posts || !notifications || !traffic || !earnings ) {
      kony.print("No user data found.");
      try {
        kony.timer.schedule("getuser", this.checkUser, 1, true);
      } catch(e) { kony.print("Error setting timer: " + JSON.stringify(e)); }
    }
    else this.handlePostshow();
    
  },
  handlePostshow: function() {
    if(serviceFailed) {
      this.view.flxMsg.centerY = "30%";
      this.view.lblMsg.text = "Service Failed.";
      this.view.flxLoading.isVisible = false;
      this.view.flxMsg.isVisible = true;
    }
    else {
      this.view.lblMsg.text = "Hello " + (user ? user.name.split(" ")[0] : "John") + "!";

      this.view.flxLoading.isVisible = false;
      this.view.flxMsg.isVisible = true;
      animate(this.view.flxMsg, { centerY: "30%" }, 1, function(){
        animate(this, {centerY: "30%"}, 1, function(){
          
          // Sync With Store
          var storedPosts = JSON.parse(kony.store.getItem("posts"));
          kony.print("Match Greet>> " + JSON.stringify(storedPosts));
          for(var i in posts) {
            for(var j in storedPosts) {
              if( !storedPosts[j].lblDesc ) continue;
              storedPosts[j].lblDesc.text = storedPosts[j].lblDesc.text.replace("<div>","").replace("</div>","");
              kony.print("Match >> " + posts[i].message + " :: " + storedPosts[j].lblDesc.text);
              if( posts[i].message == storedPosts[j].lblDesc.text ) {
                storedPosts[j].countLike = posts[i].reactions;
                storedPosts[j].countComment = posts[i].commentsCount;
                storedPosts[j].countShare = posts[i].sharesCount;              
              }
            }
          }
          kony.store.setItem("posts", JSON.stringify(storedPosts));

          var nav = new kony.mvc.Navigation("frmDashBoard");
          nav.navigate(3);
        }, 1);
      });
    }
  },  
  checkUser: function() {
    if(user && user.error) {
      kony.print("Service >> " + JSON.stringify(user.error) );
      kony.timer.cancel("getuser");
      serviceFailed = true;
      this.handlePostshow();      
    }
    else if(user && posts && notifications && traffic && earnings) {
      kony.print("User data found");
      kony.timer.cancel("getuser");      
      requestCounter = 0;
      serviceFailed = false;
      this.handlePostshow();
    }
    else if(requestCounter == 5) {
      kony.timer.cancel("getuser");
      serviceFailed = true;
      this.handlePostshow();
    }

    requestCounter++;
  }
  
});