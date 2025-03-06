import React from "react";

const TableCellWithIcon = ({ Icon, text, iconClass = "", textClass = "" }) => {
  return (
    <td className="p-2">
      <div className="flex items-center gap-1">
        <Icon className={`text-[20px] ${iconClass}`} />
        <span className={textClass}>{text}</span>
      </div>
    </td>
  );
};

export default TableCellWithIcon;
