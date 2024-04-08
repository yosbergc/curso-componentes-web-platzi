class userComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
    }
    static get observedAttributes() {
        return ["nombre", "apellido", "sourcesita"];
    }
    attributeChangedCallback(atributo, oldValue, newValue) {
        if (atributo === "nombre") {
            this.nombre = newValue;
        }
        if (atributo === "apellido") {
            this.apellido = newValue;
        }
        if (atributo === "sourcesita") {
            this.sourcesita = newValue;
        }
    }
    setTemplate() {
        let template = document.createElement('template');
        template.innerHTML = `<div>
        <img src="${this.sourcesita}">
        <p class="nombre"><span>${this.nombre} ${this.apellido}</span></p>
        </div>
        ${this.getStyle()}`
        return template;
    }
    getStyle() {
        return `<style>
            :host {
                font-size: 15px;
            }
            * {
                font-family: "Poppins", sans-serif;
            }
            span {
                font-weight: 600;
            }
            div {
                display: inline-block;
                padding: 5px 20px;
                display: flex;
                gap: 10px;
                justify-content: space-between;
                border-radius: 10px;
                width: fit-content;
                align-items: center;
                border: 1px solid #dbdbdb;
                transition: 0.4s;
                margin: 5px;
            }
            div:hover {
                background-color: black;
                color: white;
                cursor: pointer;
            }
            img {
                border-radius: 50%;
                width: 30px;
                height: 30px;
                objet-fit: cover;
            }
        </style>`
    }
    render() {
        this.shadowRoot.appendChild(this.setTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define('user-component', userComponent);