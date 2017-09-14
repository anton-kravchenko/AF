// + all ts should be bundled with web pack.
// + scripts add to html automatically.
// +- images included and put to the sources via webpack
// + scss should be transpile into css
// + jquery should be included in common chunk(CommonChunk Plugin)

// All scripts should use OOP style
// on the page we should show version of the script(version define by webpack)
// version has to be shown only for development version of build


// Create application on type script.
// Application use jquery library, bootstrap scss library and contains few png on the page.
// Application should be contains two input fields (email and name).
// If email and name is valid and button pressed should be show pop-up window with png picture on the background.

import * as $ from "jquery";
import "bootstrap-sass";
import "bootstrap";
// import "./styles/styles.scss";
import SubmitForm from "./src/submitForm";

const sf = new SubmitForm("#app");
sf.render();

// import "./images/ang.png";
// import "./images/wp.png";
// import "./styles/styles.scss";

// import NameInput from "./src/nameInput";
// import EmailInput from "./src/emailInput";

// const angularLogo = $(`<img id="dynamic" src="./images/ang.png">`);
// $("#app").append(angularLogo);

// const webpackLogo = $(`<img id="dynamic" src="./images/wp.png">`);
// $("#app").append(webpackLogo);
