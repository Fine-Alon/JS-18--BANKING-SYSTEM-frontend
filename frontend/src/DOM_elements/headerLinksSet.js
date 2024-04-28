import {el, setChildren} from "redom";
import headerLinks from "../helpers/headerLinks";

const headerLinksSet = el('div.text-center.header-links-box');

// 4 links
const links = headerLinks.map(link =>
  el('a.btn.btn-primary.header-link.m-2', {href: link}, link));

setChildren(headerLinksSet, links);

export default headerLinksSet
