import React from "react";

class UGCFooter extends React.Component {
  render() {
    return (
      <div className = "footer-container">
        <hr />
            &copy; {new Date().getFullYear()} Copyright:{" "}
            Rey Matsunaga, CJay Zhijie Hon, Ashley Djohan
        </div>
    );
  }
}

export default UGCFooter;