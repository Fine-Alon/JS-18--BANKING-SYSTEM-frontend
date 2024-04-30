import {el, setChildren} from "redom";
import './css/main.scss';
import header from "./DOM_elements/header.js";
import loginForm from "./DOM_elements/loginForm.js";
import authorize from "./api/authorization";
import appContainer from "./DOM_elements/appContainer";
import accounts from "./DOM_elements/accounts";
import headerLinksSet from "./DOM_elements/headerLinksSet";
import Navigo from "navigo";
import renderAccountsContainer from "./helpers/renderAccountsContainer";

export const router = new Navigo('/');
router.on('/accounts', () => {
  console.log('dfsgf')
  setChildren(window.document.body, el('div', 'fjgfgfhjfgkhggf'))
});
router.resolve();


setChildren(document.body, appContainer);
setChildren(appContainer, [header, loginForm]);

// Checking if a token exist in localStorage. If it does, will immediately navigate to the accounts page.
localStorage.getItem('token')
  //headerLinksSet
  ? setChildren(appContainer, [header, accounts])
  // if not localStorage, Call the authorize function from authorization.js
  : authorize()



