import React, { Component } from 'react'

class App extends Component {

componentDidMount() {
  fetch('http://localhost:5000')
        .then(response=> response.json())
        .then(result => alert(result))
}


  render() {
    return (
      <div>hi</div>
    )
  }

}

export default App;
