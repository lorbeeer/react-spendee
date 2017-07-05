import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import shortid from 'shortid';

// Make use of local storage
if (localStorage.getItem('categories') === null) {
  let categories = '[{"id":"1", "name":"travel"},{"id":"2", "name":"rent"}, {"id":"3", "name":"personal"}, {"id":"4", "name":"food"}, {"id":"5", "name":"drinks"}]';
  localStorage.setItem('categories', categories);
}
if (localStorage.getItem('expenses') === null) {
  let expenses = '[]';
  localStorage.setItem('expenses', expenses);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
