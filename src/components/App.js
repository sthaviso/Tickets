/**
 * App component
 */
import React from 'react';
import Menu from "./Menu";
export default class App extends React.Component
{

  render()
  {
    // render
    return (
      <div className="container">
        <div className="row">
          <Menu/>
        </div>
        <div className="row">
          {this.props.children}
        </div>

      </div>
    );
  }
}
