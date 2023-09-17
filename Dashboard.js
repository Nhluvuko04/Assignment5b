import React from "react"; // importing react
import "../index.css";

function Dashboard() {
  // creating Dashboard cart
  return (
    <div className="admin">
      <div className="cards">
        <div className="cards__container">
          <h1>Number of Questions</h1>
          <h3>458</h3>
        </div>

        <div className="cards__container">
          <h1>Agreements</h1>
          <h3>48</h3>
        </div>
        <div className="cards__container">
          <h1>Disagreement </h1>
          <h3>148</h3>
        </div>
        <div className="cards__container">
          <h1>Neutral </h1>
          <h3>350</h3>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
