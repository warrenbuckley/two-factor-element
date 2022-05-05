import {css} from 'lit';

export const styles = [
  css`
    :host {
      display: block;
      border: solid 4px gray;
      padding: 16px;
      margin-bottom: 1rem;
    }

    input {
      border: 2px solid black;
      font-size: 6rem;
      font-weight: bold;
      text-align: center;
      margin: 0.25rem;
      width: 5rem;
      border-radius: 1rem;
    }

    input::placeholder {
      opacity: 0.2;
    }

    input:focus {
        outline: 4px solid black;
    }
  `,
];
