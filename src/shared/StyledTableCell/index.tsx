import React from "react";
import "./StyledTableCell.scss";

interface StyledTdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const StyledTd: React.FC<StyledTdProps> = ({ children, ...props }) => {
  return (
    <td className="styled-td" {...props}>
      {children}
    </td>
  );
};

export default StyledTd;
