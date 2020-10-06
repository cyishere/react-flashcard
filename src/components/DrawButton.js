/*
 * @Author: Chen Yang
 * @Date: 2020-10-05 12:46:38
 * @Last Modified by:   Chen Yang
 * @Last Modified time: 2020-10-05 12:46:38
 */
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
