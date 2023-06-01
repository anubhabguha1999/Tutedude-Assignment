import React from "react";
import "./refferandearn.css";

const refferandearn = () => {
  return (
    <div className="Referral">
      <div className="block">
        <div className="description">
          <ul>
            <li>Referral Earning</li>
            <li className="amount">&#8377;2500</li>
          </ul>
          <ul>
            <li>Total Referrals</li>
            <li className="amount">7</li>
          </ul>
          <ul>
            <li>Wallet Balance</li>
            <li className="amount">&#8377;500</li>
          </ul>
        </div>
        <button>Withdraw Balance</button>
      </div>
      <div className="reffercodeEDCH54">
        <p className="headingcodeEDCH54">Your Referral Code</p>
        <p className="codeEDCH54">EDCH54</p>
      </div>
    </div>
  );
};

export default refferandearn;
