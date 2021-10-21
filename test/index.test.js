import path from "path";
import pluginTester from "babel-plugin-tester";

import cssVarAsReactProps from "../src";

pluginTester({
  plugin: cssVarAsReactProps,
  pluginName: "cssVarAsReactProps",
  fixtures: path.join(__dirname, "fixtures"),
});
