import React from "react";

const PresidentialFooter = () => {
  return (
    <div className = "flex-container-presidential">
      <hr />
      <div className = "flex-content">
      &copy; {new Date().getFullYear()} Copyright:{" "}
          Rey Matsunaga, CJay Zhijie Hon, Ashley Djohan
      </div>
    </div>
  );
}

export default PresidentialFooter;