// import React
import React from "react";

// define component
class Hello extends React.Component {
  // render method is mandatory
  render() {
    return <div>Hello {this.props.firstName} {this.props.lastName}!</div>;
  }
}

// export class so it can be used by other components
export default Hello;
