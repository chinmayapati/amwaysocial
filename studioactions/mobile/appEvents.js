define({
    AS_AppEvents_a3051af2e8b44b61987967201295852b: function AS_AppEvents_a3051af2e8b44b61987967201295852b(eventobject) {
        var self = this;
        kony.application.setApplicationProperties({
            "statusBarColor": "84b8fc",
            "statusBarForegroundColor": "ffffff"
        });
        kony.application.setApplicationBehaviors({
            "hideDefaultLoadingIndicator": true
        });
        // Get Me
        get(baseUrl, "Me");
        // Get Posts
        get(baseUrl + "posts", "Posts");
        // Get Notifications
        get(baseUrl + "notifications", "Notifications");
        // Get Traffic
        get(baseUrl + "traffic", "Traffic");
        // Get Earnings
        get(baseUrl + "earnings", "Earnings");
    }
});