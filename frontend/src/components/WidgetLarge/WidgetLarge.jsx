import React from "react";
import "./widgetLarge.css";

const Button = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};

const WidgetLarge = () => {
  return (
    <div className="widgetLarge">
      <span className="widgetLargeTitle">Latest transactions</span>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargrTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <span className="widgetLargeName">1234</span>
          </td>
          <td className="widgetLargeDate">12-12-2022</td>
          <td className="widgetLargeAmount">$430</td>
          <td className="widgetLargeStatus">
            <Button type="approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <span className="widgetLargeName">1234</span>
          </td>
          <td className="widgetLargeDate">12-12-2022</td>
          <td className="widgetLargeAmount">$430</td>
          <td className="widgetLargeStatus">
            <Button type="declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <span className="widgetLargeName">1234</span>
          </td>
          <td className="widgetLargeDate">12-12-2022</td>
          <td className="widgetLargeAmount">$430</td>
          <td className="widgetLargeStatus">
            <Button type="pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <span className="widgetLargeName">1234</span>
          </td>
          <td className="widgetLargeDate">12-12-2022</td>
          <td className="widgetLargeAmount">$430</td>
          <td className="widgetLargeStatus">
            <Button type="approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;