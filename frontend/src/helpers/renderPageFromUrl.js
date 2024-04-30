import accounts from "../DOM_elements/accounts";
import atms from "../DOM_elements/atms";
import renderAppByUrl from "./renderAppByUrl";
import currency from "../DOM_elements/currency";
import loginForm from "../DOM_elements/loginForm";
import Navigo from "navigo";

export const router = new Navigo('/');
const renderPageFromUrl = () => {

  router.on('/', () => {
    renderAppByUrl(accounts)
  });
  router.on('/ATMs', () => {
    renderAppByUrl(atms)
  });
  router.on('/currency', () => {
    renderAppByUrl(currency)
  });
  router.on('/exit', () => {
    renderAppByUrl(loginForm)
  });
  router.on('/accounts', () => {
    renderAppByUrl(accounts)
  })

  router.resolve();
}
export default renderPageFromUrl




