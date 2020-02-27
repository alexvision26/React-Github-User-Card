import React from 'react';
import axios from 'axios';
import './App.css';

import UserCards from './components/UserCards';

class App extends React.Component {
  state = {
    myCard: [],
    followers: [],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/alexvision26').then(res => {
      // console.log(res.data)
      this.setState({
        myCard: res.data
      })
      }).catch(error => {
        console.log('Fetch error,', error)
      })

      axios.get('https://api.github.com/users/alexvision26/followers').then(res => {
        // console.log(res.data)
        res.data.forEach(item => {
          axios.get(`https://api.github.com/users/${item.login}`).then(response => {
            // console.log(response.data)
            this.setState({
              followers: [...this.state.followers, response.data]
            })
          })
        })
      })
  }

  render() {
  return (
    <div className="App">
      <h2>GitHub User Cards</h2>
      <UserCards myCard={this.state.myCard} followers={this.state.followers}/>
    </div>
  );
  }
}

export default App;
