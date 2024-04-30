import {setChildren} from "redom";
import header from "../DOM_elements/header";
import atms from "../DOM_elements/atms";


const renderAtmsContainer = (appContainer) => {
  setChildren(appContainer, [header, atms])
  return appContainer
}

export default renderAtmsContainer
