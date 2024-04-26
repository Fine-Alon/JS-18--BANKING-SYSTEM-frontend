import {el, setChildren} from "redom";
import './css/main.scss';
import header from "./DOM_elements/header.js";
import loginForm from "./DOM_elements/loginForm.js";
import authorize from "./api/authorization";

const appContainer = el("div.container.container-custom")

setChildren(document.body, appContainer);
setChildren(appContainer, header, loginForm);

loginForm.addEventListener('submit', async function (event) {
  event.preventDefault(); // Предотвращаем стандартное действие отправки формы
  const inputsData = loginForm.querySelectorAll('input')
  console.log(inputsData[0].value.toString(), inputsData[1].value.toString())


// Call the authorize function from authorization.js, passing it the form
  authorize(inputsData[0].value.toString(), inputsData[1].value.toString()).then(({payload}) => {
    if (payload.token) {
      const {token} = payload
      localStorage.setItem('token', token);
    } else {
      console.log('Login failed.');
    }
  });
})

