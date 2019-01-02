import React from "react";

const HomeFooter = () => {
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

export default HomeFooter;