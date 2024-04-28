import {el, setChildren} from "redom";

const headerLinksSet = el('div.container.text-center');

// 4 links
const links = Array.from({length: 4}, () => el(
  'a.btn.btn-primary.m-2', {href: '#'}, 'Link'));

setChildren(headerLinksSet, links);

export default headerLinksSet
