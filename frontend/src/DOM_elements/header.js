import {el} from "redom";
import headerLinksSet from "./headerLinksSet";

// here we export the header that depends on if we have a token, so we export header with link btns
let header;
if (localStorage.getItem('token')) {
  header = el("div.container.header", [
    el("span.me-auto", 'Coin.'),
    headerLinksSet
  ]);
} else {
  header = el("div.container.header", el("span.me-auto", 'Coin.'));
}

export default header;
