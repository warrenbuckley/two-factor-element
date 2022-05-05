import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles';

/**
 * TwoFactor Code Entry element.
 */
@customElement('two-factor')
export class TwoFactorElement extends LitElement {

  /**
   * CSS Styles that are stored in styles.ts to keep code a little neater
   */
  static styles = styles;

  /**
   * This is a static class field indicating that the element can be used inside a native form and participate in its events.
   * Read more about form controls here https://web.dev/more-capable-form-controls/
   */
  static readonly formAssociated = true;

  /**
   * The constructor of this class & WebComponent
   * Will ensure it assigns the Form Element Internals API for us to consume
   */
     constructor() {
      super();
      this.value = '';
      this._internals = this.attachInternals();
    }
  
    @property({ reflect: false })
    value;

  /**
   * The length of the two factor auth code
   * By default this is set to 6 which is common for most 2FA codes
   */
  @property({ type: Number, attribute: 'length' })
  codeLength = 6;

  /**
   * This stores the Form ElementInternals API
   * https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals
   */
  private _internals:any;

  // Mostly boilerplate--add common form control properties and methods
  // Many are simply wired through to the ElementInternals object.
  get form() { return this._internals.form; }
  get name() { return this.getAttribute('name')};
  get type() { return this.localName; }

  get validity() { return this._internals.validity; }
  get validationMessage() { return this._internals.validationMessage; }
  get willValidate() { return this._internals.willValidate; }

  checkValidity() { return this._internals.checkValidity(); }
  reportValidity() { return this._internals.reportValidity(); }
  


  /**
   * This creates the HTML inside the WebComponent Shadow DOM
   * Where we create an HTML input field for each of the numbers for the code
   * 
   * @returns HTML of the WebComponent in the shadow DOM
   */
  render() {
    const itemTemplates = [];
    for (let i = 0; i < this.codeLength; i++) {
      itemTemplates.push(
        html`<input type="text" 
              size="1" 
              maxlength="1" 
              inputmode="numeric"
              pattern="[0-9]"
              placeholder="${i + 1}" />`
      );
    }

    return html`<div part="code">${itemTemplates}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'two-factor': TwoFactorElement
  }
}
