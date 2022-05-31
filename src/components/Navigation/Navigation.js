import React from 'react';

const Navigation = () => {
  return (
    <nav style={
      {display: 'flex', justifyContent: 'flex-end'}
    }>
    <p className="f3 link dim underline black  cursor-pointer pa2">Log Out</p>
    </nav>
  );
}

export default Navigation;