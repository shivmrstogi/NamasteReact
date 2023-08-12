import React from 'react';
import  ReactDOM  from 'react-dom/client';

const AnotherHeading = (<h1>HI</h1>)

const HeadingComponent =() => {

    return    (
    <div id="container">
        {AnotherHeading}
        <h1>Hello world</h1>
    </div>
)}


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);