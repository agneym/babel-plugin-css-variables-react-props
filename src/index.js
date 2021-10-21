const DEFAULT_PREFIX = "c";

function findStyleIfExists({ attributes, t }) {
  const style = attributes.find((attribute) => {
    if (!t.isJSXAttribute(attribute)) {
      return false;
    }
    const jSXAttribute = attribute.name;
    if (t.isJSXIdentifier(jSXAttribute, { name: "style" })) {
      return true;
    }
    return false;
  });
  return style;
}

function addToStyle({ attribute, t, stylePair }) {
  const {
    expression: { properties },
  } = attribute.value;
  properties.push(stylePair);
}

function getVariableValue({ value }) {
  return value.expression || value;
}

function addAttribute({ t, path, value, label }) {
  const newStylePair = t.objectProperty(
    t.stringLiteral(label),
    getVariableValue({ value })
  );
  const existingStyleAttribute = findStyleIfExists({
    t,
    attributes: path.node.attributes,
  });

  if (existingStyleAttribute) {
    addToStyle({
      attribute: existingStyleAttribute,
      t,
      stylePair: newStylePair,
    });
    return;
  }

  path.node.attributes.push(
    t.jSXAttribute(
      t.jSXIdentifier("style"),
      t.jSXExpressionContainer(t.objectExpression([newStylePair]))
    )
  );
}

export default function (babel) {
  const { types: t } = babel;

  return {
    inherits: require("babel-plugin-syntax-jsx"),
    visitor: {
      JSXAttribute(path, state) {
        const prefix = state.opts.prefix || DEFAULT_PREFIX;
        const jsxPropertyName = path.node.name.name;
        if (jsxPropertyName.startsWith(`${prefix}--`)) {
          const parentOpeningPath = path.findParent((path) =>
            path.isJSXOpeningElement()
          );
          const label = jsxPropertyName.replace(prefix, "");
          addAttribute({
            t,
            path: parentOpeningPath,
            value: path.node.value,
            label,
          });
          path.remove();
        }
      },
    },
  };
}
