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
  
  handlePostshow: function () {
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
          var nav = new kony.mvc.Navigation("frmDashBoard");
          nav.navigate();
        }, 1);
      });
    }
  },
  
  checkUser: function() {
    if(user && posts && notifications && traffic && earnings) {
      kony.print("User data found");
      kony.timer.cancel("getuser");      
      requestCounter = 0;
      this.handlePostshow();
    }
    else {
      requestCounter++;
      kony.print("Counter >> " + requestCounter);
      if(requestCounter == 5) {
        kony.timer.cancel("getuser");
        serviceFailed = true;
        this.handlePostshow();
      }
    }
  }
  
});