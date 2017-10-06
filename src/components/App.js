import React from 'react';
import Header from'./Header';

import ContestPreview from './ContestPreview';


// use this kind of syntax when state or lifecycle methods needed
class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount() {
    //ajax...
    //timers
    //listeners
  }
  componentWillUnmount() {
    //cleanup
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map(contest =>
            <ContestPreview {...contest} key={contest.id}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;