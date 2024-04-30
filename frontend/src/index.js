import './css/main.scss';
import renderPageFromUrl from "./helpers/renderPageFromUrl";
import renderAppByUrl from "./helpers/renderAppByUrl";
import accounts from "./DOM_elements/accounts";
import loginForm from "./DOM_elements/loginForm";

// Checking if a token exist in localStorage. If it does, will immediately navigate to the accounts page.
localStorage.getItem('token')
  //headerLinksSet
  ? renderAppByUrl(accounts)
  // if not localStorage, Call the authorize function from authorization.js
  : renderAppByUrl(loginForm)

renderPageFromUrl()

