function customRender(reactElement, mainContiner) {

    /* we can say its version 1 of our custom react
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    mainContiner.appendChild(domElement);
    */


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContiner.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContiner = document.getElementById("root");

customRender(reactElement, mainContiner);