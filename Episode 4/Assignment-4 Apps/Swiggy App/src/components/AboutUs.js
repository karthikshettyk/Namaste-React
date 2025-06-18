import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("It is called after initial render");
  }

  componentDidUpdate() {
    console.log("It is called after the updates");
  }

  // componentDidCatch() {
  //   console.log("component did catch - needs to learn");
  // }

  // shouldComponentUpdate() {
  //   console.log("should componet update - needs to learn");
  // }

  componentWillUnmount() {
    console.log("It is called before unmounting the component");
  }

  increamentCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decreamentCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <div>About Us</div>
        <div>Karthik - Senior Developer</div>
        <div>The props are: </div>
        <button onClick={this.increamentCount}>Increament</button>
        <div>{this.state.count}</div>
        <button onClick={this.decreamentCount}>Decreament</button>
      </div>
    );
  }
}

export default AboutUs;
