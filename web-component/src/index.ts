declare global {
  interface HTMLElementTagNameMap {
    'github-corners': GithubCorners;
  }
  namespace JSX {
    interface IntrinsicElements {
      'github-corners': Partial<GithubCorners> | {
        style?: Partial<CSSStyleDeclaration> | React.CSSProperties;
      };
    }
  }
}

const TEMPLATE = document.createElement("template");
TEMPLATE.innerHTML = `
<style>
:host a:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%, 100% {
    transform: rotate(0);
  }
  20%, 60% {
    transform: rotate(-25deg);
  }
  40%, 80% {
    transform: rotate(10deg);
  }
}
@media (max-width:500px) {
  :host a:hover .octo-arm {
    animation: none;
  }
  :host .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
<a id="warpper">
  <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255); position: absolute; border: 0px; top: 0px;">
    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
    <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>
    <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
  </svg>
</a>
`;

export class GithubCorners extends HTMLElement {
  /** Sets the z-order of a positioned element and its descendants or flex items. */
  'z-index'?: string;
  height?: string;
  width?: string;
  href?: string;
  color?: string;
  fill?: string;
  position?: string;
  target?: string;
  top?: string;
  left?: string;
  right?: string = '0';
  bottom?: string;
  transform?: string;
  warpper?: HTMLElement;
  static get observedAttributes(): string[] {
    return ['z-index', 'target', 'height', 'width', 'href', 'color', 'fill', 'position', 'top', 'left', 'right', 'bottom', 'transform'];
  }
  constructor() {
    super();
    this.initDom();
  }
  private initDom() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.ownerDocument.importNode(TEMPLATE.content, true));
    this.warpper = shadow.getElementById('warpper');

    this.update();
  }
  update() {
    const svg = this.warpper.querySelector('svg')
    ;[...this.getAttributeNames(), 'right'].forEach((name) => {
      if (/(z-index|height|width|color|fill|position|top|left|right|bottom|transform)/.test(name.toLocaleLowerCase())) {
        svg.style[name as any] = this.getAttribute(name) || this[name as keyof GithubCorners] as any;
      } else {
        this.warpper.setAttribute(name, this.getAttribute(name) || this[name as keyof GithubCorners] as any);
      }
    });
  }
  connectedCallback() {
    this.update()
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.update()
  }
}

customElements.define('github-corners', GithubCorners);