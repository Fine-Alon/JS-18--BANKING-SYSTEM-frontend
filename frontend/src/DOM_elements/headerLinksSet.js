import {el, setChildren} from "redom";
import headerLinks from "../helpers/headerLinks";
import {router} from "../helpers/renderPageFromUrl";

const headerLinksSet = el('div.text-center.header-links-box');

// 4 links
const links = headerLinks.map(link =>
  el('a.btn.btn-primary.header-link.m-2', {
    href: link,
    onclick(e) {
      e.preventDefault()
      console.log(e.target.getAttribute('href'))
      router.navigate(e.target.getAttribute('href'))
    }
  }, link));

setChildren(headerLinksSet, links);

export default headerLinksSet
