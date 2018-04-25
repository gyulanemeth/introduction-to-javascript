const async = require("async");

const users = {
    user1: {
        name: "user 1",
        posts: [2, 4]
    },
    user2: {
        name: "user 2",
        posts: [0, 1, 3]
    }
};

const posts = [
    {
        title: "post 1",
        description: "descr 1"
    },
    {
        title: "post 2",
        description: "descr 2"
    },
    {
        title: "post 3",
        description: "descr 3",
        comments: [0, 1]
    },
    {
        title: "post 4",
        description: "descr 4"
    },
    {
        title: "post 5",
        description: "descr 5"
    }
];

const comments = [
    "this is just baaaad",
    "you are not so great"
];

const db = {
    users: users,
    posts: posts,
    comments: comments
};

function asyncFetch(collection, id, callback) {
    setTimeout(function() {
        callback(db[collection][id]);
    }, 5000);
}

/*
asyncFetch("users", "user1", function(user) {
    console.log("user", user);

    if (!user.posts) {
        return;
    }

    user.posts.forEach(postId => {
        asyncFetch("posts", postId, post => {
            console.log("post", post);

            if (!post.comments) {
                return;
            }

            post.comments.forEach(commentId => {
                asyncFetch("comments", commentId, comment => {
                    console.log("comment", comment);
                })
            })
        });
    });
});
*/

/*
asyncFetch("users", "user1", function(user) {
    console.log("user", user);

    if (!user.posts) {
        return;
    }

    async.each(user.posts, (postId, callback) => {
        asyncFetch("posts", postId, post => {
            console.log("post", post);
            callback();
        });
    }, () => {
        console.log("done");
    });

    /*
    user.posts.forEach(postId => {
        asyncFetch("posts", postId, post => {
            console.log("post", post);

            if (!post.comments) {
                return;
            }

            post.comments.forEach(commentId => {
                asyncFetch("comments", commentId, comment => {
                    console.log("comment", comment);
                })
            })
        });
    });
    //
});
*/

let myFirstPromise = new Promise((resolve, reject) => {
// We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
// In this example, we use setTimeout(...) to simulate async code. 
// In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
        if (Math.random() > 0.5) {
            resolve("Success!"); // Yay! Everything went well!
        } else {
            reject(":(");
        }
    }, 2000);
});

/*
myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
})
.catch(err => {
    console.log("nope", err);
});
*/

async function firstAsyncFunction() {
    try {
        const result = await myFirstPromise;

        console.log(result);
    } catch (e) {
        console.log("err", e);
    }
}

firstAsyncFunction();



function fetchPromise(collection, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(db[collection][id]);
        }, 1000);
    });
}

/*
fetchPromise("users", "user1").then(user => {
    console.log("user...");
    fetchPromise("posts", user.posts[0]).then(post => {
        console.log("post...");
        fetchPromise("comments", post.comments[0]).then(comment => {
            console.log("comment", comment);
        });
    });
});
*/

async function fetchFirstCommentOfFirstUsersPost() {
    const user = await fetchPromise("users", "user1");
    console.log("user...");
    const post = await fetchPromise("posts", user.posts[0]);
    console.log("post...");
    const comment = await fetchPromise("comments", post.comments[0]);

    console.log("comment", comment);
}

fetchFirstCommentOfFirstUsersPost();
console.log("yopppppp!!!");
