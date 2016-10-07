import Hello1 from './hello1.jsx';
import Hello2 from './hello2.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <Hello1 />
    <Hello2 />
  </div>,
  document.getElementById("content")
);

