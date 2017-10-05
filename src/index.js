import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return (
    <div>
      <h2 className="text-center">
        {props.headerMessage}
      </h2>
      <div>
        ...
      </div>
    </div>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string.isRequired
};

App.defultProps = {
  headerMessage: 'Hello!'
};

ReactDOM.render(
  <App headerMessage="Hello props!" />,
  document.getElementById('root')
);