class ProductComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
    }
    static get observedAttributes() {
        return ["productname", "productsummary", "productprice", "productimg"]
    }
    attributeChangedCallback(atributo, oldValue, newValue) {
        if (atributo === "productname") {
            this.productName = newValue;
        }
        if (atributo === "productsummary") {
            this.productSummary = newValue;
        }
        if (atributo === "productprice") {
            this.productPrice = newValue;
        }
        if (atributo === "productimg") {
            this.productImg = newValue;
        }
    }
    getTemplate() {
        let template = document.createElement('template');
        template.innerHTML = `<section class="product-single-container">
        <section class="product-image-container">
            <img src="${this.productImg}">
        </section>
        <section class="product-info">
            <div class="product-summary">
                <h2>${this.productName}</h2>
                <p>${this.productSummary}</p>
            </div>
            <div class="product-bottom">
                <p class="product-single-price">${this.productPrice}</p>
                <button type="button">Comprar Ahora</button>
            </div>
        </section>
        </section>
        ${this.getStyle()}`;
        return template;
    }
    getStyle() {
        return `<style>
            :host {
                font-family: "Open Sans", sans-serif;
                margin: 10px;
            }
            .product-single-container {
                padding: 20px;
                border: 1px solid #c7c7c7;
                border-radius: 10px;
            }
            img {
                width: 100%;
                max-height: 400px;
                object-fit: contain;
            }
            .product-image-container {
                border-radius: 10px;
                display: flex;
                width: 100%;
                max-width: 250px;
                heigth: 300px;
            }
            .product-info {
                padding: 10px;
            }
            .product-single-price {
                font-size: 2rem;
                font-weight: 700;
            }
            button {
                background-color: black;
                border: none;
                padding: 15px 20px;
                border-radius: 5px;
                color: white;
                font-size: 1rem;
                font-weight: 600;
            }
            .product-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            @media (min-width: 1200px) {
                .product-single-container {
                    display: flex;
                    gap: 20px;
                    max-width: 1000px;
                    margin: 0 auto;
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
customElements.define('product-single', ProductComponent)