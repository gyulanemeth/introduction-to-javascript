function getArticles() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/users/3/articles/5", true);

    xhr.onload = function (e) {
        console.log("articles?", this, e);

        JSON.parse(this.response);
    };

    xhr.send(null);
}


function fetchArticles() {
    fetch("/users/4/articles/2")
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
}

async function fetchAwaitArticles() {
    let result = await fetch("/users/4/articles/2");
    result = await result.json();

    console.log(result);
}