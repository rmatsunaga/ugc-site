import React from "react";

class OrganizationFooter extends React.Component {
  render() {
    return (
      <div className = "flex-container-presidential">
        <hr />
        <div className = "flex-content-presidential">
        &copy; {new Date().getFullYear()} Copyright:{" "}
            Rey Matsunaga, CJay Zhijie Hon, Ashley Djohan
        </div>
      </div>
    );
  }
}

export default OrganizationFooter;