import renderAccountsContainer from "./renderAccountsContainer";
import {router} from "../index";

const renderPageFromUrl = () => {
  const pathname = window.location.pathname;

  // Проверяем значение в URL и отображаем соответствующий контейнер
  switch (pathname) {
    case "/":
      renderAccountsContainer()
      break;
    case "/accounts":
      router.on('/accounts', () => {
        console.log('dfsgf')
      });
      break;
    default:
      null
    // renderDefaultContainer();
  }
}
export default renderPageFromUrl




