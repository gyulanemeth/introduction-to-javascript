function createBoard(config){
    let title = config.title;
    let children = config.children;
    let parent = config.parent;

    let data = {
        title,
        children
    }

    let domElements = {
        title: document.createTextNode(title),
        children: document.createElement("div"),
        container: document.createElement("div")
    };

    domElements.container.appendChild(domElements.title);
    domElements.container.appendChild(domElements.children);
    parent.appendChild(domElements.container);

    let interface = {
        almafa: 1
    };

    let titleParams = {
        interface,
        config:{
            data: data,
            textNode: domElements.title
        }
    };

    titleHandler(titleParams);

    return interface;
};

function titleHandler({interface, config}){
    Object.defineProperty(interface, "title", {
        set: (newTitle) => {
            config.data.title = newTitle;
            config.textNode.textContent = newTitle;
        },
        get: () => {
            return config.title;
        }
    });
}

let awsomeboard = createBoard({
    title:"String",
    children: [],
    parent: document.getElementById("board")
});




board.title = "yo"

let column = {}
let card = {}