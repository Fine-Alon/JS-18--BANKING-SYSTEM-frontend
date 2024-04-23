import { el, setChildren } from "redom";
import './css/main.scss';


const header = el("div.container.header");


setChildren(document.body, header);
