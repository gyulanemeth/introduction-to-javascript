function createCard({title, parent}) {
    const titleTextNode = document.createTextNode(title);
    
    const wrapper = document.createElement("div");
    wrapper.classList.add("stc-card");

    const titleH3 = document.createElement("h3");
    titleH3.appendChild(titleTextNode);

    wrapper.appendChild(titleH3);
    parent.appendChild(wrapper);

    let interface = {};

    Object.defineProperty(interface, "title", textProp({
        value: title,
        textNode: titleTextNode
    }));

    return interface;
}