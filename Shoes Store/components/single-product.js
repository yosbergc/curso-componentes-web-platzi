class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    static get observedAttributes() {
        return ["name", "description", "price", "productsrc"]
    }
    attributeChangedCallback(atributo, oldValue, newValue) {
        if (atributo === "name") {
            this.name = newValue;
        }
        if (atributo === "description") {
            this.description = newValue;
        }
        if (atributo === "price") {
            this.price = newValue;
        }
        if (atributo === "productsrc") {
            this.productsrc = newValue;
        }
    }
    getTemplate() {
        let template = document.createElement('template');
        template.innerHTML = `<article>
            <section class="img-container">
                <img src="${this.productsrc}">
            </section>
            <section>
                <div>
                    <h2>Hello World</h2>
                    <p>${this.description}</p>
                    <div class="bottom">
                        <h3>300$</h3>
                        <button>Comprar ahora</button>
                    </div>
                </div>
            </section>
        </article>
        ${this.getStyle()}`
        return template;
    }
    getStyle() {
        return `<style>
            article {
                width: calc(100% - 40px);
                max-width: 1000px;
                margin: 0 auto;
                padding: 20px;
                background-color: white;
                font-family: "Roboto", sans-serif;
                border-radius: 5px;
            }
            h2 {
                font-weight: 700;
                font-size: 1.8rem;
            }
            h3 {
                font-size: 1.5rem;
                font-weight: 400;
            }
            .bottom {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            button {
                background-color: #0954ed;
                border: none;
                border-radius: 20px;
                padding: 10px 20px;
                color: white;
                font-weight: 700;
                transition: 0.3s;
            }
            img {
                width: 100%;
                max-height: 50vh;
                margin-bottom: -50px;
                object-fit: contain;
            }
            .img-container {
                background-color: #3074ff;
                border-radius: 5px;
                position: relative;
            }
            @media (min-width: 1000px) {
                article {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 20px;
                    min-height: 50vh;
                    align-items: stretch;
                }
                .img-container {
                    display: grid;
                    align-items: center;
                    margin-bottom: 0;
                }
                h2 {
                    font-size: 3rem;
                }
                h3 {
                    font-size: 2rem;
                }
                p {
                    font-size: 1.3rem;
                }
                button {
                    font-size: 1.2rem;
                }
                button:hover {
                    cursor: pointer;
                    background-color: black;
                }
            }
        </style>`
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define('product-card', productCard);