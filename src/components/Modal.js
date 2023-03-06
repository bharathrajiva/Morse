import React, { useState } from 'react';

function Modal(props) {
  const [showModal, setShowModal] = useState(true);

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div className={`modal ${showModal ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <h2>{props.title}</h2>
          <p>{props.message}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
