import React, { useState } from "react";

const Selection = (props) => {
  const { applyColor } = props;
  const [background, setBackground] = useState({ background: "" });

  const updateSelectionStyle = (newBackground) => {
    setBackground(newBackground);
  };

  return (
    <div className="fix-box" style={background} onClick={() => applyColor(updateSelectionStyle)}>
      <p className="subheading">Selection</p>
    </div>
  )
}

export default Selection;
