function get(url, intent) {
  kony.print("Response >> " + url);
  
  var request = new kony.net.HttpRequest();
  switch(intent) {
    case "Me":
      request.onReadyStateChange = responseCallBackMe;
      break;
    case "Posts":
      request.onReadyStateChange = responseCallBackPosts;
      break;
    case "Traffic":
      request.onReadyStateChange = responseCallBackTraffic;
      break;
    case "Earnings":
      request.onReadyStateChange = responseCallBackEarnings;
      break;
    case "Notifications":
      request.onReadyStateChange = responseCallBackNotifications;
      break;
  }
  
  request.open(constants.HTTP_METHOD_GET, url);
  request.send();
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
      posts = JSON.parse(this.responseText);
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
