import React from "react";
import "../../Styles/iihomepage.css";

function Iihomepage() {
  const userGuideItems = [
    {
      title: "Connect Wallet",
      description: "Link your wallet.",
    },
    {
      title: "List Transactions",
      description: "Enter recipient details.",
    },
    {
      title: "Send",
      description: "Initiate the transactions.",
    },
    {
      title: "View History",
      description: "Monitor your transactions.",
    },
  ];

  return (
    <div>
      <div className="main-div-for-homepage-ii">
        <div className="iihomepage-tile">
          <h1>Cross-Disperse Walkthrough</h1>
        </div>
        <div className="user-manual-list-iihomepage">
          <div className="card-row">
            {userGuideItems.slice(0, 2).map((item, index) => (
              <div className="user-guide-card" key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="card-row">
            {userGuideItems.slice(2).map((item, index) => (
              <div className="user-guide-card" key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iihomepage;
