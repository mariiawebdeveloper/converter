import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Converter from "./components/Body/Converter";


class App extends React.Component {

  render() {
    return(
        <div>
          <Header/>
            <Converter/>

        </div>
    )
  }
}


export default App;
