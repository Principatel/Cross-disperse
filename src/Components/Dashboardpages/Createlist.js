import React, { useState } from "react";
import "../../Styles/dashboard/createlist.css";

function Createlist() {
  const [listData, setListData] = useState([]);
  const [formData, setFormData] = useState({
    receiverAddress: "",
    tokenAmount: "",
    tokenSymbol: "",
    chainName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddClick = () => {
    setListData([...listData, formData]);
    setFormData({
      receiverAddress: "",
      tokenAmount: "",
      tokenSymbol: "",
      chainName: "",
    });
  };

  return (
    <div>
      {/* <p>Create List</p> */}
      <div className="user-form-for-list">
        <input
          className="each-input-of-create-list"
          type="text"
          name="receiverAddress"
          value={formData.receiverAddress}
          placeholder="Enter Receiver Address"
          onChange={handleInputChange}
        />
        <input
          className="each-input-of-create-list"
          type="text"
          name="tokenAmount"
          value={formData.tokenAmount}
          placeholder="Enter Token Amount"
          onChange={handleInputChange}
        />
        <input
          className="each-input-of-create-list"
          type="text"
          name="tokenSymbol"
          value={formData.tokenSymbol}
          placeholder="Enter Token Symbol"
          onChange={handleInputChange}
        />
        <input
          className="each-input-of-create-list"
          type="text"
          name="chainName"
          value={formData.chainName}
          placeholder="Enter Chain name"
          onChange={handleInputChange}
        />
        <button onClick={handleAddClick}>ADD</button>
      </div>
      <div className="div-to-add-the-tx">
        <h1>Your Transaction Lineup</h1>
        <table>
          <thead>
            <tr>
              <th>Receive Address</th>
              <th>Token Amount</th>
              <th>Token Symbol</th>
              <th>Chain Name</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((data, index) => (
              <tr key={index}>
                <td>{data.receiverAddress}</td>
                <td>{data.tokenAmount}</td>
                <td>{data.tokenSymbol}</td>
                <td>{data.chainName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Createlist;
