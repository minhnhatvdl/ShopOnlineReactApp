import React, { Component } from 'react';
import './App.css';
// import component
import { Header } from './Components/Header';
import { Carousel } from './Components/Carousel';
import { Promotion } from './Components/Promotion';
import { Smartphone } from './Components/Smartphone';
// import data
import SmartphoneData from './Data/SmartphoneData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSmartphone: SmartphoneData
    };
  }
  render() {
    let listSmartphoneTemplate = this.state.listSmartphone.map((e, index) => {
      return(
        <Smartphone key={index} id={e.id} name={e.name} price={e.price} img={require(`${e.img}`)} desc={e.desc} />
      )
    })
    return (
      <div className="App">
        <Header/>
        <Carousel/>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            {listSmartphoneTemplate}
          </div>
        </section>
        <Promotion/>
      </div>
    );
  }
}

export default App;