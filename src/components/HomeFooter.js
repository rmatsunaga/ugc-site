import React from "react";

class HomeFooter extends React.Component {
  render() {
    return (
      <div className = "flex-container-home">
        <hr />
        <div className = "flex-content">
        &copy; {new Date().getFullYear()} Copyright:{" "}
            Rey Matsunaga, CJay Zhijie Hon, Ashley Djohan
        </div>
      </div>
    );
  }
}

export default HomeFooter;