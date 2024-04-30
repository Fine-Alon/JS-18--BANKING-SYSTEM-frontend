import {el, setChildren} from "redom";
import header from "../DOM_elements/header";
import accounts from "../DOM_elements/accounts";
import appContainer from "../DOM_elements/appContainer";


const renderAccountsContainer = () => {
  console.log('renderAccountsContainer')
  setChildren(appContainer, [header, accounts])

  setChildren(window.document.body, appContainer)
}

export default renderAccountsContainer
