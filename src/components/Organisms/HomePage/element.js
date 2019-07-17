import { LitElement, html } from "lit-element";

class MyElement extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array }
    };
  }
  constructor() {
    super();
    this.message = "";
    this.myArray = [];
    this.myBool = false;
  }
  render() {
    return html`
      <p>${this.message}</p>
      <ul>
        ${this.myArray.map(
          item =>
            html`
              <li>${item}</li>
            `
        )}
      </ul>
      ${this.myBool
        ? html`
            <p>Render some HTML if myBool is true</p>
          `
        : html`
            <p>Render some other HTML if myBool is false</p>
          `}
      <button @click=${this.clickHandler}>Click</button>
    `;
  }
  clickHandler(event) {
    console.log(event.target);
    this.myBool = !this.myBool;
  }
}

customElements.define("simple-greeting", MyElement);
