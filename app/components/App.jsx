import React from 'react';
import OuterComponent from './OuterComponent.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>Tubix.com</h1>
        <label style={{color:"grey"}}>By Abhinav Jha</label>
        <OuterComponent />
      </div>
    );
  }
}
