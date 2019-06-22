[![Build Status](https://travis-ci.org/anypoint-web-components/anypoint-icons.svg?branch=master)](https://travis-ci.org/anypoint-web-components/anypoint-icons)

[![Published on NPM](https://img.shields.io/npm/v/@anypoint-web-components/anypoint-icons.svg)](https://www.npmjs.com/package/@anypoint-web-components/anypoint-icons)

# anypoint-icons

A set of icons for Anypoint web components.

## Usage

### Installation
```sh
npm install --save @anypoint-web-components/anypoint-icons
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@anypoint-web-components/anypoint-icons/anypoint-icons.js';
      import '@polymer/iron-icon/iron-icon.js';
    </script>
  </head>
  <body>
    <iron-icon icon="anypoint:add"></iron-icon>
  </body>
</html>
```

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import '@anypoint-web-components/anypoint-icons/anypoint-icons.js';
import '@polymer/iron-icon/iron-icon.js';

class SampleElement extends LitElement {
  render() {
    return html`
    <iron-icon icon="anypoint:add"></iron-icon>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Development

```sh
git clone https://github.com/anypoint-web-components/anypoint-icons
cd anypoint-icons
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
npm test
```
