import {setChildren} from "redom";
import appContainer from "../DOM_elements/appContainer";
import header from "../DOM_elements/header";

const renderAppByUrl = (renderObj) => {
  setChildren(window.document.body, appContainer);
  setChildren(appContainer, [header, renderObj]);
}

export default renderAppByUrl
