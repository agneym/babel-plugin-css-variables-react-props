# Babel Plugin - CSS Variables as React props

Set CSS variables on your elements as React props.

<p>
  <a href="https://www.npmjs.com/package/babel-plugin-css-variables-react-props" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/babel-plugin-css-variables-react-props">
  </a>
  <a href="https://github.com/agneym/babel-plugin-css-variables-react-props/actions">
    <img src="https://github.com/agneym/babel-plugin-css-variables-react-props/workflows/Node%20CI/badge.svg" />
  </a>
  <a href="https://github.com/agneym/babel-plugin-css-variables-react-props/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/agneym/babel-plugin-css-variables-react-props" />
  </a>
  <a href="https://prettier.io">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
  </a>
</p>

```javascript
function Message({ isBold }) {
  return (
    <p className="text" c--font-weight={isBold ? "600" : "400"}>
      Hello World
    </p>
  );
}
```

- `c` is the default custom prefix to specify a CSS variable, hence `c--font-weight`. You can change this prefix in plugin options.
- Setting this CSS variable means that in the corresponding classname, you can set style as:

```css
.text {
  font-weight: var(--font-weight, 400);
}
```

This is especially powerful in case of CSS-in-JS libraries where you can dynamically adapt styles without relying heavily on JavaScript.

```javascript
const Text = styled.p`
  font-weight: var(--font-weight, 400);
`;
```

# Installation

```
npm install --save-dev babel-plugin-css-variables-react-props
```

# Usage

In `.babelrc`:

```
{
  "plugins": ["css-variables-react-props"]
}
```

Other options, visit [Babel Plugins documentation](https://babeljs.io/docs/en/plugins/)

# Options

### Custom Prefix

To set a custom prefix, you can set plugin options in `.babelrc`.

```
{
  "plugins": [
    [
      "css-variables-react-props",
      {
        "prefix": "css"
      }
    ]
  ]
}
```

Now you can use the plugin in code as:

```javascript
css--font-weight={isBold ? "600" : "400"}
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
