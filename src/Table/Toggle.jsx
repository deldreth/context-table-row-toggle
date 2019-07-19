import React from "react";

import { TableCtx } from "./Table";

export default function Toggle({ forRow }) {
  return (
    <TableCtx.Consumer>
      {({ expandedRows, onToggleClick }) => {
        const text = !expandedRows[forRow] ? "Show" : "Hide";

        return <div onClick={() => onToggleClick(forRow)}>{text}</div>;
      }}
    </TableCtx.Consumer>
  );
}
