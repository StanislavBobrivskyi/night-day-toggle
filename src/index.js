const BUTTON = document.querySelector('button');
const SYNC = document.querySelector('#sync');

const TOGGLE = () => {
  const IS_PRESSED = BUTTON.matches('[aria-pressed=true]');
  //uncomment to be able to choose a topic via a checkbox
  //   if (SYNC.checked)

  document.body.setAttribute('data-dark-mode', IS_PRESSED ? false : true);
  BUTTON.setAttribute('aria-pressed', IS_PRESSED ? false : true);
};

BUTTON.addEventListener('click', TOGGLE);
