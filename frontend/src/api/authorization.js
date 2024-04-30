import {setChildren} from "redom";
import header from "../DOM_elements/header";
import accounts from "../DOM_elements/accounts";
import appContainer from "../DOM_elements/appContainer";
import loginForm from "../DOM_elements/loginForm";

async function authorize() {
  loginForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы
    const inputsData = loginForm.querySelectorAll('input')
    let username = inputsData[0].value
    let password = inputsData[1].value

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: username.toString(),
          password: password.toString()
        })

      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      return await response.json().then(({payload}) => {
        if (payload.token) {
          const {token} = payload
          localStorage.setItem('token', token);
          username = ''
          password = ''
          setChildren(appContainer, [header, accounts]);
        } else {
          console.log('Login failed.');
        }
      });
    } catch (error) {
      console.error('Error logging in:', error);
      return null;
    }
  })
}


export default authorize
