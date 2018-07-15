function animate ( element, params, duration, callback, delay ){
  duration = duration || 0.25;
  callback = callback || null;
  delay = delay || 0;
  params.stepConfig = {
    "timingFunction": kony.anim.EASE
  };
  element.animate(
    kony.ui.createAnimation({
      "100": params,
    }), {
      "delay": delay,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": duration
    }, {
      "animationEnd": callback
    });
}


function shareContentAndroid(description , imageName){
  var filePath = kony.io.FileSystem.getExternalStorageDirectoryPath()+"/Download/";
  var sharedDir = filePath+constants.FILE_PATH_SEPARATOR+"images";
  var fileLoc = sharedDir+constants.FILE_PATH_SEPARATOR + imageName +".jpg";
  var KonyMain = java.import("com.konylabs.android.KonyMain"); 
  var Intent = java.import("android.content.Intent");
  var Uri = java.import("android.net.Uri");
  var share = new Intent("android.intent.action.SEND");
  share.setType("image/*");
  share.putExtra(Intent.EXTRA_TEXT,description);
  share.putExtra(Intent.EXTRA_STREAM, Uri.parse("file:///"+fileLoc));
  KonyMain.getActContext().startActivity(Intent.createChooser(share, "Send it on..."));

}


function onAppBackground(){
  if(shared){
    var ntf = new kony.mvc.Navigation("frmDashBoard");
    ntf.navigate(3);
    kony.application.destroyForm("frmNewPost");
    shared = false;
  }

}