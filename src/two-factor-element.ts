import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * TwoFactor Code Entry element.
 */
@customElement('two-factor')
export class TwoFactorElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `

  /**
   * The length of the two factor auth code
   * By default this is set to 6 which is common for most 2FA codes
   */
  @property({ type: Number, attribute: 'length' })
  codeLength = 6;

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
