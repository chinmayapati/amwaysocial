const log = require("debug")("amway:log");
const express = require("express");
const app = express();
const fb = require("./apis/graph");

app.use(express.json());

let posts = [], earnings = {}, traffic = [], notifications = [], me = {};

// Initial Run
async function run() {
    me = await fb.me();
    posts = await fb.getPosts();
    earnings = await fb.getEarnings();
    traffic = await fb.getTraffic();
    notifications = await fb.getNotifications(posts);
};
run();

setInterval(async () => { 
    posts = await fb.getPosts(); 
    notifications = await fb.getNotifications(posts);
}, 5*60*1000);
setInterval(async () => {
    earnings = await fb.getEarnings();
    traffic = await fb.getTraffic();
}, 5*60*1000);

app.get("/", (req, res) => {
    res.send(me);
});
app.get("/posts", async (req, res) => {
    let data = fb.filterResponse(posts);
    log("Sending", data);
    res.send( data );
});
app.get("/earnings", async (req, res) => {
    // let e = await fb.getEarnings();
    res.send( earnings );    
});
app.get("/traffic", async (req, res) => {
    res.send( traffic );
});
app.get("/notifications", async (req, res) => {
   res.send(notifications); 
});

app.listen(process.env.PORT || 3000, () => log("Server Started..."));