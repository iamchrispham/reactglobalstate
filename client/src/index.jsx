import React, { createContext } from 'react';
import { render } from 'react-dom';
import MyApp from './app.jsx';
import Repos from './components/repos.jsx';
import StoreContext from './store/store.jsx';

class AppWithContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      get: key => {
        return this.state[key]
      },
      set: (key, value) => {
        const state = this.state;
        state[key] = value;
        this.setState(state);
      },
      remove: key => {
        const state = this.state;
        delete state[key];
        this.setState(state);
      },
      sampleData: 'this is global sample data'
    }
  }

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        <div>
          Very simple app created by me showcasing the usage of context API.
          <MyApp />
          <Repos />
        </div>
      </StoreContext.Provider >
    )
  }
}

render(<AppWithContext />, document.getElementById("app"));