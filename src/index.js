import React from 'react';
import ReactDOM from 'react-dom';
import OutOfScope from '../OutOfScope';

ReactDOM.render(
    <div>{(new OutOfScope()).getText()}</div>,
    document.getElementById('test')
);