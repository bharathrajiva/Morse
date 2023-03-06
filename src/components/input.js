import React from 'react';

const Input = (props) => {

  const handleChange = (event) => {
    props.setValue(event.target.value);
  }

  return (
    <div className="input">
      <h2>Input</h2>
      <textarea 
        value={props.value} 
        onChange={handleChange}
        placeholder="Type your message here" 
      />
    </div>
  );
}

export default Input;