class miComponente extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"})
    }
    static get observedAttributes() {
        return ["nombre", "edad"];
    }
    attributeChangedCallback(atributo, oldValue, newValue) {
        if (atributo === "nombre") {
            this.nombre = newValue;
        }
        if (atributo === "edad") {
            this.edad = newValue;
        }
    }
    createTemplate() {
        let template = document.createElement('template');
        template.innerHTML = `<section>
        <h2>${this.nombre}</h2>
        <p>Tienes ${this.edad}, felicidades.</p>
        <img>
        </section>
        ${this.getStyles()}`
        return template;
    }
    getStyles() {
        return `<style>
        section {
            background-color: black;
            color: white;
            border-radius: 5px;
            padding: 20px;
        }
        h2 {
            font-weight: 600;
            font-size: 3rem;
        }
        p {
            font-size: 2rem;
        }
        </style>`
    }
    render() {
        this.shadowRoot.appendChild(this.createTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define('mi-componente', miComponente)