import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts.json')
      .then(
        (response) => {
          this.setState({
            isLoaded:true,
            items: response.data.posts
          })
        }
      )
      .catch(
        (error) => {
          this.setState({
            isLoaded: true,
            error: error.response.data
          })
        }
      ) 
  }
  
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.status}, {error.error}, {error.exception}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.title}>
              {item.title} {item.content}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
