const dateformat = require("dateformat");
const random_name = require("node-random-name");
const _ = require("lodash");
const log = require("debug")("amway:graph");
const FB = require('fb');
let accessToken = "EAACwKvFgKA8BALOVSS3PKDhoeME2ZB1JKx0zKagywjm7xyi9IPn4D8jcG6jnYzneaEuJfnZCKkyeJGkmZApWZAMiUOVaM6Ec9VwWGITlGkvO3rC0TS2sTh3e3OIWyRX4GXvuuXpiOOBfIyIriyvy0ZBlczNpZCr2sZBK62fUZCLW1LAGlUxJEKFkiFylsOx9Iow0IQg2nTMbuQZDZD";
FB.setAccessToken(accessToken);
//FB.options({version: "2.2"});

setTimeout(() => { extentToken(accessToken); }, 30*60*1000);

function getNames() {
    const names = {};
    let name;
    while(Object.keys(names).length < 6) {
        name = random_name();
        names[name] = 1;
    }
    return Object.keys(names);
}

function me() {
    return new Promise((resolve, reject) => {
        FB.api("me", (res) => {
            if(res.err || !res) { log(res); return resolve({}); }
            resolve(res);
        });
    });
}

function getComments(postid) {
    return new Promise((resolve, reject) => {
        FB.api(postid + "/comments", (res) => {
            if(res.err) { log(res.error); resolve([]); }
            
            let comments = [];
            res.data.forEach(i => comments.push(_.pick(i, ["created_time", "from", "message"])));
            
            log("Comments Response",comments);
            resolve(comments);
        });
    });
}

function getReactions(postid) {
    return new Promise((resolve, reject) => {
        FB.api(postid + "/reactions", (res) => {
            if(res.err) { log(res.error); resolve([]); }
            
            log(res.data);
            resolve(res.data);
        });
    });

}

function getShares(postid) {
    return new Promise((resolve, reject) => {
        FB.api(postid + "/sharedposts", (res) => {
            if(res.err) { log(res.error); resolve([]); }
            
            log(res.data);
            resolve(res.data);
        });
    });
}

function getPosts() {
    
    return new Promise( (resolve, reject) => {
        FB.api("me/feed", async (res) => {
            if( res.error || !res.data ) { log(res.error); return resolve([]); }
            
            log("Total Posts Count: ", res.data.length);
    
            const regexp = new RegExp(/#amway/g);
            const tagexp = new RegExp(/#[a-zA-Z]+/g);
            let posts = res.data.filter(i => regexp.test(i.message) );
    
            log("Filtered Posts Count: ", posts.length);
            //log(posts);
            
            for(let i in posts) {
                posts[i].reactions = await getReactions(posts[i].id);
                posts[i].comments = await getComments(posts[i].id);
                posts[i].shares = await getShares(posts[i].id);
                posts[i].tags = posts[i].message.match(tagexp);
                posts[i].message = posts[i].message.replace("#amway ", "");
                posts[i].createdAt = dateformat(new Date(posts[i].created_time), "dddd, h:MM TT");
            }
            
            resolve(posts);
            
        });
    
    });
    
}

function getEarnings() {
    // const names = getNames();
    return new Promise((resolve, reject) => {
        const earnings = { 
            totalEarnings: {
                amount: random(10000),
                level: random(10, true)
            },
            chainEarnings: {
                amount: random(10000),
                connections: random(500),
                depth: random(20, true)
            }
        };
        // for(let i=0; i<6; i++) {
        //     earnings.records.push({
        //         name: names[i],
        //         aboId: "102340"+i,
        //         created_time: dateformat(new Date(), "dd/mm/yyyy @ h:M TT"),
        //         points: random(5),
        //         amount: random(100)
        //     });
        // }
        log(earnings);
        resolve(earnings);
    });  
}

function getTraffic() {
    return new Promise((resolve, reject) => {
    
        const traffic = [];        
        for(let i=0; i<12; i++)
            traffic.push( random(30) );
        resolve(traffic);
    });  
}

function getNotifications(posts) {
    log("Notification Posts", posts);
    let notifications = [], notification, temp;
    return new Promise((resolve, reject) => {
        for(let i in posts) {
            // log("Post", i);

            notification = {};
            for(let n in posts[i].reactions) {
                temp = posts[i].reactions[n];                
                notification.msg = "<div><b>" + temp.name + "</b> " + (temp.type=='LIKE' ? "liked " : "reacted " + temp.type + " on") + " your post.</div>";
                notification.userType = 1;
                notifications.push(notification);
            }

            notification = {};
            for(let c in posts[i].comments) {
                temp = posts[i].comments[c];
                notification.msg = "<div><b>" + temp.from.name + "</b> commented on your post.</div>";
                notification.userType = 2;
                notification.comment = temp.message;
                notification.createdAt = dateformat(new Date(temp.created_time), "dd/mm/yyyy @ hh:M TT");
                notifications.push(notification);
            }

        }
        resolve(notifications);
    });  
}

function filterResponse(posts) {
    log("Filtering", posts);
    let temp;
    for(let i in posts) {
        temp = posts[i];
        posts[i].reactions = temp.reactions.length.toString();
        posts[i].commentsCount = temp.comments.length.toString();
        posts[i].sharesCount = temp.shares.length.toString();
        posts[i].message = posts[i].message.replace("#amway ", "");
        posts[i].createdAt = dateformat(new Date(posts[i].created_time), "dddd, h:MM TT");
    }
    return posts;
}

function extentToken(accessToken) {
    return new Promise((resolve, reject) => {
        FB.api('oauth/access_token', {
            client_id: '920594438100677',
            client_secret: '5a64f8fc444a2aabcc13dd4188e66de4',
            grant_type: 'fb_exchange_token',
            fb_exchange_token: accessToken
        }, function (res) {
            if(!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                resolve(accessToken);
            }
     
            resolve(res.access_token);
        });
    });
}

function random(max, nonzero) {
    let r = Math.floor(Math.random() * Math.floor(max));
    return ( nonzero && !r ) ? random(max, nonzero) : r;
}

module.exports = {
    getPosts, getEarnings, getTraffic, getNotifications, me, filterResponse    
}