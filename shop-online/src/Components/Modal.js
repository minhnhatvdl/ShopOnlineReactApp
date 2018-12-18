import React, { Component } from 'react';

export class Modal extends Component {
  render() {
    return (
      	<div className="modal fade" id={this.props.id} tabIndex={-1} role="dialog" aria-labelledby="detailInfosLabel" aria-hidden="true">
	  <div className="modal-dialog" role="document">
	    <div className="modal-content">
	      <div className="modal-header">
	        <h5 className="modal-title" id="detailInfosLabel">{this.props.name}</h5>
	        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">×</span>
	        </button>
	      </div>
	      <div className="modal-body">
	      	<p>{this.props.desc}</p>
	      </div>
	      <div className="modal-footer">
	        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
    );
  }
}

