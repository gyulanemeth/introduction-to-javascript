function createBoard({title, children = [], parent}) {
    const titleTextNode = document.createTextNode(title);
    const titleH1 = document.createElement("h2");
    titleH1.appendChild(titleTextNode);

    const wrapper = document.createElement("div");
    wrapper.classList.add("stc-board");

    const childrenWrapper = document.createElement("div");
    childrenWrapper.classList.add("stc-children");

    wrapper.appendChild(titleH1);
    wrapper.appendChild(childrenWrapper);
    
    parent.appendChild(wrapper);

    let interface = {};

    Object.defineProperty(interface, "title", textProp({
        value: title,
        textNode: titleTextNode
    }));

    interface.children = children.map(child => createList({
        title: child.title,
        children: child.children,
        parent: childrenWrapper
    }));

    function addChild({title}) {
        interface.children.push(createList({
            title,
            parent: childrenWrapper
        }));
    }

    interface.addChild = addChild;

    return interface;
}