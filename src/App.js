import React, { Component } from 'react';
import Header from './components/Header'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
         <Header/>
       </div>
       <div className='body'>
          <div className='middleBody'>
            {routes}
          </div>
       </div>
      </div>
    );
  }
}

export default App;
