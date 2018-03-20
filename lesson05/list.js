function createList({title, children = [], parent}) {
    const titleTextNode = document.createTextNode(title);
    const titleH2 = document.createElement("h2");
    titleH2.appendChild(titleTextNode);

    const wrapper = document.createElement("div");
    wrapper.classList.add("stc-list");

    const childrenWrapper = document.createElement("div");
    childrenWrapper.classList.add("stc-children");

    wrapper.appendChild(titleH2);
    wrapper.appendChild(childrenWrapper);
    
    parent.appendChild(wrapper);
    
    let interface = {};

    Object.defineProperty(interface, "title", textProp({
        value: title,
        textNode: titleTextNode
    }));

    interface.children = children.map(child => createCard({
        title: child.title,
        parent: childrenWrapper
    }));

    function addChild({title}) {
        interface.children.push(createCard({
            title,
            parent: childrenWrapper
        }));
    }

    interface.addChild = addChild;

    return interface;
}