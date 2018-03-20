function textProp({value, textNode}){
    return {
        set: (newValue) => {
            value = newValue;
            textNode.textContent = value;
        },
        get: () => {
            return value;
        }
    };
}