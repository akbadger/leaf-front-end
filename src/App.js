import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
	//constructor(props) {
        //super(props)
        // this.getProducts = this.getProducts.bind(this)
        // this.getProduct = this.getProduct.bind(this)
    
    // this.state = {
    //     products: [],
    //     product: {}
    // }
//}


  render() {
    return (
      <div>
        <Nav/>
			<div className="container">
				{this.props.children}
			</div>
        <Footer/>
    </div>
    );
  }
}

export default App;
