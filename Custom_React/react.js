function CustomRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    //props applied safely
    // domElement.setAttribute("href", reactElement.props.href);
    // domElement.setAttribute("target", reactElement.props.target);

    // mainContainer.appendChild(domElement);

    // Set all props dynamically
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    //children key
    children: "click me to visit google"
};

const mainContainer = document.getElementById("root");

CustomRender(reactElement, mainContainer);
