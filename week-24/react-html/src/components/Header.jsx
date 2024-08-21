import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <div>
        This is where the heading text should go into and I want my parent to
        tell me what the text we should use for title
        <h1>Heading text is: {props.abc}</h1>
        <div>New property: is {props.item}</div>
      </div>
      <div>
        This is where I want my parent to tell me the dynamic content they want
        me to put inside
        <div className="some-children">{props.children}</div>
      </div>
    </div>
  );
}

export default Header;
