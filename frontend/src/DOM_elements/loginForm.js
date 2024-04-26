import {el} from "redom";

const form = el('form.form-custom', [
  el('h3.mb-3.form-title', 'Sign in'),
  el('div.between', {class: 'row mb-3'}, [
    el('label.me-3', {for: 'inputEmail3', class: 'col-sm-2 col-form-label'}, 'Login'),
    el('div', {class: 'col-sm-9'}, [
      el('input', {type: 'email', class: 'form-control', id: 'inputEmail3'})
    ])
    // el('div.form-text', { id: 'emailHelp' }, "We'll never share your email with anyone else.")
  ]),
  el('div.between', {class: 'row mb-3'}, [
    el('label.me-3', {for: 'inputPassword3', class: 'col-sm-2 col-form-label'}, 'Password'),
    el('div', {class: 'col-sm-9'}, [
      el('input', {type: 'password', class: 'form-control', id: 'inputPassword3'})
    ])
  ]),
  el('button.btn.btn-primary.form-btn', {type: 'submit'}, 'Submit')
]);

export default form
