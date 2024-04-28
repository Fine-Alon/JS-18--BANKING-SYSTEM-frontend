import {setChildren} from "redom";
import './css/main.scss';
import header from "./DOM_elements/header.js";
import loginForm from "./DOM_elements/loginForm.js";

import authorize from "./api/authorization";
import appContainer from "./DOM_elements/appContainer";
import bankAccounts from "./DOM_elements/bankAccounts";
import headerLinksSet from "./DOM_elements/headerLinksSet";

setChildren(document.body, appContainer);
setChildren(appContainer, [header, loginForm]);

// Checking if a token exist in localStorage. If it does, will immediately navigate to the accounts page.
localStorage.getItem('token')
  //headerLinksSet
  ? setChildren(appContainer, [header, bankAccounts])
  // if not localStorage, Call the authorize function from authorization.js
  : authorize()



