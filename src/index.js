import React from 'react';
import ReactDOM from 'react-dom';
//React.PropTypes has moved into a different package since React v15.5

import data from './testData';

import App from './components/App';


ReactDOM.render(
  <App contests={data.contests} />,
  document.getElementById('root')
);


// setTimeout(() => {
//   ReactDOM.render(
//     <h2>...</h2>,
//     document.getElementById('root')
//   );
// }, 4000);