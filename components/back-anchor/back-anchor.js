const template = `
    <a href="javascript:history.back()">
        <img class="img-back" src="https://raw.githack.com/Harrypotter776/example/main/assets/icons/arrow-back.svg" alt="go back" />
    </a>`;

class BackAnchor extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = template;
    }

    connectedCallback() {
        this.classList.add('primary-button');
        this.classList.add('back-anchor');
        this.shadowRoot.querySelector('.img-back').src = `${this.getAttribute('assetsUrl')}https://raw.githack.com/Harrypotter776/example/main/assets/icons/arrow-back.svg`;
    }
}

customElements.define('back-anchor', BackAnchor);
