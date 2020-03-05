import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';



class App extends Component {
  render() {
    return (
      // <div>
      //   <Navbar dark color="primary">
      //     <div className="container">
      //       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      //     </div>
      //   </Navbar>
      //   <Menu dishes={this.state.dishes} />
      // </div>
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
