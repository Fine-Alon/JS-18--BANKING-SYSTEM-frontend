const loadResource = async (src) => {
  //JS
  if (src.endsWith('.js')) {
    return import(src);
  }
  return null
};

const lazyLoad = (js, renderFncName, box) => {

  Promise.all([js]
    .map(src => loadResource(src)))
    .then(async ([moduleJS]) => {
        box.innerHTML = '';
        box.append(await moduleJS[renderFncName]()
        );
      }
    );
};

const lazyLoadByEndPoint = () => {
  const appContainer = document.body
  // тут свич по ендпоинту
  if (episodeID) {
    lazyLoad('./components.js', 'createDetailPage', appContainer);
  } else {
    lazyLoad('./components.js', 'createMainPage', appContainer);
  }
};
export { loadResource, lazyLoad, lazyLoadByEndPoint}
