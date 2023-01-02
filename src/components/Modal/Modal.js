import React from "react";
import "./Modal.css"

const Modal = (props) => {
	if (!props.show) {
		return null
	}
  return (
    <div className="modal">
      <div className="modal-content ">
        <div className="modal-header">					
          <h4 className="modal-title">Send Photo</h4>
        </div>
        <div className="modal-body">
				<img src = {props.img} alt="imgsss" className="fotu"/>
				</div>
        <div className="modal-footer">
          <button id="sendbutton" onClick={props.onClose}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
