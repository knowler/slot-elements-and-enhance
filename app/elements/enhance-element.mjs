export default function EnhanceElement({ html }) {
  return html`
    <style>
      :host {
        position: relative;
        display: block;
        border: 0.25rem dotted DodgerBlue;
        padding: 1rem;
        margin-block-start: 0.75rem;
      }

      :host::before {
        content: "Host element";
        position: absolute;
        background-color: Canvas;
        color: DodgerBlue;
        font-weight: 700;
        font-variation-settings: "wdth" 150;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        inset-block-start: -1em;
        padding-inline: 0.5rem;
      }
    </style>
    <slot></slot>
  `
}
