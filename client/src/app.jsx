import React from 'react';
import StoreContext from './store/store.jsx';
import axios from 'axios';


class MyApp extends React.Component {
  static contextType = StoreContext;
  constructor(props) {
    super(props);
    this.state = {
      context: this.context,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    let context = this.context;
    context.set("name", "Pyro")
  }

  handleSubmit (e) {
    e.preventDefault();
    this.context.set("name", e.target.username.value);
    axios.get(`https://api.github.com/users/${e.target.username.value}/repos`)
      .then(( {data} ) => {
        this.context.set('repos', data);
      })
      .catch((err) => {
        console.log('Error fetching:', err.stack);
      });
  }

  render() {
    return (
      <div>
        Synchronous Calls: <br/>
        Our store has an initial state -- we can test for those initial values when the app or component initially renders as shown below.
        sync call to 'sampleData': <strong> {this.context.get("sampleData")} </strong><br />
        sync call to 'name' after any lifecycle method update : <strong>  {this.context.get("name")} </strong> <br /> <br />

        <form onSubmit={this.handleSubmit}>
          <p>Search a Github Repository:</p>
          <input name="username" placeholder="username" autoComplete="off" defaultValue="iamchrispham"/>
          <button type="submit">Search</button>
        </form>
      </div>


    )
  }
}

// const MyApp = (props) => {
// static contextType = StoreContext;
//   return (
//     <div>

//     </div>
//   )
// }

export default MyApp;