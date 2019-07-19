import React from "react";
import classNames from "classnames";

import { TableCtx } from "./Table";

export default function Row({ id, expandable, children }) {
  return (
    <TableCtx.Consumer>
      {({ expandedRows }) => {
        const classes = classNames("row", {
          expandable,
          expanded: expandable && expandedRows[id]
        });

        return <tr className={classes}>{children}</tr>;
      }}
    </TableCtx.Consumer>
  );
}
