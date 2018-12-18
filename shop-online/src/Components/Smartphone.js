import React, { Component } from 'react';
import { Modal } from './Modal';
import swal from 'sweetalert';

export class Smartphone extends Component {
  handlerCart() {
  	swal({
	  title: "Do you want to buy this product?",
	  text: "Once selected, this product will be added in your cart!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((ok) => {
	  if (ok) {
	    swal("Yeah! The product has been added!", {
	      icon: "success",
	    });
	  } else {
	    swal("You didn't add this product in your cart!");
	  }
	});
  }
  render() {
    return (
      	<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
	  <div className="container">
	    <div className="card bg-light" style={{width: '300px'}}>
	      <img className="card-img-top" src={this.props.img} alt="Card image" style={{maxWidth: '100%', height: '250px'}} />
	      <div className="card-body text-center">
	        <h4 className="card-title text-center">{this.props.name}</h4>
	        <h5 className="card-title text-center">{this.props.price}</h5>
	        <p className="card-text">{this.props.desc}</p>
	        <a className="btn btn-primary text-white" data-toggle="modal" data-target={`#${this.props.id}`}>Detail</a>
	        <a className="btn btn-danger text-white" onClick={this.handlerCart}>Cart</a>
	      </div>
	    </div>
	  </div>
	  <Modal id={this.props.id} name={this.props.name} price={this.props.price} desc={this.props.desc} />
	</div>
    );
  }
}