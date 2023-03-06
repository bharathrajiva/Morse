import React from 'react';
import { encode } from 'morsee';
import dotSound from './short.wav';
import dashSound from './long.wav';


// const Output = (props) => {
//   return (
//     <div className="output">
//       <h2>Output</h2>
//       <p>{encode(props.value)}</p>
//     </div>
//   );

// }
//
// export default Output;
const dotAudio = new Audio(dotSound);
const dashAudio = new Audio(dashSound);

const playSound = (char) => {
  if (char === '.') {
    dotAudio.play();
  } else if (char === '-') {
    dashAudio.play();
  }
};

const Output = ({ value }) => {
  const morseCode = encode(value);

  return (
    <div className="output">
      <h2>Output</h2>
      <p>{morseCode}</p>
      <button className="button" onClick={() => {
        for (let i = 0; i < morseCode.length; i++) {
          if (morseCode[i] === '.') {
            setTimeout(() => {
              playSound('.');
            }, i * 250);
          } else if (morseCode[i] === '-') {
            setTimeout(() => {
              playSound('-');
            }, i * 250);
          }
        }
      }}>Play</button>
      <figure>
  <div>
    <span>Stop</span>
    <span>Sure ?</span>
  </div>
</figure>
    </div>
  );
};
export default Output;
