define({ 

  onNavigate: function() {
    this.view.preShow = this.handlePreshow;
  },

  handlePreshow: function() {
    var data = [
      {
        flxCard: {shadowDepth: 4, skin: "sknCardBlue"},
        imgProfile: "dummy.jpg",
        badge: "badgeblue.png",
        lblInfo: "<div><b>John</b> liked your post.</div>"
      },
      {
        flxCard: {shadowDepth: 4, skin: "sknCardOrange"},
        imgProfile: "dummy.jpg",
        badge: "badgeorange.png",
        lblInfo: "<div><b>Max</b> commented on your post.</div>"
      },
      {
        flxCard: {shadowDepth: 4, skin: "sknCardGreen"},
        imgProfile: "dummy.jpg",
        badge: "badgegreen.png",
        lblInfo: "<div><b>Jennifer</b> reacted HAHA on your post.</div>"
      }
    ];

    this.view.segPosts.setData([]);
    this.view.segPosts.setData(data);
  }

});