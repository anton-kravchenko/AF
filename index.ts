// + all ts should be bundled with web pack.
// + scripts add to html automatically.
// +- images included and put to the sources via webpack
// + scss should be transpile into css
// + jquery should be included in common chunk(CommonChunk Plugin)

// All scripts should use OOP style
// on the page we should show version of the script(version define by webpack)
// version has to be shown only for development version of build

import * as $ from "jquery";
import "./images/ang.png";
import "./images/wp.png";
import "./styles/styles.scss";

$("#app").text("1");