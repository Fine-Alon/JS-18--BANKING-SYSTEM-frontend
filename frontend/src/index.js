import { el, setChildren } from "redom";
import './css/main.scss';
import header from "./DOM_elements/header.js";
import loginForm from "./DOM_elements/loginForm.js";

const appContainer = el("div.container.container-custom")

setChildren(document.body, appContainer);
setChildren(appContainer, header,loginForm);
