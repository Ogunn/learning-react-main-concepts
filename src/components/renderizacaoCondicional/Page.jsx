import React, { Component } from "react";

/**
 * Stateless component
 */
const WarningBanner = props => {
  if (!props.warn) return null;

  return <div className="warning">warning!</div>;
};

/**
 * Statefull component
 */
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
  }

  handleToggleClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  };

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default Page;
