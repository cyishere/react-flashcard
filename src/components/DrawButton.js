import React from "react";

const DrawButton = ({ handleDrawCard }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={handleDrawCard}>
        Draw Card
      </button>
    </div>
  );
};

export default DrawButton;
